package com.yimei.jfc.user

import java.util.Date

import akka.http.scaladsl.model.{HttpResponse, StatusCodes}
import akka.http.scaladsl.server.directives.BasicDirectives.{extract, extractExecutionContext, pass}
import akka.http.scaladsl.server.directives.FutureDirectives.onComplete
import akka.http.scaladsl.server.directives.RouteDirectives.reject
import akka.http.scaladsl.server.{AuthorizationFailedRejection, Directive, Directive0, RequestContext}
import com.yimei.jfc.core._
import com.yimei.jfc.dict.CompanyStatus.CompanyStatus
import com.yimei.jfc.dict.SystemType.SystemType
import com.yimei.jfc.dict._
import org.mongodb.scala.bson.ObjectId
import org.mongodb.scala.model.Filters._
import org.mongodb.scala.model.Sorts._
import org.mongodb.scala.model.Updates._
import org.mongodb.scala.model.{FindOneAndReplaceOptions, FindOneAndUpdateOptions, UpdateOptions}

import scala.async.Async.{async, await}
import scala.concurrent.{Await, Future}
import scala.util.Success

/**
  * Created by xiangyang on 2017/6/5.
  */

trait CompanyService extends MongoSupport with MongoSyncSupport with UserService {


  def companyIsVerifyed(session: JwtSession): Future[Boolean] = {
    loadCompanyBasicDetail(session).map {
      c =>
        if(session.systemId==SystemType.platform.id){
          true
        } else if (c.companyStatus.isEmpty || c.companyStatus.get != CompanyStatus.CS_SUCCESS.id) {
          log.info("公司状态信息尚未审核通过")
          throw new CompanyException(c.companyStatus.getOrElse(-1), "公司信息认证未通过!")
        } else {
          true
        }
    }
  }


  //验证公司状态
  def companyAuth(session: JwtSession): Directive0 = {
    def mycheck(ctx: RequestContext): Future[Boolean] = companyIsVerifyed(session)

    import akka.http.scaladsl.server.directives.BasicDirectives._
    import akka.http.scaladsl.server.directives.RouteDirectives._
    import akka.http.scaladsl.server.directives.FutureDirectives._

    extractExecutionContext.flatMap { implicit ec ⇒
      extract(mycheck).flatMap[Unit] { fa ⇒
        onComplete(fa).flatMap {
          case Success(true) ⇒ pass
          case _ ⇒ complete(HttpResponse(StatusCodes.BadRequest, entity = failed(4000, "公司状态异常").toJson.toString))
        }
      }
    }
  }

  //是平台方
  def isPlatform(session: JwtSession): Boolean = {
    if (session.systemId != SystemType.platform.id) {
      false
    } else {
      true
    }
  }

  def saveCompany(jwtSession: JwtSession, companyDocument: CompanyDocument, systemType: SystemType, companyStatus: CompanyStatus): Future[Result[String]] = {
    val company = companyDocument.copy(
      createBy = Some(jwtSession._id.toString),
      createDate = Some(new Date),
      companyStatus = Some(companyStatus.id),
      systemId = Some(systemType.id))


    findPersonalInfo(jwtSession._id)
      .map(u => u.companyId)
      .flatMap {
        case Some(companyId) => {
          mongoCompany.findOneAndReplace(equal("_id", new ObjectId(companyId)),
            company.copy(_id = Some(new ObjectId(companyId))),
            new FindOneAndReplaceOptions().upsert(true))
            .toFuture()
            .map(_ => success(companyId))
        }

        case None => {
          val c = company.copy(_id = Some(new ObjectId()))
          mongoCompany.insertOne(c)
            .head()
            .map(_ => true)
            .flatMap(_ => updateUserCompanyId(jwtSession._id, c._id.get.toString).map(_ => success(c._id.get.toString)))
        }
      }
  }

  def loadCompanyBasicDetail(id: String): Future[CompanyDocument] = {
    async {
      Option(await(mongoCompany.find(equal("_id", new ObjectId(id))).first().toFuture())) match {
        case None => CompanyDocument()
        case Some(c) => c
      }
    }
  }

  def loadCompanyBasicDetail(userSession: JwtSession): Future[CompanyDocument] = {
    findPersonalInfo(userSession._id)
      .map(u => u.companyId)
      .flatMap {
        case Some(id) => mongoCompany.find(equal("_id", new ObjectId(id))).first.toFuture()
        case None => Future.successful(CompanyDocument())
      }
  }


  def loadCompanySurveyDetail(companyId: String): Future[CompanySurveyDocument] = {
    async {
      Option(await(mongoSurvey.find(equal("companyId", companyId)).first().toFuture())) match {
        case None => CompanySurveyDocument()
        case Some(c) => c
      }
    }
  }

  def loadAllCompanyBySystemType(systemType: SystemType): Future[Seq[CompanyDocument]] = {
    mongoCompany.find(and(equal("systemId", systemType.id), equal("companyStatus", CompanyStatus.CS_SUCCESS.id)))
      .toFuture().map {
      case c: Seq[CompanyDocument] if c.size == 0 => Seq[CompanyDocument]()
      case c => c
    }
  }

