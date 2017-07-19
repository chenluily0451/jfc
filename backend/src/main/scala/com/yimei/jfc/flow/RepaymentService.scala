package com.yimei.jfc.flow

import com.yimei.jfc.core.MongoSupport
import com.yimei.jfc.dict.{FinanceStatus, SystemType}
import com.yimei.jfc.user.{CompanyService, UserService}
import org.mongodb.scala.bson.ObjectId
import org.mongodb.scala.model.Filters._
import org.mongodb.scala.model.FindOneAndUpdateOptions
import org.mongodb.scala.model.Updates.set

import scala.async.Async.{async, await}
import scala.concurrent.Future

/**
  * Created by xiangyang on 2017/6/10.
  */
trait RepaymentService extends MongoSupport with BusinessService with UserService with CompanyService with FlowModels {

  // 核心企业还款到资金方
  def createBridgeRepayment(bridgeRepayment: BridgeRepaymentDocument, userSession: JwtSession): Future[Result[Boolean]] = {


    val capitalRaiseObjId = bridgeRepayment.capitalRaiseIds.map(id => new ObjectId(id))

    val repaymentedIdsSize = mongoCapitalRaise.find(in("_id", capitalRaiseObjId: _*)).toFuture().map { fs =>
      fs.filter(f => f.repaymentId.isDefined).size
    }

    repaymentedIdsSize flatMap {
      case b: Int if b > 0 => throw new BusinessException("融资已经还款，不能重复还款")
      case _ => {

        for {
          bridgeCompany <- loadCompanyBasicDetail(userSession)
          repaymentId <- {
            val _id = new ObjectId()
            val repayment = bridgeRepayment.copy(
              _id = Some(_id),
              status = Some(FinanceStatus.BRIDGE_REPAYMENT.id),
              bridgeCompanyId = bridgeCompany._id.map(t => t.toString)
            )
            mongoBridgeRepayment.insertOne(repayment).toFuture().map(_ => _id.toString)
          }
          _ <- mongoCapitalRaise.findOneAndUpdate(in("_id",capitalRaiseObjId: _*), set("repaymentId", repaymentId),new FindOneAndUpdateOptions().upsert(true)).toFuture().map(_ => true)
        } yield success(true)

      }
    }
  }


  def findBridgeRepayment(userSession: JwtSession, searchRequest: BusinessSearchRequest): Future[Result[PageItems[BridgeRepaymentDocument]]] = {

    def loadSearchBson = {

      val dateBson = if (searchRequest.beginDate.isDefined && searchRequest.endDate.isEmpty) {
        Option(gte("payDate", searchRequest.beginDate.get))
      } else if (searchRequest.beginDate.isEmpty && searchRequest.endDate.isDefined) {
        Option(lte("payDate", searchRequest.endDate.get))
      } else if (searchRequest.beginDate.isDefined && searchRequest.endDate.isDefined) {
        Option(and(gte("payDate", searchRequest.beginDate.get), lte("payDate", searchRequest.endDate.get)))
      } else {
        Option(notEqual("status", -1))
      }
      val companyBson =
        if (userSession.systemId == SystemType.capital.id) {
          searchRequest.capitalCompanyId.map(v => equal("capitalCompanyId", v))
        } else if (userSession.systemId == SystemType.bridge.id) {
          searchRequest.bridgeCompanyId.map(v => equal("bridgeCompanyId", v))
        } else {
          Option(notEqual("status", -1))
        }

      List(
        searchRequest.status.map(v => equal("status", v)),
        searchRequest.businessId.map(v => equal("businessId", v)),
        companyBson,
        dateBson
      ).flatten
    }

    val pager = searchRequest.pager.getOrElse(Pager(Some(10), Some(1)))
    for {
      totalCount <- mongoBridgeRepayment.count(and(loadSearchBson: _*)).toFuture()
      data <- mongoBridgeRepayment.find(and(loadSearchBson: _*))
        .limit(pager.pageSize.get)
        .skip((pager.pageNum.get - 1) * pager.pageSize.get)
        .toFuture()
    } yield {
      val totalPage = if (totalCount % pager.pageSize.get == 0) totalCount % pager.pageSize.get else totalCount / pager.pageSize.get + 1
      val p = Pagination(totalCount, totalPage, pager.pageSize.get, pager.pageNum.get)
      success(data, p)
    }

  }

  //资金方确认收到核心企业回款
  def capitalConfirmReceivedMoney(repaymentId: String, userSession: JwtSession): Future[Result[Boolean]] = {
    mongoBridgeRepayment.findOneAndUpdate(equal("_id", new ObjectId(repaymentId)), set("status", FinanceStatus.CAPITAL_RECEIVE_MONEY.id)).toFuture().map(_ => success(true))
  }

  //核心企业回款详情
  def loadBridgeRepaymentDetail(id: String, userSession: JwtSession): Future[Result[BridgeRepaymentDocument]] = {
    async {
      Option(await(mongoBridgeRepayment.find(equal("_id", new ObjectId(id))).first().toFuture())) match {
        case None => throw new NotFoundException("回款详情不存在")
        case Some(c) => success(c)
      }
    }
  }

  //上游确认收到资金方放款
  def upstreamConfirmReceivedMoney(financeId: String, userSession: JwtSession): Future[Result[Boolean]] = {
    mongoCapitalRaise.findOneAndUpdate(equal("_id", new ObjectId(financeId)), set("status", FinanceStatus.UPSTREAM_RECEIPT_MONEY.id)).toFuture().map(_ => success(true))
  }


  def findDownstreamRepayment(userSession: JwtSession, searchRequest: BusinessSearchRequest): Future[Result[PageItems[DownstreamRepaymentDocument]]] = {

    val pager = searchRequest.pager.getOrElse(Pager(Some(10), Some(1)))
    for {
      totalCount <- mongoDownstreamRepayment.count(equal("businessId", searchRequest.businessId.getOrElse(-1))).toFuture()
      data <- mongoDownstreamRepayment.find(equal("businessId", searchRequest.businessId.getOrElse(-1)))
        .limit(pager.pageSize.get)
        .skip((pager.pageNum.get - 1) * pager.pageSize.get)
        .toFuture()
    } yield {
      val totalPage = if (totalCount % pager.pageSize.get == 0) totalCount % pager.pageSize.get else totalCount / pager.pageSize.get + 1
      val p = Pagination(totalCount, totalPage, pager.pageSize.get, pager.pageNum.get)
      success(data, p)
    }

  }


  //核心企业创建下游回款
  def createDownstreamRepayment(userSession: JwtSession, repaymentDocument: DownstreamRepaymentDocument): Future[Result[Boolean]] = {
    mongoDownstreamRepayment.insertOne(repaymentDocument).toFuture().map(_ => success(true))
  }


  //加载下游回款详情
  def loadDownstreamRepayment(id: String, userSession: JwtSession): Future[Result[DownstreamRepaymentDocument]] = {
    async {
      Option(await(mongoDownstreamRepayment.find(equal("_id", new ObjectId(id))).first().toFuture())) match {
        case None => success(DownstreamRepaymentDocument())
        case Some(c) => success(c)
      }
    }

  }

}
