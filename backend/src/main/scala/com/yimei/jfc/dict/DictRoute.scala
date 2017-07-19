package com.yimei.jfc.dict

import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.yimei.jfc.core.HttpSupport
import com.yimei.jfc.user.CompanyService


/**
  * Created by hary on 2017/5/18.
  */
trait DictRoute extends HttpSupport with CompanyService {

  log.debug("DictRoute coreSystem is " + coreSystem.hashCode())

  import com.yimei.jfc.dict.BusinessStatus._
  import com.yimei.jfc.dict.CompanyStatus._
  import com.yimei.jfc.dict.CompanyType._
  import com.yimei.jfc.dict.FinanceStatus._
  import com.yimei.jfc.dict.PayMode._
  import com.yimei.jfc.dict.SexType._
  import com.yimei.jfc.dict.TrafficMode._
  import com.yimei.jfc.dict.RoleType._


  // 所有字典表
  case class DictAll(companyStatus: List[CompanyStatus],
                     companyType: List[CompanyType],
                     businessStatus: List[BusinessStatus],
                     financeStatus: List[FinanceStatus],
                     payMode: List[PayMode],
                     sexType: List[SexType],
                     trafficMode: List[TrafficMode],
                     userType: List[UserType]
                    )

  val dictAll = DictAll(
    CompanyStatus.values.toList,
    CompanyType.values.toList,
    BusinessStatus.values.toList,
    FinanceStatus.values.toList,
    PayMode.values.toList,
    SexType.values.toList,
    TrafficMode.values.toList,
    RoleType.values.toList
  )
  implicit val dictAllFormat = jsonFormat8(DictAll)

  // 字典服务
  def dictRoute: Route = pathPrefix("dict") {
    (path("all") & get) {
      result(dictAll)
    } ~
      (path("companyStatus") & get) {
        result(CompanyStatus.values.toList)
      } ~
      (path("companyType") & get) {
        result(CompanyType.values.toList)
      } ~
      (path("businessStatus") & get) {
        result(BusinessStatus.values.toList)
      } ~
      (path("financeStatus") & get) {
        result(FinanceStatus.values.toList)
      } ~
      (path("payMode") & get) {
        result(PayMode.values.toList)
      } ~
      (path("sexType") & get) {
        result(SexType.values.toList)
      } ~
      (path("userType") & get) {
        result(RoleType.values.toList)
      } ~
      (path("trafficMode") & get) {
        result(TrafficMode.values.toList)
      } ~
      (path("systemType") & get) {
        result(SystemType.values.toList)
      } ~
      (path("roleType") & get) {
        result(RoleType.values.toList)
      } ~
      (path("getAllDSCompanies") & get) {
        result(getDownStreamCompany())
      } ~
      (path("getAllDSDepartments") & get) {
        result(getDownStreamDepartment())
      } ~
      (path("getDSCompaniesByDepartment") & get & parameter("department")) { department => result(getDownStreamDepartment(department)) } ~
      (path("loadCompanies") & get & jwt(0) & parameters("systemName")) {
        (jwt, systemName) => result(loadAllCompanyBySystemType(SystemType.withName(systemName)))
      }
  }


}