  def findAllCompany(pager: Pager, companyStatus: Option[Int], systemId: Option[Int], unionLicenseCode: Option[String],
                     companyName: Option[String]): Future[Result[PageItems[CompanyDocument]]] = {

    val searchBson = List(
      companyName.map(t => regex("companyName", t)),
      unionLicenseCode.map(t => regex("license.unionLicenseCode", t)),
      companyStatus.map(t => equal("companyStatus", t)),
      systemId.map(t => equal("systemId", t)),
      Option(notEqual("systemId", -1))
    ).flatten

    val futureTotalCount = mongoCompany.count(and(searchBson: _*)).toFuture()
    futureTotalCount.flatMap {
      case x: Long if (x > 0) => {
        val futureData = mongoCompany.find(and(searchBson: _*))
          .sort(orderBy(ascending("createDate")))
          .limit(pager.pageSize.get)
          .skip((pager.pageNum.get - 1) * pager.pageSize.get)
          .toFuture()
        for {
          (totalCount, data) <- futureTotalCount.zip(futureData);
          totalPage = if (totalCount % pager.pageSize.get == 0) totalCount % pager.pageSize.get else totalCount / pager.pageSize.get + 1
          p = Pagination(totalCount, totalPage, pager.pageSize.get, pager.pageNum.get)
        } yield success(data, p)
      }
      case _ => Future.successful(success(Seq[CompanyDocument](), Pagination()))
    }

  }


  //审核公司基本信息
  def auditCompany(_id: String, userSession: JwtSession, auditContent: Option[String], companyStatus: CompanyStatus): Future[Result[Boolean]] = {
    val auditDocument = CompanyAuditDocument(new ObjectId(), companyStatus.id, auditContent, userSession.username, new Date())
    mongoCompany.updateOne(equal("_id", new ObjectId(_id)), combine(set("companyStatus", companyStatus.id), push("auditList", auditDocument)), new UpdateOptions().upsert(true))
      .toFuture()
      .map(t => success(true))
  }


  /** ***********************************平台准入信息开始 **************************************************/

  //保存准入调查信息
  def saveLicenseSurveyDocument(companyId: String, lic: LicenseSurveyDocument): Future[Result[Boolean]] = {
    val updateBson = combine(set("licenseSurvey", lic), set("companyId", companyId))
    mongoSurvey.findOneAndUpdate(equal("companyId", companyId), updateBson, new FindOneAndUpdateOptions().upsert(true))
      .toFuture()
      .map(_ => success(true))
  }

  //保存工商注册信息
  def saveBusinessRegisterSurvey(companyId: String, brs: BusinessRegisterSurveyDocument): Future[Result[Boolean]] = {
    val updateBson = combine(set("businessRegisterSurvey", brs), set("companyId", companyId))
    mongoSurvey.findOneAndUpdate(equal("companyId", companyId), updateBson, new FindOneAndUpdateOptions().upsert(true))
      .toFuture()
      .map(_ => success(true))
  }

  //保存股东信息
  def saveShareHolderSurvey(companyId: String, shareHolder: ShareHolderSurveyDocument): Future[Result[Boolean]] = {
    val updateBson = combine(set("shareHolderSurvey", shareHolder), set("companyId", companyId))
    mongoSurvey.findOneAndUpdate(equal("companyId", companyId), updateBson, new FindOneAndUpdateOptions().upsert(true))
      .toFuture()
      .map(_ => success(true))
  }

  //保存实际控制人
  def saveControlPerson(companyId: String, controlPerson: ControlPersonDocument): Future[Result[Boolean]] = {
    val updateBson = combine(set("controlPersonSurvey", controlPerson), set("companyId", companyId))
    mongoSurvey.findOneAndUpdate(equal("companyId", companyId), updateBson, new FindOneAndUpdateOptions().upsert(true))
      .toFuture()
      .map(_ => success(true))
  }

  //保存合作记录
  def saveCooperationSurvey(companyId: String, cooperation: CooperationSurveyDocument): Future[Result[Boolean]] = {
    val updateBson = combine(set("cooperationSurvey", cooperation), set("companyId", companyId))
    mongoSurvey.findOneAndUpdate(equal("companyId", companyId), updateBson, new FindOneAndUpdateOptions().upsert(true))
      .toFuture()
      .map(_ => success(true))
  }

  //保存实地调查
  def saveFieldInvestigationSurvey(companyId: String, fieldInvestigation: FieldInvestigationSurveyDocument): Future[Result[Boolean]] = {
    val updateBson = combine(set("fieldInvestigationSurvey", fieldInvestigation), set("companyId", companyId))
    mongoSurvey.findOneAndUpdate(equal("companyId", companyId), updateBson, new FindOneAndUpdateOptions().upsert(true))
      .toFuture()
      .map(_ => success(true))

  }


  /** *********************************获取下游企业信息名录 ***********************************/

  def getDownStreamCompany(): Future[Seq[DownStreamCompany]] = {
    mongoDSCompany.find().toFuture()
  }

  def getDownStreamDepartment(): Future[Seq[String]] = {
    async {
      await(mongoDSCompany.find().toFuture()).map(_.department)
    }
  }

  def getDownStreamDepartment(department: String): Future[Seq[String]] = {
    async {
      await(mongoDSCompany.find().toFuture()).filter(_.department == department).flatMap(_.companies)
    }

  }

}