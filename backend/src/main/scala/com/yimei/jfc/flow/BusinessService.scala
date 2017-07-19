package com.yimei.jfc.flow

import java.util.Date

import com.softwaremill.quicklens._
import com.yimei.jfc.core.MongoSupport
import com.yimei.jfc.dict.BusinessStatus.BusinessStatus
import com.yimei.jfc.dict._
import com.yimei.jfc.user.{CompanyService, UserService}
import org.mongodb.scala.bson.ObjectId
import org.mongodb.scala.model.Filters._
import org.mongodb.scala.model.FindOneAndUpdateOptions
import org.mongodb.scala.model.Updates._

import scala.async.Async.{async, await}
import scala.concurrent.Future

/**
  * Created by xiangyang on 2017/6/10.
  */
trait BusinessService extends MongoSupport with UserService with CompanyService with FlowModels {


  def upsertBuApplication(jwt: JwtSession, buApplication: BuApplication, status: BusinessStatus): Future[Result[Boolean]] = {

    def genBusinessDocument: Future[BusinessDocument] = {
      val business = async {
        val upstreamCompany = await(loadCompanyBasicDetail(jwt))
        BusinessDocument(
          _id = new ObjectId(),
          status = status.id,
          upstreamCompanyId = upstreamCompany._id.get.toString,
          upstreamCompanyName = upstreamCompany.companyName.get,
          upstreamBusiness = buApplication,
          bridgeCompanyId = buApplication.receiveCompanyId,
          createPersonId = jwt._id.toString,
          createDate = new Date()
        )
      }

      buApplication.receiveCompanyId.map(bridgeCompanyId => {
        for {
          (bus, bridgeCompany) <- business.zip(loadCompanyBasicDetail(bridgeCompanyId))
        } yield {
          bus.modify(_.bridgeCompanyId).setTo(bridgeCompany._id.map(_.toString))
            .modify(_.upstreamBusiness.receiveCompanyName).setTo(bridgeCompany.companyName)
        }
      }).getOrElse(business)
    }

    def opdb(business: BusinessDocument): Future[Result[Boolean]] = {
      buApplication.businessId.map { id =>
        val setable = List(
          set("applyPersonId", jwt._id.toString),
          set("status", status.id)
        )

        val updateBson = business.bridgeCompanyId match {
          case Some(n) => set("bridgeCompanyId", n) :: setable
          case _ => unset("bridgeCompanyId") :: setable
        }

         getBusinessDetail(id).flatMap{ b =>
          val updateBusiness= business.upstreamBusiness.copy(auditList = b.upstreamBusiness.auditList)
          mongoBusiness.findOneAndUpdate(equal("_id", new ObjectId(id)),
            combine(set("upstreamBusiness", updateBusiness) :: updateBson: _*)).toFuture().map(_ => success(true))
        }

      }.getOrElse {
        val a = business.modify(_.upstreamBusiness.businessId).setTo(Some(business._id.toString))
        mongoBusiness.insertOne(a).toFuture().map(_ => success(true))
      }
    }

    for {
      b <- genBusinessDocument
      success <- opdb(b)
    } yield success
  }


  def getBusinessDetail(id: String): Future[BusinessDocument] = {
    async {
      Option(await(mongoBusiness.find(equal("_id", new ObjectId(id))).first().toFuture())) match {
        case None => throw new NotFoundException("业务不存在")
        case Some(c) => c
      }
    }
  }


  // 得到业务审核列表
  def getAuditList(id: String): Future[Seq[AuditDocument]] = {
    async {
      val g = await(mongoBusiness.find(equal("_id", new ObjectId(id))).first().toFuture())
      if (g == null) {
        Seq()
      } else {
        g.upstreamBusiness.auditList.getOrElse(Seq()) ++
          g.downstreamBusiness.flatMap(t => t.auditList).getOrElse(Seq()) ++
          g.financingProtocol.flatMap(t => t.auditList).getOrElse(Seq())
            .sortWith((a, b) => a.createDate.before(b.createDate))
      }
    }
  }


