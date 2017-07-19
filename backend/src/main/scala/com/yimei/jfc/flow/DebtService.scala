package com.yimei.jfc.flow

import java.util.Date

import com.yimei.jfc.core.MongoSupport
import com.yimei.jfc.dict.{BusinessStatus, DebtStatus, SystemType}
import com.yimei.jfc.user.{CompanyService, UserService}
import org.mongodb.scala.bson.ObjectId
import org.mongodb.scala.model.Filters._

import scala.async.Async.{async, await}
import scala.concurrent.Future

/**
  * Created by xiangyang on 2017/6/10.
  */
trait DebtService extends MongoSupport with BusinessService with UserService with CompanyService with FlowModels {


  def saveDebt(userSession: JwtSession, debt: DebtDocument): Future[Result[Boolean]] = {

    async {
      val business = await(getBusinessDetail(debt.businessId))

      val d = debt.copy(
        bridgeCompanyId = business.bridgeCompanyId.map(_.toString),
        bridgeCompanyName = business.upstreamBusiness.receiveCompanyName,
        upstreamCompanyId = Some(business.upstreamCompanyId),
        upstreamCompanyName = Some(business.upstreamCompanyName),
        capitalCompanyId = business.capitalCompanyId,
        capitalCompanyName = business.downstreamBusiness.flatMap(t => t.capitalCompanyName).orElse(None),
        createDate = Some(new Date()),
        status = Some(DebtStatus.NOFINANCE.id)
      )

      if (business.status == BusinessStatus.BRIDGE_TO_WAIT_FINANCING.id) {
        debt._id match {
          case Some(id) =>
            if(await(loadDebtDetail(id.toString)).status.getOrElse(0)==DebtStatus.FINANCED.id){
               throw  new BusinessException("已融资的债权不能修改")
            }else{
              await(mongoDebt.findOneAndReplace(equal("_id", id), d).toFuture().map(_ => success(true)))
            }

          case None =>
            await(mongoDebt.insertOne(d).toFuture().map(_ => success(true)))
        }
      } else {
        log.info(s"业务${debt.businessId} 处于${business.status},不能创建债权")
        throw new BusinessException("状态异常，不能创建债权")
      }
    }
  }


  def loadDebtByBusinessId(businessId: String): Future[Seq[DebtDocument]] = {
    mongoDebt.find(equal("businessId", businessId)).toFuture().map {
      case d if d.size > 0 => d
      case _ => Seq()
    }
  }

  def loadDebtDetail(id: String): Future[DebtDocument] = {
    async {
      Option(await(mongoDebt.find(equal("_id", new ObjectId(id))).first().toFuture())) match {
        case None => throw new NotFoundException("业务不存在")
        case Some(c) => c
      }
    }
  }


  def findDebtBySystemType(userSession: JwtSession, searchRequest: DebtSearchRequest) = {

    def loadSearchBson = {
      async {

        val company = await(loadCompanyBasicDetail(userSession))
        val companyId =
          if (userSession.systemId == SystemType.upstream.id) {
            company._id.map(id => equal("upstreamCompanyId", id.toString))
          } else if (userSession.systemId == SystemType.bridge.id) {
            company._id.map(id => equal("bridgeCompanyId", id.toString))
          } else if (userSession.systemId == SystemType.capital.id) {
            company._id.map(id => equal("capitalCompanyId", id.toString))
          } else {
            None
          }


        val searchDate = if (searchRequest.beginDate.isDefined && searchRequest.endDate.isEmpty) {
          Option(gte("createDate", searchRequest.beginDate.get))
        } else if (searchRequest.beginDate.isEmpty && searchRequest.endDate.isDefined) {
          Option(lte("createDate", searchRequest.endDate.get))
        } else if (searchRequest.beginDate.isDefined && searchRequest.endDate.isDefined) {
          Option(and(gte("createDate", searchRequest.beginDate.get), lte("createDate", searchRequest.endDate.get)))
        } else {
          Option(notEqual("status", -1))
        }

        List(
          searchRequest.status.map(v => equal("status", v)),
          searchRequest.businessId.map(v => equal("businessId", v)),
          searchRequest.upstreamCompanyName.map(v => regex("upstreamCompanyName", v)),
          searchRequest.capitalRaiseId.map(v => equal("capitalRaiseId", v)),
          searchDate,
          companyId
        ).flatten

      }
    }


    val pager = searchRequest.pager.getOrElse(Pager(Some(10), Some(1)))

    for {
      search <- loadSearchBson
      totalCount <- mongoDebt.count(and(search: _*)).toFuture()
      data <- mongoDebt.find(and(search: _*))
        .limit(pager.pageSize.get)
        .skip((pager.pageNum.get - 1) * pager.pageSize.get)
        .toFuture()
    } yield {
      val totalPage = if (totalCount % pager.pageSize.get == 0) totalCount % pager.pageSize.get else totalCount / pager.pageSize.get + 1
      val p = Pagination(totalCount, totalPage, pager.pageSize.get, pager.pageNum.get)
      success(data, p)
    }
  }


}
