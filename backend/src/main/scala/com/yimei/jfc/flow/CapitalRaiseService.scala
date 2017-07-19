package com.yimei.jfc.flow

import java.util.Date

import com.yimei.jfc.core.MongoSupport
import com.yimei.jfc.dict._
import com.yimei.jfc.user.{CompanyService, UserService}
import org.mongodb.scala.bson.ObjectId
import org.mongodb.scala.model.Filters._
import org.mongodb.scala.model.FindOneAndReplaceOptions
import org.mongodb.scala.model.Updates.{addEachToSet, combine, set}

import scala.async.Async.{async, await}
import scala.concurrent.Future

/**
  * Created by xiangyang on 2017/6/10.
  */
trait CapitalRaiseService extends MongoSupport with BusinessService with UserService with CompanyService with FlowModels {


  def submitCapitalRaise(userSession: JwtSession, capitalRaise: CapitalRaiseDocument) = {

    def upsertCapitalRaise(ca: CapitalRaiseDocument): Future[Result[Boolean]] = {
      val f1 = ca._id match {
        case Some(id) => {
          loadFinancingDetail(id.toString).flatMap { (t: FinancingDetailResponse) =>
            val a = ca.copy(auditList = t.capitalRaise.auditList)
            mongoCapitalRaise.findOneAndReplace(equal("_id", id), a, new FindOneAndReplaceOptions().upsert(true)).toFuture().map(_ => id.toString)
          }
        }
        case None => {
          val newInsert = ca.copy(_id = Some(new ObjectId()))
          mongoCapitalRaise.insertOne(newInsert).toFuture().map(_ => newInsert._id.get.toString)
        }
      }

      f1.flatMap { capitalRaiseId =>
        val updateBson = combine(set("status", DebtStatus.FINANCED.id), set("capitalRaiseId", capitalRaiseId))
        val debtObjectIds = ca.debtIds.get.map(id => new ObjectId(id))
        mongoDebt.updateMany(in("_id", debtObjectIds: _*), updateBson).toFuture().map(_ => success(true))
      }

    }

    async {
      val business = await(getBusinessDetail(capitalRaise.businessId))
      if (business.status == BusinessStatus.BRIDGE_TO_WAIT_FINANCING.id) {
        val capitalRaiseCopy = capitalRaise.copy(
          status = Some(FinanceStatus.PLATFORM_TO_AUDIT_FINANCING.id),
          bridgeCompanyId = business.bridgeCompanyId.map(_.toString),
          bridgeCompanyName = business.upstreamBusiness.receiveCompanyName,
          upstreamCompanyId = Some(business.upstreamCompanyId),
          upstreamCompanyName = Some(business.upstreamCompanyName),
          capitalCompanyId = business.downstreamBusiness.flatMap(t => t.capitalCompanyId).orElse(None),
          capitalCompanyName = business.downstreamBusiness.flatMap(t => t.capitalCompanyName).orElse(None),
          createDate = Some(new Date())
        )

        val existsFinanceDebt = await(mongoDebt.find(in("_id", capitalRaiseCopy.debtIds.get.map(id => new ObjectId(id)): _*))
          .toFuture())
          .filter(d => d.status.get == DebtStatus.FINANCED.id)
          .size > 0
        if (existsFinanceDebt) {
          throw new BusinessException("一个债权不能重复发起融资")
        } else {
          await(upsertCapitalRaise(capitalRaiseCopy))
        }
      } else {
        throw new BusinessException("状态异常，不能发起融资申请")
      }
    }
  }


