package com.yimei.jfc.captcha

import akka.http.scaladsl.model.ContentTypes.`application/octet-stream`
import akka.http.scaladsl.model.headers.{ContentDispositionTypes, `Content-Disposition`}
import akka.http.scaladsl.model.{HttpEntity, HttpResponse, StatusCodes}
import com.yimei.jfc.core._

import scala.concurrent.{ExecutionContext, Future}

/**
  * Created by hary on 2017/5/13.
  */
trait CaptchaController extends CoreSupport {

  // 获取验证码
  def handleGetCaptcha(clientId: String)(implicit ec: ExecutionContext): Future[HttpResponse] = {
    val (source, code) = Utils.genRecaptcha
    log.info(s"生成的随机图片验证码为: $code")
    redisClient.setex(s"$clientId:kap", 1000, code) map {
      if (_) {
        HttpResponse(
          status = StatusCodes.OK,
          headers = List(`Content-Disposition`(ContentDispositionTypes.inline)),
          entity = HttpEntity(`application/octet-stream`, source)
        )
      } else {
        throw DatabaseException("can not save recaptha to redis")
      }
    }
  }

  // 校验验证码
  def handleCheckCaptcha(clientId: String, code: String): Future[Boolean] = {
    redisClient.get[String](s"$clientId:kap").map { (store: Option[String]) =>
      log.debug(s"got from reids[$store], code[$code], clientId[$clientId]")
      store.getOrElse("") == code
    }
  }


  // 获取图片验证码
  def findCaptcha(clientId: String): Future[Result[String]] = {
    if ( coreConfig.getBoolean("test")) {
      redisClient.get[String](s"$clientId:kap").map {
        case None => failed[String](400, "没有找到验证码")
        case Some(code) => success(code)
      }
    } else {
      Future.successful(success("999999"))
    }
  }
}
