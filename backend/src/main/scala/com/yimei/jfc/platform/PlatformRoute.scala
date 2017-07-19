package com.yimei.jfc.platform

import akka.http.scaladsl.model.{HttpResponse, StatusCodes}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.yimei.jfc.core.HttpSupport
import com.yimei.jfc.dict.{CompanyStatus, SystemType}
import com.yimei.jfc.flow.FlowModels
import com.yimei.jfc.user.CompanyService

import com.yimei.jfc.flow.{BusinessService, CapitalRaiseService, DebtService, RepaymentService}

/**
  * Created by hary on 2017/5/16.
  */
trait PlatformRoute extends BusinessService with DebtService with CapitalRaiseService with RepaymentService with CompanyService {


  def platformRouteGen(systemName: String): Route = pathPrefix(systemName) {
    cookie("platform") { cookie =>
      val clientName = cookie.name
      val clientId = cookie.value
      println(s"get cookie: $clientName => $clientId")
      val systemId = SystemType.withName(systemName).id
      //公司认证审核
      pathPrefix("company") {
        (path("companies") & get & jwt(systemId) & page & parameters('companyStatus.as[Int].?, 'systemId.as[Int].?, 'unionLicenseCode.?, 'companyName.?)) {
          (jwtSession, page, companyStatus, systemId, unionLicenseCode, companyName) => complete(findAllCompany(page, companyStatus, systemId, unionLicenseCode, companyName))
        } ~ (path("companyBasicDetail" / Segment) & jwt(systemId)) {
          (id, jwt) => result(loadCompanyBasicDetail(id))
        } ~ (path("auditFail" / Segment) & get & jwt(systemId) & parameters('auditContent.?)) {
          (id, jwt, audit) => complete(auditCompany(id, jwt, audit, CompanyStatus.CS_FAIL))
        } ~
          (path("auditFailEnd" / Segment) & get & jwt(systemId) & parameters('auditContent.?)) {
            (id, jwt, audit) => complete(auditCompany(id, jwt, audit, CompanyStatus.CS_FAIL_END))
          } ~
          (path("auditSuccess" / Segment) & get & jwt(systemId) & parameters('auditContent.?)) {
            (id, jwt, audit) => complete(auditCompany(id, jwt, audit, CompanyStatus.CS_SUCCESS))
          } ~
          (path("companySurveyDetail" / Segment) & jwt(systemId)) {
            (id, jwt) => result(loadCompanySurveyDetail(id))
          } ~
          // 准入证件信息
          (path("saveLicenseSurveyDocument" / Segment) & post & jwt(systemId) & entity(as[LicenseSurveyDocument])) {
            (companyId, userSession, license) => complete(saveLicenseSurveyDocument(companyId, license))
          } ~
          // 工商注册信息
          (path("saveBusinessRegisterSurvey" / Segment) & post & jwt(systemId) & entity(as[BusinessRegisterSurveyDocument])) {
            (companyId, userSession, bir) => complete(saveBusinessRegisterSurvey(companyId, bir));
          } ~
          // 股东信息
          (path("saveShareHolderSurvey" / Segment) & post & jwt(systemId) & entity(as[ShareHolderSurveyDocument])) {
            (companyId, userSession, shareHolder) => complete(saveShareHolderSurvey(companyId, shareHolder))
          } ~
          // 保存实际控制人
          (path("saveControlPerson" / Segment) & post & jwt(systemId) & entity(as[ControlPersonDocument])) {
            (companyId, userSession, controlPerson) => complete(saveControlPerson(companyId, controlPerson))
          } ~
          // 保存实地调查
          (path("saveFieldInvestigationSurvey" / Segment) & post & jwt(systemId) & entity(as[FieldInvestigationSurveyDocument])) {
            (companyId, userSession, fieldInvestigationSurvey) => complete(saveFieldInvestigationSurvey(companyId, fieldInvestigationSurvey))
          } ~
          // 保存合作记录
          (path("saveCooperationSurvey" / Segment) & post & jwt(systemId) & entity(as[CooperationSurveyDocument])) {
            (companyId, userSession, cooperationSurvey) => complete(saveCooperationSurvey(companyId, cooperationSurvey))
          }

      } ~
        // 业务审核
        (pathPrefix("business") & jwt(systemId)) { jwtSession =>
          // 业务列表
          (path("query") & post & entity(as[BusinessSearchRequest]) & authorize(isPlatform(jwtSession))) {
            (searchRequest) => complete(findBusinessByCompanyId(jwtSession, searchRequest))
          } ~
            (path("detail" / Segment) & get) {
              (id) => result(getBusinessDetail(id))
            } ~
            (path("auditList" / Segment) & get) { id =>
              result(getAuditList(id))
            } ~
            (path("auditUpstreamBusiness" / Segment) & post & entity(as[AuditResult]) & authorize(isPlatform(jwtSession))) {
              (id, audit) => complete(platformAuditUpStreamBusiness(id, jwtSession, audit))
            } ~
            (path("auditDownstreamBusiness" / Segment) & post & entity(as[AuditResult]) & authorize(isPlatform(jwtSession))) {
              (id, audit) => {
                if (audit.auditFile.getOrElse(List()).size==0 ){
                  complete(HttpResponse(StatusCodes.BadRequest, entity = failed[String](400, "风控报告文件不能为空").toJson.toString()))
                } else {
                  complete(platformAuditDownStreamBusiness(id, jwtSession, audit))
                }
              }
            } ~
            (path("auditBridgeFinancingProtocol" / Segment) & post & entity(as[AuditResult]) & authorize(isPlatform(jwtSession))) {
              (id, audit) => complete(platformAuditFinancingProtocol(id, jwtSession, audit))
            }
        } ~
        // 融资管理
        (pathPrefix("financing") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest]) & authorize(isPlatform(jwtSession))) {
            search => complete(findCapitalRaise(jwtSession, search))
          } ~
            (path("detail" / Segment) & get & authorize(isPlatform(jwtSession))) {
              id => result(loadFinancingDetail(id))
            } ~
            (path("auditBridgeFinancing" / Segment) & post & entity(as[PlatformAuditFinancingResult]) & authorize(isPlatform(jwtSession))) {
              (id, audit) => complete(platformAuditCapitalRaise(id, jwtSession, audit))
            } ~
          (path("lending" / Segment) & get & companyAuth(jwtSession)) {
            id => complete(loadCapitalLendingDetail(id))
          }
        } ~
        // 债权
        (pathPrefix("debt") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[DebtSearchRequest])) {
            search => complete(findDebtBySystemType(jwtSession, search))
          } ~
            (path("detail" / Segment) & get) {
              id => result(loadDebtDetail(id))
            }
        } ~
        // 下游企业还款
        (pathPrefix("downstreamRepayment") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest])) {
            search => complete(findDownstreamRepayment(jwtSession, search))
          } ~
            (path("detail" / Segment) & get ) {
              id => complete(loadDownstreamRepayment(id, jwtSession))
            }
        } ~
        // 资金方还款
        (pathPrefix("financingRepayment") & jwt(systemId)) { jwtSession =>
          (path("query") & post & entity(as[BusinessSearchRequest])) {
            search => complete(findBridgeRepayment(jwtSession, search))
          } ~
            (path("detail" / Segment) & get) {
              id => complete(loadBridgeRepaymentDetail(id, jwtSession))
            }
        }
    }
  }

  def platformRoute: Route =
    platformRouteGen("platform")
}