  def findCapitalRaise(userSession: JwtSession, searchRequest: BusinessSearchRequest) = {


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
            searchRequest.businessId.map(v => equal("businessId", v)),
            searchRequest.status.map(v => equal("status", v)),
            loadDateSearch("createDate")
          ).flatten
        } else if (userSession.systemId == SystemType.bridge.id) {
          List(
            Option(equal("bridgeCompanyId", company._id.get.toString)),
            searchRequest.upstreamCompanyName.map(v => regex("upstreamCompanyName", v)),
            searchRequest.businessId.map(v => equal("businessId", v)),
            searchRequest.status.map(v => equal("status", v)),
            loadDateSearch("createDate")
          ).flatten
        } else if (userSession.systemId == SystemType.capital.id) {
          List(
            Option(equal("capitalCompanyId", company._id.get.toString)),
            searchRequest.upstreamCompanyName.map(v => regex("upstreamCompanyName", v)),
            searchRequest.businessId.map(v => equal("businessId", v)),
            searchRequest.status.map(v => equal("status", v)),
            loadDateSearch("createDate")
          ).flatten
        } else {
          List(
            searchRequest.upstreamCompanyName.map(v => regex("upstreamCompanyName", v)),
            searchRequest.bridgeCompanyName.map(v => regex("bridgeCompanyName", v)),
            searchRequest.capitalCompanyName.map(v => regex("capitalCompanyName", v)),
            searchRequest.status.map(v => equal("status", v)),
            loadDateSearch("createDate"),
            Option(notEqual("status", -1))
          ).flatten
        }
        searchBson
      }
    }


    val pager = searchRequest.pager.getOrElse(Pager(Some(10), Some(1)))
    for {
      search <- loadSearchBson
      totalCount <- mongoCapitalRaise.count(and(search: _*)).toFuture()
      data <- mongoCapitalRaise.find(and(search: _*))
        .limit(pager.pageSize.get)
        .skip((pager.pageNum.get - 1) * pager.pageSize.get)
        .toFuture()
    } yield {
      val totalPage = if (totalCount % pager.pageSize.get == 0) totalCount % pager.pageSize.get else totalCount / pager.pageSize.get + 1
      val p = Pagination(totalCount, totalPage, pager.pageSize.get, pager.pageNum.get)
      success(data, p)
    }
  }

  // 加载融资详情
  def loadFinancingDetail(id: String): Future[FinancingDetailResponse] = {
    async {
      val financing = await(mongoCapitalRaise.find(equal("_id", new ObjectId(id))).first().toFuture())
      if (financing == null) {
        throw new NotFoundException("融资不存在")
      }

      val debtList = await(mongoDebt.find(in("_id", financing.debtIds.get.map(id => new ObjectId(id)): _*)).toFuture())
      FinancingDetailResponse(financing, debtList)
    }

  }


  def platformAuditCapitalRaise(financeId: String, userSession: JwtSession, auditResult: PlatformAuditFinancingResult) = {
    async {
      val financing = await(loadFinancingDetail(financeId))
      if (financing.capitalRaise.status.getOrElse(0) == FinanceStatus.PLATFORM_TO_AUDIT_FINANCING.id) {
        val audit = AuditDocument(
          systemId = userSession.systemId,
          checkPersonId = userSession._id.toString,
          createDate = new Date,
          checkPersonName = userSession.username,
          checkResult = auditResult.checkResult.id,
          opinion = auditResult.opinion,
          auditFile = auditResult.auditFile,
          infoCollectChannel = auditResult.infoCollectChannel,
          dataDeviation = auditResult.dataDeviation)

        if (auditResult.checkResult == AuditType.PASS) {
          val updateCapitalBson = combine(set("status", FinanceStatus.CAPITAL_TO_AUDIT_FINANCING.id), addEachToSet("auditList", audit))
          mongoCapitalRaise.findOneAndUpdate(equal("_id", new ObjectId(financeId)), updateCapitalBson).toFuture().map(_ => success(true))
        } else {
          val updateCapitalBson = combine(set("status", FinanceStatus.PLATFORM_CHECK_FINANCING_FAIL.id), addEachToSet("auditList", audit))
          val updateDebtBson = combine(set("status", DebtStatus.NOFINANCE.id), set("capitalRaiseId", financeId))
          val debtObjectIds= financing.debtList.map(d => d._id).flatten
          for {
            _ <- mongoCapitalRaise.findOneAndUpdate(equal("_id", new ObjectId(financeId)), updateCapitalBson).toFuture().map(_ => success(true))
            _ <- mongoDebt.updateMany(in("_id", debtObjectIds: _*), updateDebtBson).toFuture().map(_ => success(true))
          } yield success(true)
        }

      } else {
        throw new BusinessException("状态异常，平台不能审核融资协议")
      }
    }
  }

  // 资金方审核融资申请
  def capitalAuditCapitalRaise(financeId: String, userSession: JwtSession, auditResult: AuditResult) = {
    async {
      val financing = await(loadFinancingDetail(financeId))
      if (financing.capitalRaise.status.getOrElse(0) == FinanceStatus.CAPITAL_TO_AUDIT_FINANCING.id) {
        val audit = genAuditDocument(userSession, auditResult)
          if (auditResult.isPass) {
            val updateCapitalBson = combine(set("status", FinanceStatus.CAPITAL_CHECK_FINANCING_SUCCESS.id), addEachToSet("auditList", audit))
            mongoCapitalRaise.findOneAndUpdate(equal("_id", new ObjectId(financeId)), updateCapitalBson).toFuture().map(_ => success(true))
          } else {
            val updateCapitalBson = combine(set("status",FinanceStatus.CAPITAL_CHECK_FINANCING_FAIL.id), addEachToSet("auditList", audit))
            val updateDebtBson = combine(set("status", DebtStatus.NOFINANCE.id), set("capitalRaiseId", financeId))
            val debtObjectIds= financing.debtList.map(d => d._id).flatten
            for {
              _ <- mongoCapitalRaise.findOneAndUpdate(equal("_id", new ObjectId(financeId)), updateCapitalBson).toFuture().map(_ => success(true))
              _ <- mongoDebt.updateMany(in("_id", debtObjectIds: _*), updateDebtBson).toFuture().map(_ => success(true))
            } yield success(true)
          }
      } else {
        throw new BusinessException("状态异常，平台不能审核融资协议")
      }
    }
  }


  // 资金方放款
  def createCapitalLending(capitalLending: CapitalLendingDocument, userSession: JwtSession): Future[Result[Boolean]] = {
    for {
      a <- mongoCapitalLending.insertOne(capitalLending).toFuture().map(_ => true)
      b <- mongoCapitalRaise.updateOne(equal("_id", new ObjectId(capitalLending.capitalRaiseId)), set("status", FinanceStatus.CAPITAL_LENDING.id)).toFuture().map(_ => true)
    } yield success(true)
  }

  //查看资金方放款详情
  def loadCapitalLendingDetail(id: String) = {
    async {
      Option(await(mongoCapitalLending.find(equal("capitalRaiseId", id)).first().toFuture())) match {
        case None => success(CapitalLendingDocument(businessId = "", capitalRaiseId = ""))
        case Some(c) => success(c)
      }
    }
  }

}