  //加载业务分页
  def findBusinessByCompanyId(userSession: JwtSession,
                              searchRequest: BusinessSearchRequest
                             ): Future[Result[PageItems[BusinessDocument]]] = {


    def loadDateSearch(key: String) = {

      if (searchRequest.beginDate.isDefined && searchRequest.endDate.isEmpty) {
        Option(gte(key, searchRequest.beginDate.get))
      } else if (searchRequest.beginDate.isEmpty && searchRequest.endDate.isDefined) {
        Option(lte(key, searchRequest.endDate.get))
      } else if (searchRequest.beginDate.isDefined && searchRequest.endDate.isDefined) {
        Option(and(gte(key, searchRequest.beginDate.get), lte(key, searchRequest.endDate.get)))
      } else {
        None
      }
    }


    def loadSearchBson = {

      async {
        val company = await(loadCompanyBasicDetail(userSession))
        val searchBson = if (userSession.systemId == SystemType.upstream.id) {
          List(
            Option(equal("upstreamCompanyId", company._id.get.toString)),
            searchRequest.bridgeCompanyId.map(v => equal("bridgeCompanyId", v)),
            loadDateSearch("createDate")
          ).flatten
        } else if (userSession.systemId == SystemType.bridge.id) {
          List(
            Option(equal("bridgeCompanyId", company._id.get.toString)),
            searchRequest.upstreamCompanyId.map(v => equal("upstreamCompanyId", v)),
            loadDateSearch("createDate")
          ).flatten
        } else if (userSession.systemId == SystemType.capital.id) {
          List(
            Option(equal("capitalCompanyId", company._id.get.toString)),
            searchRequest.upstreamCompanyId.map(v => equal("bridgeCompanyId", v)),
            loadDateSearch("createDate")
          ).flatten
        } else {

          List(
            searchRequest.upstreamCompanyId.map(v => equal("upstreamCompanyId", v)),
            searchRequest.bridgeCompanyId.map(v => equal("bridgeCompanyId", v)),
            loadDateSearch("createDate"),
            Option(notEqual("status", -1))

          ).flatten
        }

        val k = searchRequest.status match {
          case Some(n) => equal("status", n) :: searchBson
          case _ => searchBson
        }
        k
      }
    }

    val pager = searchRequest.pager.getOrElse(Pager(Some(10), Some(1)))
    for {
      search <- loadSearchBson
      totalCount <- mongoBusiness.count(and(search: _*)).toFuture()
      data <- mongoBusiness.find(and(search: _*))
        .limit(pager.pageSize.get)
        .skip((pager.pageNum.get - 1) * pager.pageSize.get)
        .toFuture()
    } yield {
      val totalPage = if (totalCount % pager.pageSize.get == 0) totalCount % pager.pageSize.get else totalCount / pager.pageSize.get + 1
      val p = Pagination(totalCount, totalPage, pager.pageSize.get, pager.pageNum.get)
      success(data, p)
    }
  }


  //生成审核文档
  def genAuditDocument(userSession: JwtSession, auditResult: AuditResult) = {
    AuditDocument(
      systemId = userSession.systemId,
      checkPersonId = userSession._id.toString,
      createDate = new Date,
      checkPersonName = userSession.username,
      checkResult = auditResult.checkResult.id,
      opinion = auditResult.opinion,
      auditFile = auditResult.auditFile
    )
  }


  // 核心企业审核上游业务
  def bridgeAuditUpStreamBusiness(businessId: String, userSession: JwtSession, auditResult: AuditResult) = {
    async {
      val business = await(getBusinessDetail(businessId))
      if (business.status == BusinessStatus.BRIDGE_TO_AUDIT_BUS.id) {
        val businessStatusBson =
          if (auditResult.checkResult == AuditType.PASS) {
            //平台待审核
            BusinessStatus.PLATFORM_TO_AUDIT_BUS.id
          } else if (auditResult.checkResult == AuditType.REFUSE) {
            //  核心企业拒绝
            BusinessStatus.BRIDGE_REFUSE_BUS.id
          } else {
            // 核心企业审核上游业务失败
            BusinessStatus.BRIDGE_CHECK_BUS_FAIL.id
          }
        //修改业务状态 & 增加审核内容
        val updateBson = combine(set("status", businessStatusBson), addEachToSet("upstreamBusiness.auditList", genAuditDocument(userSession, auditResult)))
        mongoBusiness.updateOne(equal("_id", new ObjectId(businessId)), updateBson).toFuture().map(_ => success(true))
      } else {
        log.info(s"业务$businessId 处于${business.status},不能审核。")
        throw new BusinessException("业务状态异常,核心企业不能审核上游业务")
      }
    }
  }


