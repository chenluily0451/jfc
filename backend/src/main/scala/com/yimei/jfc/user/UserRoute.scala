package com.yimei.jfc.user

import akka.http.scaladsl.server.Directives.{entity, _}
import akka.http.scaladsl.server.Route
import com.yimei.jfc.dict.{AuthCodeType, CompanyStatus, SystemType}

/**
  * Created by hary on 2017/5/12.
  */
trait UserRoute extends UserService with CompanyService {

  import UserModels._


  def userRouteGen(systemName: String) = pathPrefix(systemName) {
    cookie(systemName) { cookie =>
      val clientName = cookie.name
      val clientId = cookie.value
      println(s"get cookie: $clientName => $clientId")
      val systemId = SystemType.withName(systemName).id
      pathPrefix("register") {
        // 注册处理
        (path("register") & post & entity(as[RegisterRequest])) { req =>
          complete(handleRegister(req, SystemType.withName(systemName), clientId))
        } ~
          // 检查手机号是否可用
          path("checkPhoneExists" / Segment) { phone =>
            complete(checkPhoneExists(phone))
          } ~
          // 检查用户名是否可用
          path("checkLoginNameExists" / Segment) { name =>
            complete(checkLoginNameExists(name))
          } ~
          // 发送注册短信
          (path("sms") & parameters("mobilePhone", "imgCode")) { (mobilePhone, imgCode) =>
            complete(handleSendSms(AuthCodeType.REGISTER, clientId, mobilePhone, imgCode))
          } ~
          //根据类型获取短信验证码
          (path("findSms") & get & parameters("authCodeType")) {
            authCodeType => complete(findSmsCode(clientId, authCodeType))
          }
      } ~
        pathPrefix("login") {
          // jwt 登录
          (path("jwt") & post & entity(as[JwtLoginRequest])) { req =>
            complete(handleJwtLogin(SystemType.withName(systemName), req))
          }
        } ~
        (pathPrefix("security") & jwt(systemId)) { jwtSession =>
          // 更改手机号
          (path("sendOldPhoneSms") & get & parameters("imgCode")) {
            (imgCode) => complete(handleSendSms(AuthCodeType.CHANGE_OLD_PHONE, clientId, jwtSession.phone, imgCode))
          } ~
            (path("validateOldPhoneSms") & get & parameters("smsCode")) {
              (smsCode) => {
                val passFlagKey = s"${jwtSession._id.toString}:OldPhone:${AuthCodeType.CHANGE_OLD_PHONE}"
                complete(validateOldPhoneSms(AuthCodeType.CHANGE_OLD_PHONE, passFlagKey, jwtSession, clientId, smsCode))
              }
            } ~
            (path("sendNewPhoneSms") & get & parameters("imgCode", "newPhone")) {
              (imgCode, newPhone) => {
                val passFlagKey = s"${jwtSession._id.toString}:OldPhone:${AuthCodeType.CHANGE_OLD_PHONE}"
                complete(sendNewPhoneSms(AuthCodeType.CHANGE_NEW_PHONE, passFlagKey, clientId, newPhone, imgCode))
              }
            } ~
            (path("updatePhone") & get & parameters("newPhone", "smsCode")) {
              (newPhone, smsCode) => {
                val passFlagKey = s"${jwtSession._id.toString}:OldPhone:${AuthCodeType.CHANGE_OLD_PHONE}"
                complete(updatePhone(AuthCodeType.CHANGE_NEW_PHONE, passFlagKey, jwtSession, clientId, newPhone, smsCode))
              }
            } ~
            // 修改密码
            (path("sendPasswordSms") & get & parameters("imgCode")) {
              (imgCode) => complete(handleSendSms(AuthCodeType.UPDATE_LOGINPWD, clientId, jwtSession.phone, imgCode))
            } ~
            (path("validateOldPwd") & get & parameters("oldPassword")) {
              (oldPassword) => complete(validateOriginPwd(jwtSession, oldPassword))
            } ~
            (path("changePassword") & get & parameters("oldPassword", "newPassword", "smsCode")) {
              (oldPassword, newPassword, smsCode) => complete(updateLoginPassword(AuthCodeType.UPDATE_LOGINPWD, jwtSession, clientId, oldPassword, newPassword, smsCode))
            }
        } ~
        (pathPrefix("identify") & jwt(systemId)) { jwtSession =>
          // 更换管理员
          (path("sendOldAdminPhoneSms") & get & parameters("imgCode")) {
            (imgCode) => complete(handleSendSms(AuthCodeType.CHANGE_ADMIN, clientId, jwtSession.phone, imgCode))
          } ~
            (path("changeAdmin") & get & parameters("newAdminId", "smsCode")) {
              (newAdminId, smsCode) => complete(changeAdmin(AuthCodeType.CHANGE_ADMIN, jwtSession, clientId, newAdminId, smsCode))
            } ~
            // 获取公司信息
            (path("getCompanyInfo")) {
              result(loadCompanyBasicDetail(jwtSession))
            } ~
            // 临时保存认证信息
            (path("saveCompany") & post & entity(as[CompanyDocument])) { company =>
              complete(saveCompany(jwtSession, company, SystemType.withName(systemName), CompanyStatus.CS_DRAFT))
            } ~
            // 提交认证
            (path("submitCompany") & post & entity(as[CompanyDocument])) { (company) =>
              complete(saveCompany(jwtSession, company, SystemType.withName(systemName), CompanyStatus.CS_TO_CHECK))
            }
        } ~
        (pathPrefix("employee") & jwt(systemId)) { jwtSession =>
          // 员工列表
          (path("query") & page & parameters('userName.?, 'phoneNum.?, 'disabled.?, 'loginName.?) & companyAuth(jwtSession)) {
            (page, userName, phoneNum, disabled, loginName) => {
              if (systemId == SystemType.platform.id) {
                complete(findAllUsersOfPlatform(SystemType.platform, page, userName, phoneNum, disabled.map(_.toBoolean), loginName))
              } else {
                complete(findAllUsersInCompany(jwtSession._id, page, loginName, phoneNum))
              }
            }
          } ~
            (path("all") & get & companyAuth(jwtSession)) {
              complete(loadAllUsersInCompany(jwtSession._id))
            } ~
            (path("detail" / Segment) & get & companyAuth(jwtSession)) {
              employeeId => result(findPersonalInfo(employeeId))
            } ~
            (path("edit" / Segment) & post & entity(as[EmployeeRequest]) & companyAuth(jwtSession)) {
              (id, employee) => complete(updateEmployee(id, employee))
            } ~
            // 保存员工
            (path("save") & post & entity(as[EmployeeRequest]) & companyAuth(jwtSession)) {
              (employee) => complete(addEmployee(jwtSession, employee, SystemType.withName(systemName)))
            } ~
            // 重置员工密码
            (path("resetEmployeePwd" / Segment) & get & companyAuth(jwtSession)) {
              (id) => complete(resetEmployeeLoginPwd(id))
            } ~
            // 禁用账号
            (path("disabledAccount" / Segment) & get & companyAuth(jwtSession)) {
              (id) => complete(disabledEmployeeAccount(id, true))
            } ~
            // 启用账号
            (path("enabledAccount" / Segment) & get & companyAuth(jwtSession)) {
              (id) => complete(disabledEmployeeAccount(id, false))
            }
        }
    }
  } ~ (pathPrefix("identify") & jwt(-1)) { jwtSession =>
    path("getPersonalInfo") {
      result(findPersonalInfo(jwtSession._id))
    }
  }

  def userRoute: Route =
    userRouteGen("upstream") ~
      userRouteGen("platform") ~
      userRouteGen("capital") ~
      userRouteGen("bridge")

}


