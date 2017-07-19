package com.yimei.jfc.bridge

import akka.http.scaladsl.model.{HttpResponse, StatusCodes}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.yimei.jfc.dict.SystemType
import com.yimei.jfc.flow.{BusinessService, CapitalRaiseService, DebtService, RepaymentService}
import com.yimei.jfc.user.CompanyService

/**
  * Created by hary on 2017/5/16.
  */
trait BridgeRoute extends BusinessService with DebtService with CapitalRaiseService with RepaymentService with CompanyService {

  def bridgeRouteGen(systemName: String): Route = pathPrefix(systemName) {
    cookie("bridge") { cookie =>
      val clientName = cookie.name
      val clientId = cookie.value
      val systemId = SystemType.withName(systemName).id
      // 业务审核
      (pathPrefix("business") & jwt(systemId)) { jwtSession =>
        (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
          (searchRequest) => complete(findBusinessByCompanyId(jwtSession, searchRequest))
        } ~
          (path("detail" / Segment) & get) {
            (id) => result(getBusinessDetail(id))
          } ~
          (path("auditList" / Segment) & get) { id =>
            result(getAuditList(id))
          } ~
          (path("auditUpstreamBusiness" / Segment) & post & entity(as[AuditResult])) {
            (id, audit) => complete(bridgeAuditUpStreamBusiness(id, jwtSession, audit))
          } ~
          // 保存下游业务业务信息
          (path("saveDownstreamBusiness") & post & entity(as[BdApplication]) & companyAuth(jwtSession)) {
            (buApplication) => complete(saveDownStreamBusiness(jwtSession, buApplication, false))
          } ~
          // 提交申请
          (path("submitDownstreamBusiness") & post & entity(as[BdApplication]) & companyAuth(jwtSession)) {
            (bdApplication) => {
              check(bdApplication.check1) {
                complete(saveDownStreamBusiness(jwtSession, bdApplication, true))
              }
            }
          } ~
          (path("saveFinancingProtocol") & post & entity(as[FinancingProtocolDocument]) & companyAuth(jwtSession)) {
            (financingProtocol) => complete(saveFinancingProtocol(jwtSession, financingProtocol, false))
          } ~
          // 提交申请
          (path("submitFinancingProtocol") & post & entity(as[FinancingProtocolDocument]) & companyAuth(jwtSession)) {
            (financingProtocol) => {
              check(financingProtocol.check1) {
                complete(saveFinancingProtocol(jwtSession, financingProtocol, true))
              }
            }
          }
      } ~
        // 融资管理
        (pathPrefix("financing") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
            search => complete(findCapitalRaise(jwtSession, search))
          } ~
            (path("submit") & post & entity(as[CapitalRaiseDocument]) & companyAuth(jwtSession)) {
              capitalRaise =>{
                if (capitalRaise.debtIds.getOrElse(Seq()).size==0) {
                  complete(HttpResponse(StatusCodes.BadRequest, entity = failed[String](400, "请选择债权").toJson.toString()))
                } else {
                  complete(submitCapitalRaise(jwtSession, capitalRaise))
                }
              }
            } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => result(loadFinancingDetail(id))
            } ~
            (path("lending" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(loadCapitalLendingDetail(id))
            }
        } ~
        // 债权管理
        (pathPrefix("debt") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[DebtSearchRequest]) & companyAuth(jwtSession)) {
            search => complete(findDebtBySystemType(jwtSession, search))
          } ~
            (path("submit") & post & entity(as[DebtDocument]) & companyAuth(jwtSession)) {
              dept => complete(saveDebt(jwtSession, dept))
            } ~
            (path("businessAllDebts" / Segment) & get & companyAuth(jwtSession)) {
              id => result(loadDebtByBusinessId(id))
            } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => result(loadDebtDetail(id))
            } ~
            (path("lending" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(loadCapitalLendingDetail(id))
            }
        } ~
        // 下游企业回款
        (pathPrefix("downstreamRepayment") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
            search => complete(findDownstreamRepayment(jwtSession, search))
          } ~
            (path("submit") & post & entity(as[DownstreamRepaymentDocument]) & companyAuth(jwtSession)) {
              repayment => complete(createDownstreamRepayment(jwtSession, repayment))
            } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(loadDownstreamRepayment(id, jwtSession))
            }
        } ~
        // 还款到资金方
        (pathPrefix("financingRepayment") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
            search => complete(findBridgeRepayment(jwtSession, search))
          } ~
            (path("submit") & post & entity(as[BridgeRepaymentDocument]) & companyAuth(jwtSession)) {
              bridgeRepayment => complete(createBridgeRepayment(bridgeRepayment, jwtSession))
            } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(loadBridgeRepaymentDetail(id, jwtSession))
            }
        }
    }
  }


  def bridgeRoute: Route =
    bridgeRouteGen("bridge")
}