  // 平台审核上游业务
  def platformAuditUpStreamBusiness(businessId: String, userSession: JwtSession, auditResult: AuditResult) = {

    async {
      val business = await(getBusinessDetail(businessId))
      if (business.status == BusinessStatus.PLATFORM_TO_AUDIT_BUS.id) {
        val businessStatusBson =
          if (auditResult.checkResult == AuditType.PASS) {
            // 核心企业待补充下游合同
            BusinessStatus.BRIDGE_TO_SUPPLEMENT_DOWNSTREAM.id
          } else {
            // 平台审核业务不通过,打回到上游
            BusinessStatus.BRIDGE_CHECK_BUS_FAIL.id
          }
        //修改业务状态 & 增加审核内容
        val updateBson = combine(set("status", businessStatusBson), addEachToSet("upstreamBusiness.auditList", genAuditDocument(userSession, auditResult)))
        mongoBusiness.updateOne(equal("_id", new ObjectId(businessId)), updateBson).toFuture().map(_ => success(true))
      } else {
        log.info(s"业务$businessId 处于${business.status},不能审核。")
        throw new BusinessException("业务状态异常,平台方不能审核上游业务")
      }
    }
  }

  // 核心企业补充下游信息
  def saveDownStreamBusiness(userSession: JwtSession, bdApplication: BdApplication, isSubmit: Boolean): Future[Result[Boolean]] = {

    def genBdApplication: Future[BdApplication] = {
      bdApplication.capitalCompanyId.map(capitalCompanyId => {
        for {
          capitalCompany <- loadCompanyBasicDetail(capitalCompanyId)
        } yield {
          bdApplication.modify(_.capitalCompanyName).setTo(capitalCompany.companyName.map(_.toString))

        }
      }).getOrElse(Future.successful(bdApplication))
    }

    async {
      val business = await(getBusinessDetail(bdApplication.businessId))
      if (business.status == BusinessStatus.BRIDGE_TO_SUPPLEMENT_DOWNSTREAM.id ||
        business.status == BusinessStatus.PLATFORM_CHECK_DOWNSTREAM_FAIL.id || business.status == BusinessStatus.CAPITAL_CHECK_DOWNSTREAM_FAIL.id) {

        val dbBusiness= await(getBusinessDetail(bdApplication.businessId))
        val b = await(genBdApplication).copy(auditList = dbBusiness.downstreamBusiness.flatMap(d=>d.auditList))

        if (isSubmit == true) {
          await(mongoBusiness.findOneAndUpdate(equal("_id", new ObjectId(bdApplication.businessId)),
            combine(set("downstreamBusiness", b), set("capitalCompanyId", b.capitalCompanyId.getOrElse(null)),
              set("status", BusinessStatus.PLATFORM_TO_AUDIT_DOWNSTREAM.id)), new FindOneAndUpdateOptions().upsert(true))
            .toFuture()
            .map(_ => success(true)))
        } else {
          await(mongoBusiness.findOneAndUpdate(equal("_id", new ObjectId(bdApplication.businessId)),
            combine(set("downstreamBusiness", b), set("capitalCompanyId", b.capitalCompanyId.getOrElse(null))), new FindOneAndUpdateOptions().upsert(true))
            .toFuture()
            .map(_ => success(true)))
        }
      } else {
        throw new BusinessException("状态异常,不能保存补充下游信息!")
      }
    }
  }

  // 平台审核下游业务信息
  def platformAuditDownStreamBusiness(businessId: String, userSession: JwtSession, auditResult: AuditResult) = {

    async {
      val business = await(getBusinessDetail(businessId))
      if (business.status == BusinessStatus.PLATFORM_TO_AUDIT_DOWNSTREAM.id) {
        val g = genAuditDocument(userSession, auditResult)
        val businessStatus =
          if (auditResult.isPass) {
            // 资金方待审核下游合同
            BusinessStatus.CAPITAL_TO_AUDIT_DOWNSTREAM.id
          } else {
            BusinessStatus.PLATFORM_CHECK_DOWNSTREAM_FAIL.id
          }
        val updateBson = combine(set("status", businessStatus), addEachToSet("downstreamBusiness.auditList", g))
        mongoBusiness.updateOne(equal("_id", new ObjectId(businessId)), updateBson).toFuture().map(_ => success(true))
      } else {
        log.info(s"业务$businessId 处于${business.status},不能审核。")
        throw new BusinessException("业务状态异常,平台方不能审核下游业务")
      }
    }
  }

