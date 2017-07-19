package com.yimei.jfc.core

import java.sql.Timestamp
import java.text.SimpleDateFormat
import java.time.format.DateTimeFormatter
import java.time.{Instant, LocalDateTime, ZoneId, ZoneOffset}
import java.util.Date

import akka.event.Logging
import akka.http.scaladsl.Http
import akka.http.scaladsl.Http.ServerBinding
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import akka.http.scaladsl.model.StatusCodes._
import akka.http.scaladsl.model._
import akka.http.scaladsl.server.{AuthorizationFailedRejection, _}
import akka.http.scaladsl.server.directives.LogEntry
import akka.stream.scaladsl.Sink
import org.mongodb.scala.bson.{BsonDateTime, ObjectId}
import pdi.jwt.exceptions.JwtValidationException
import pdi.jwt.{Jwt, JwtAlgorithm}
import spray.json.{DefaultJsonProtocol, DeserializationException, JsString, JsValue, JsonFormat, RootJsonFormat}

import scala.concurrent.Future
import scala.util.control.NonFatal
import scala.util.matching.Regex

trait CustomerJsonSupport {

  implicit object BsonDateTimeFormat extends RootJsonFormat[BsonDateTime] {

    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    override def write(obj: BsonDateTime) = {
      val date = LocalDateTime.ofInstant(Instant.ofEpochMilli(obj.getValue), ZoneId.systemDefault())
      JsString(date.format(formatter))
    }

    override def read(json: JsValue): BsonDateTime = {
      json match {
        case JsString(s) => {
          val ldt = LocalDateTime.parse(s, formatter)
          BsonDateTime(ldt.toEpochSecond(ZoneOffset.UTC))
        }
        case _ => throw new DeserializationException("Error info you want here ...")
      }
    }
  }

  // 一些常用的spray-json format
  implicit object SqlTimestampFormat extends RootJsonFormat[Timestamp] {
    override def write(obj: Timestamp) = {
      val formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
      JsString(formatter.format(obj))
    }

    override def read(json: JsValue): Timestamp = {
      val formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
      json match {
        case JsString(s) => new Timestamp(formatter.parse(s).getTime)
        case _ => throw new DeserializationException("Error info you want here ...")
      }
    }
  }

  implicit object DateJsonFormat extends RootJsonFormat[Date] {

    val formatter = new SimpleDateFormat("yyyy-MM-dd")

    override def write(obj: Date) = JsString(formatter.format(obj))

    override def read(json: JsValue): Date = json match {
      case JsString(s) => formatter.parse(s)
      case _ => throw new DeserializationException("Error info you want here ...")
    }
  }

  implicit object ObjectIdJsonFormat extends RootJsonFormat[ObjectId] {

    override def write(obj: ObjectId) = JsString(obj.toString)

    override def read(json: JsValue): ObjectId = json match {
      case JsString(s) => new ObjectId(s)
      case _ => throw new DeserializationException("Error info you want here ...")
    }
  }

}

/**
  * Created by hary on 2017/5/12.
  */
