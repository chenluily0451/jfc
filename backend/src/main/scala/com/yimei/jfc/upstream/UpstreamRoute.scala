package com.yimei.jfc.upstream

import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.yimei.jfc.core.HttpSupport
import com.yimei.jfc.dict.{BusinessStatus, SystemType}
import com.yimei.jfc.flow.{BusinessService, CapitalRaiseService, DebtService, RepaymentService}
import com.yimei.jfc.user.CompanyService

/**
  * Created by hary on 2017/5/16.
  */
trait UpstreamRoute extends HttpSupport with BusinessService with DebtService with CapitalRaiseService with RepaymentService with CompanyService {

  def upstreamRouteGen(systemName: String): Route = pathPrefix(systemName) {
    cookie("upstream") { cookie =>
      val clientName = cookie.name
      val clientId = cookie.value
      val systemId = SystemType.withName(systemName).id
      // 业务管理
      (pathPrefix("business") & jwt(systemId)) { jwtSession =>
        (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
          (searchRequest) => complete(findBusinessByCompanyId(jwtSession, searchRequest))
        } ~
          (path("save") & post & entity(as[BuApplication]) & companyAuth(jwtSession)) { buApplication =>
            complete(upsertBuApplication(jwtSession, buApplication, BusinessStatus.UPSTREAM_SAVE_BUS))
          } ~
          (path("submit") & post & entity(as[BuApplication]) & companyAuth(jwtSession)) {
            buApplication => {
              check(buApplication.check1) {
                complete(upsertBuApplication(jwtSession, buApplication, BusinessStatus.BRIDGE_TO_AUDIT_BUS))
              }
            }
          } ~
          (path("detail" / Segment) & get) {
            id => result(getBusinessDetail(id))
          } ~
          (path("auditList" / Segment) & get) { id =>
            result(getAuditList(id))
          }
      } ~
        // 融资
        (pathPrefix("financing") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest]) &  companyAuth(jwtSession)) {
            search => complete(findCapitalRaise(jwtSession, search))
          } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => result(loadFinancingDetail(id))
            } ~
            (path("confirmReceiveMoney" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(upstreamConfirmReceivedMoney(id, jwtSession))
            } ~
            (path("lending" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(loadCapitalLendingDetail(id))
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
        // 资金方还款
        (pathPrefix("financingRepayment") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest]) & companyAuth(jwtSession)) {
            search => complete(findBridgeRepayment(jwtSession, search))
          } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              id => complete(loadBridgeRepaymentDetail(id, jwtSession))
            }
        }
    }
  }

  def upstreamRoute: Route =
    upstreamRouteGen("upstream")
}