  // 资金方审核下游业务信息
  def capitalAuditDownStreamBusiness(businessId: String, userSession: JwtSession, auditResult: AuditResult) = {

    async {
      val business = await(getBusinessDetail(businessId))
      if (business.status == BusinessStatus.CAPITAL_TO_AUDIT_DOWNSTREAM.id) {
        val g = genAuditDocument(userSession, auditResult)
        val businessStatus =
          if (auditResult.isPass) {
            // 核心企业待上传融资协议
            BusinessStatus.BRIDGE_TO_UPLOAD_PROTOCOL.id
          } else if (auditResult.checkResult == AuditType.FAIL) {
            //  资金方打回下游业务信息
            BusinessStatus.CAPITAL_CHECK_DOWNSTREAM_FAIL.id
          } else {
            //  资金方拒绝下游业务信息
            BusinessStatus.CAPITAL_REFUSE_BUS.id
          }
        val updateBson = combine(set("status", businessStatus), addEachToSet("downstreamBusiness.auditList", g))
        mongoBusiness.updateOne(equal("_id", new ObjectId(businessId)), updateBson).toFuture().map(_ => success(true))
      } else {
        log.info(s"业务$businessId 处于${business.status},不能审核。")
        throw new BusinessException("业务状态异常,资金方不能审核下游业务")
      }
    }
  }

  // 核心企业上传融资协议
  def saveFinancingProtocol(userSession: JwtSession, financingProtocol: FinancingProtocolDocument, isSubmit: Boolean): Future[Result[Boolean]] = {
    async {
      val business = await(getBusinessDetail(financingProtocol.businessId))
      if (business.status == BusinessStatus.BRIDGE_TO_UPLOAD_PROTOCOL.id || business.status == BusinessStatus.PLATFORM_CHECK_UPLOAD_PROTOCOL_FAIL.id) {
        if (isSubmit == true) {
          await(mongoBusiness.findOneAndUpdate(equal("_id", new ObjectId(financingProtocol.businessId)),
            combine(set("financingProtocol", financingProtocol.copy(auditList = business.financingProtocol.flatMap(t => t.auditList))), set("status", BusinessStatus.PLATFORM_TO_AUDIT_UPLOAD_PROTOCOL.id)), new FindOneAndUpdateOptions().upsert(true))
            .toFuture()
            .map(_ => success(true)))
        } else {
          await(mongoBusiness.findOneAndUpdate(equal("_id", new ObjectId(financingProtocol.businessId)), set("financingProtocol", financingProtocol), new FindOneAndUpdateOptions().upsert(true))
            .toFuture()
            .map(_ => success(true)))
        }
      } else {
        log.info(s"业务${financingProtocol.businessId}处于${business.status},不能审核。")
        throw new BusinessException("状态异常，不能保存还款和融资协议")
      }
    }
  }

  // 平台审核核心企业融资，还款协议
  def platformAuditFinancingProtocol(businessId: String, userSession: JwtSession, auditResult: AuditResult) = {

    async {
      val business = await(getBusinessDetail(businessId))
      if (business.status == BusinessStatus.PLATFORM_TO_AUDIT_UPLOAD_PROTOCOL.id) {
        val g = genAuditDocument(userSession, auditResult)
        val businessStatus =
          if (auditResult.isPass) {
            //    核心企业待发起融资
            BusinessStatus.BRIDGE_TO_WAIT_FINANCING.id
          } else {
            //  平台审核融资协议失败
            BusinessStatus.PLATFORM_CHECK_UPLOAD_PROTOCOL_FAIL.id
          }
        val updateBson = combine(set("status", businessStatus), addEachToSet("financingProtocol.auditList", g))
        mongoBusiness.updateOne(equal("_id", new ObjectId(businessId)), updateBson).toFuture().map(_ => success(true))
      } else {
        log.info(s"业务$businessId 处于${business.status},不能审核。")
        throw new BusinessException("状态异常，不能审核融资协议")
      }
    }
  }

}