trait HttpSupport extends Core
  with AppConfig
  with CustomerJsonSupport
  with ExceptionSupport
  with ApiSupport
  with DefaultJsonProtocol
  with SprayJsonSupport
  with RedisSupport {


  import akka.http.scaladsl.server.Directive1
  import akka.http.scaladsl.server.Directives._

  case class JwtSession(_id: ObjectId, username: String, phone: String, roleType: Int, systemId: Int)

  implicit val JwtSessionFormat = jsonFormat5(JwtSession)


  // 指令 - 获取分页参数  Symbol
  val page: Directive[Tuple1[Pager]] = parameters('pageSize.?, 'pageNum.?).tmap(t => Pager(t._1.map(_.toInt).orElse(Some(10)), t._2.map(_.toInt).orElse(Some(1))))

  // 指令 - 获取JwtSession
  def jwt(systemId: Int): Directive1[JwtSession] = headerValueByName("Authorization") map { auth =>
    try {
      log.warning("auth = [{}]", auth)
      val regex: Regex = """Bearer (\S+)""".r
      val regex(token) = auth
      Jwt.decode(token, jwtSecret, Seq(JwtAlgorithm.HS256)).map { claim =>
        import spray.json._
        claim.parseJson.convertTo[JwtSession]
      }.get
    } catch {
      case t: Throwable => throw new JwtValidationException("token error")

    }
  }


  def check(t: (Boolean, String)) = validate(t._1, t._2)


  def oint(name: String): Directive1[Option[Int]] = {
    parameter(name.?).tflatMap {
      case t1: Tuple1[Option[String]] =>
        try {
          provide(t1._1.map(_.toInt))
        } catch {
          case NonFatal(e) => reject(MalformedFormFieldRejection(name, "invalid int", Some(e)))
        }
    }
  }

  def obool(name: String): Directive1[Option[Boolean]] = {
    parameter(name.?).tflatMap {
      case t1: Tuple1[Option[String]] =>
        try {
          val k = t1._1.map {
            case "true" => true
            case "false" => false
            case _ => throw new Exception("invalid boolean rep")
          }
          provide(k)
        } catch {
          case NonFatal(e) => reject(MalformedFormFieldRejection(name, "invalid int", Some(e)))
        }
    }
  }

  def odouble(name: String): Directive1[Option[Double]] = {
    parameter(name.?).tflatMap {
      case t1: Tuple1[Option[String]] =>
        try {
          provide(t1._1.map(_.toDouble))
        } catch {
          case NonFatal(e) => reject(MalformedFormFieldRejection(name, "invalid double", Some(e)))
        }
    }
  }


  // 指令 - result: 将T变成Result[T]响应客户端, 将Future[T]变成Future[Result[T]]响应客户端
  import akka.http.scaladsl.server.Directives._

  def result[T: JsonFormat](t: T) = complete(success(t))

  def result[T: JsonFormat](tf: Future[T]) = complete(tf.map(success(_)))


  private def completeReject(uri: Uri, status: StatusCode, msg: String) = {
    log.warning(s"{} failed, error: {}", uri, msg)
    complete(HttpResponse(status, entity = failed[String](status.intValue, msg).toJson.toString()))
  }

  private def completeException(uri: Uri, status: StatusCode, e: InternalException) = {
    log.warning(s"{} failed, error: {}", uri, e.message)
    log.debug("{}", e.getStackTrace.mkString("\n"))
    complete(HttpResponse(status, entity = failed[String](status.intValue, e.message).toJson.toString))
  }

  private def completeException[T](status: StatusCode, errorCode: Int, msg: String) = {
    complete(HttpResponse(status, entity = failed[String](status.intValue, msg).toJson.toString()))
  }

  // akka-http exception handler
  implicit def myExceptionHandler: ExceptionHandler = ExceptionHandler {
    case e: DatabaseException => extractUri { uri => completeException(uri, StatusCodes.InternalServerError, e) }
    case e: BusinessException => extractUri { uri => completeException(uri, StatusCodes.BadRequest, e) }
    case e: JwtValidationException => extractUri { _ => completeException(StatusCodes.Unauthorized, 2000, "JwtTokenException") }
    case e: ForbiddenException => extractUri { _ => complete(failed[Boolean](2001, "ForbiddenException")) }
    case e: CompanyException => extractUri { _ => completeException(StatusCodes.BadRequest, 4000, "公司状态异常") }
    case e: NotFoundException => extractUri { uri =>
      log.info("数据不存在")
      completeException(uri, StatusCodes.NotFound, e)
    }
    case NonFatal(e) =>
      extractUri { uri =>
        log.error(s"Request to $uri could not be handled normally!!!!!!!!!")
        e.printStackTrace()
        complete(HttpResponse(StatusCodes.InternalServerError, entity = failed(500, e.getStackTrace.mkString("\n")).toJson.toString()))
      }
  }

  // akka-http rejection handler
  implicit def myRejectionHandler =
    RejectionHandler.newBuilder().handle {
      case MissingCookieRejection(cookieName) => extractUri { uri => completeReject(uri, BadRequest, s"cookie $cookieName needed") }
      case MissingQueryParamRejection(name) => extractUri { uri => completeReject(uri, BadRequest, s"missing request parameter $name") }
      case AuthorizationFailedRejection => extractUri { uri => completeReject(uri, Unauthorized, s"authorization failed") }
      case ValidationRejection(msg, _) => extractUri { uri => completeReject(uri, BadRequest, s"validation: $msg") }
      case MissingHeaderRejection(header) => extractUri { uri => completeReject(uri, BadRequest, s"missing header $header") }
      case MalformedRequestContentRejection(msg, _) => extractUri { uri =>
        val p2: Regex = """Object is missing required member '(\S+)'""".r
        msg match {
          case p2(field) =>   completeReject(uri, BadRequest, s"$field 缺失")
          case _ =>   completeReject(uri, BadRequest, msg)
        }
      }
    }.handleAll[MethodRejection] { methodRejections =>
      extractUri { uri =>
        val names = methodRejections.map(_.supported.name).mkString(",")
        completeReject(uri, MethodNotAllowed, s"only support method: $names")
      }
    }.handleNotFound {
      extractUri { uri => completeReject(uri, NotFound, s"$uri --> not found match route") }
    }.result()


  // 启动http
  def startHttp(route: Route) = {

    def extractLogEntry(req: HttpRequest): RouteResult => Option[LogEntry] = {
      case RouteResult.Complete(res) => Some(LogEntry(req.method.name + " " + req.uri + " => " + res.status, Logging.InfoLevel))
      case _ => None // no log entries for rejections
    }

    val wrapper: Route = logRequestResult(extractLogEntry _)(route)

    log.info("http is listening on {}", jfcPort)
    val server = Http(coreSystem).bind("0.0.0.0", jfcPort)

    import akka.http.scaladsl.server.Route._
    val handler: Future[ServerBinding] =
      server
        .to(Sink.foreach { connection => connection.handleWithAsyncHandler(asyncHandler(wrapper)) })
        .run()
    handler.failed.foreach { case ex: Exception ⇒ log.error(ex, "Failed to bind to :{}", jfcPort) }

  }
}

