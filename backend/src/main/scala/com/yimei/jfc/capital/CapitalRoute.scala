package com.yimei.jfc.capital

import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.yimei.jfc.dict.SystemType
import com.yimei.jfc.flow.{BusinessService, CapitalRaiseService, DebtService, RepaymentService}
import com.yimei.jfc.user.CompanyService

/**
  * Created by hary on 2017/5/16.
  */
trait CapitalRoute extends BusinessService with DebtService with CapitalRaiseService with RepaymentService with CompanyService {

  def capitalRouteGen(systemName: String): Route = pathPrefix(systemName) {
    cookie("capital") { cookie =>
      val clientName = cookie.name
      val clientId = cookie.value
      val systemId = SystemType.withName(systemName).id
      // 业务管理
      (pathPrefix("business") & jwt(systemId)) { jwtSession =>
        // 业务列表
        (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
          searchRequest => complete(findBusinessByCompanyId(jwtSession, searchRequest))
        } ~
          (path("detail" / Segment) & get & companyAuth(jwtSession)) {
            (id) => result(getBusinessDetail(id))
          } ~
          (path("auditList" / Segment) & get & companyAuth(jwtSession)) { id =>
            result(getAuditList(id))
          } ~
          (path("auditDownstreamBusiness" / Segment) & post & entity(as[AuditResult]) & companyAuth(jwtSession)) {
            (id, audit) => complete(capitalAuditDownStreamBusiness(id, jwtSession, audit))
          }
      } ~
        // 债权
        (pathPrefix("debt") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[DebtSearchRequest]) & companyAuth(jwtSession)) {
            search => complete(findDebtBySystemType(jwtSession, search))
          } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => result(loadDebtDetail(id))
            }
        } ~
        // 下游企业回款
        (pathPrefix("downstreamRepayment") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
            search => complete(findDownstreamRepayment(jwtSession, search))
          } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(loadDownstreamRepayment(id, jwtSession))
            }
        } ~
        // 融资
        (pathPrefix("financing") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
            search => complete(findCapitalRaise(jwtSession, search))
          } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => result(loadFinancingDetail(id))
            } ~
            (path("auditBridgeFinancing" / Segment) & post & entity(as[AuditResult])) {
              (id, auditResult) => complete(capitalAuditCapitalRaise(id, jwtSession, auditResult))
            } ~
            (path("lending") & post & entity(as[CapitalLendingDocument])) {
              lending => complete(createCapitalLending(lending, jwtSession))
            } ~
            (path("lending" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(loadCapitalLendingDetail(id))
            }
        } ~
        (pathPrefix("financingRepayment") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
            search => complete(findBridgeRepayment(jwtSession, search))
          } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(loadBridgeRepaymentDetail(id, jwtSession))
            } ~
            (path("confirmReceiveMoney" / Segment) & get & authorizeAsync(companyIsVerifyed(jwtSession))) {
                id => complete(capitalConfirmReceivedMoney(id, jwtSession))
              }
        }
    }
  }

  def capitalRoute: Route =
    capitalRouteGen("capital")
}
