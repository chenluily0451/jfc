package com.yimei.jfc.user

import java.util.UUID

import com.yimei.jfc.captcha.CaptchaController
import com.yimei.jfc.core.Encodes._
import com.yimei.jfc.core._
import com.yimei.jfc.dict.AuthCodeType.AuthCodeType
import com.yimei.jfc.dict.SystemType.SystemType
import com.yimei.jfc.dict.{AuthCodeType, RoleType, SystemType}
import com.yimei.jfc.service.NotificationService
import org.mongodb.scala.bson.{BsonBoolean, ObjectId}
import org.mongodb.scala.bson.collection.mutable.Document
import org.mongodb.scala.model.Filters._
import org.mongodb.scala.model.Updates._
import pdi.jwt.{Jwt, JwtAlgorithm, JwtClaim}

import scala.async.Async.{async, await}
import scala.concurrent.Future

/**
  * Created by hary on 2017/5/12.
  */
trait UserService extends NotificationService with CaptchaController with MongoSupport with RedisSupport {

  //  用户信息 1000 开始 token 2000开始   企业申请信息 4000 开始 业务申请信息 6000开始 融资申请 8000 开始，
  val PhoneExistsError = Error(1000, "手机号已经存在")
  val LoginNameExistsError = Error(1001, "登录名已存在")
  val AuthCodeError = Error(1002, "短信验证码错误")
  val SystemTypeError = Error(1003, "所选系统类型不存在")
  val LoginPasswordError = Error(1004, "用户名或密码错误")
  val ImgCodeError = Error(1005, "图片验证码错误")
  val UserNotExistsError = Error(1006, "用户不存在")
  val OriginPasswordError = Error(1007, "原密码不正确")
  val oldPwd_Eq_newPwd_Error = Error(1008, "原密码和新密码相同")
  val UserDisabledError = Error(1009, "账号被禁用,请联系管理员")


  val CompanyStatusError = Error(4000, "公司信息未认证通过")

  val initialPassword = coreConfig.getString("jfc.initialLoginPassword")

  //密码加解密规则
  val HASH_INTERATIONS = 1024
  val SALT_SIZE = 8

  import UserModels._

  private def validateLoginPwd(userDocument: UserDocument, newPassword: String): Boolean = {
    userDocument.password.equals(encodeHex(Digests.sha1(newPassword.getBytes, decodeHex(userDocument.passwordSalt), HASH_INTERATIONS)))
  }

  // jwt登录
  def handleJwtLogin(systemType: SystemType, request: JwtLoginRequest): Future[Result[String]] = {
    async {
      val filterBson = and(or(equal("loginName", request.username), equal("phone", request.username)), equal("systemId", systemType.id))
      await(mongoUser.find(filterBson).head().map(Option(_))) match {
        case None => failed[String](LoginPasswordError)
        case Some(u) => {
          if (!validateLoginPwd(u, request.password)) {
            failed[String](LoginPasswordError)
          } else if (u.disabled == true) {
            failed[String](UserDisabledError)
          } else {
            val claim: JwtClaim = JwtClaim(JwtSession(u._id, request.username, u.phone, u.role,u.systemId).toJson.toString()).issuedNow.expiresIn(jwtExpire)
            success(Jwt.encode(claim, jwtSecret, JwtAlgorithm.HS256))
          }
        }
      }
    }
  }

  def findPersonalInfo(_id: ObjectId): Future[UserDTO] = {
    mongoUser.find(equal("_id", _id)).first().toFuture().map(u => UserDTO(
      _id = u._id, systemId = u.systemId, loginName = u.loginName, userName = u.userName, companyId = u.companyId,
      phone = u.phone, disabled = u.disabled, role = u.role, createDate = u.createDate, dept = u.dept))

  }

  def findPersonalInfo(_id: String): Future[UserDTO] = {
    mongoUser.find(equal("_id", new ObjectId(_id))).first().toFuture().map(u => UserDTO(
      _id = u._id, systemId = u.systemId, loginName = u.loginName, userName = u.userName, companyId = u.companyId,
      phone = u.phone, disabled = u.disabled, role = u.role, createDate = u.createDate, dept = u.dept))

  }

  /**
    *
    * @param request
    * @param systemType 系统类型
    * @param clientId   cookie id
    * @return
    */
  def handleRegister(request: RegisterRequest, systemType: SystemType, clientId: String): Future[Result[Boolean]] = {
    log.info("got request: {}", request)
    async {
      val authCodeKey = s"$clientId:${AuthCodeType.REGISTER}"
      val authCodeValue = await(redisClient.get[String](authCodeKey)).getOrElse("")

      if (!authCodeValue.equals(request.smsCode)) {
        failed[Boolean](AuthCodeError)
      } else if (!await(checkPhoneExists(request.phone)).success) {
        failed[Boolean](PhoneExistsError)
      } else if (!await(checkLoginNameExists(request.loginName)).success) {
        failed[Boolean](LoginNameExistsError)
      } else {
        val passwordSalt = Digests.generateSalt(SALT_SIZE);
        val hashPassword = Digests.sha1(request.password.getBytes, passwordSalt, HASH_INTERATIONS)

        redisClient.del(authCodeKey)
        val u: UserDocument = UserDocument(new ObjectId(), systemId = systemType.id, phone = request.phone,
          loginName = request.loginName, password = Encodes.encodeHex(hashPassword), passwordSalt = Encodes.encodeHex(passwordSalt),
          userName = request.userName, role = RoleType.ADMIN.id, disabled = false, dept = None, companyId = None)
        await(mongoUser.insertOne(u).toFuture().map(_ => success(true)))
      }
    }
  }


  //处理发送短信
  def handleSendSms(authCodeType: AuthCodeType, clientId: String, phone: String, imgCode: String): Future[Result[Boolean]] = {
    async {
      if (!await(handleCheckCaptcha(clientId, imgCode))) {
        failed[Boolean](ImgCodeError)
      } else {
        val authCodeKey = s"""$clientId:$authCodeType"""
        val oldCodeValue = await(redisClient.get[String](authCodeKey))
        val newCode = oldCodeValue.getOrElse(Utils.generateVerifyCode)
        if (await(sendSms(phone, smsRegisterTpl, smsRegisterVars + ("code" -> newCode)))) {
          //删除图片验证码
          redisClient.del(s"$clientId:kap")
          if (oldCodeValue.isEmpty) {
            success(await(redisClient.setex(authCodeKey, 1000 * 60 * 10, newCode)))
          } else {
            success(true)
          }
        } else {
          success(true)
        }
      }
    }
  }


  def findSmsCode(clientId: String, authCodeType: String): Future[Result[String]] = {

    if (coreConfig.getBoolean("test")) {
      redisClient.get[String](s"$clientId:$authCodeType").map {
        case None => failed[String](400, "短信验证码不存在")
        case Some(code) => success(code)
      }
    } else {
      Future.successful(success("999999"))
    }
  }

  // 检查phone是否存在
  def checkPhoneExists(phone: String): Future[Result[Boolean]] = {
    mongoUser.count(equal("phone", phone)).toFuture().map {
      case count: Long if count > 0 => failed[Boolean](PhoneExistsError)
      case _ => success(true)
    }
  }

  // 检查登录名是否存在
  def checkLoginNameExists(loginName: String): Future[Result[Boolean]] = {
    mongoUser.count(equal("loginName", loginName)).toFuture().map {
      case count: Long if count > 0 => failed[Boolean](LoginNameExistsError)
      case _ => success(true)
    }
  }


  /**
    * 验证原密码是否正确
    *
    * @param userSession
    * @param newPassword
    * @return
    */
  def validateOriginPwd(userSession: JwtSession, newPassword: String): Future[Result[Boolean]] = {
    mongoUser.find(equal("_id", userSession._id)).head.map {
      u =>
        if (validateLoginPwd(u, newPassword)) {
          success(true)
        } else {
          failed[Boolean](OriginPasswordError)
        }
    }
  }


  //修改登录密码
  def updateLoginPassword(authCodeType: AuthCodeType, userSession: JwtSession, clientId: String, oldPassword: String, newPassword: String, smsCode: String): Future[Result[Boolean]] = {
    async {
      val authCodeKey = s"$clientId:$authCodeType"
      val authCodeValue = await(redisClient.get[String](authCodeKey)).getOrElse("")
      if (!authCodeValue.equals(smsCode)) {
        failed[Boolean](AuthCodeError)
      } else {
        redisClient.del(authCodeKey)
        Option(await(mongoUser.find(equal("_id", userSession._id)).head)) match {
          case None => failed[Boolean](UserNotExistsError)
          case Some(u) => {
            if (!validateLoginPwd(u, oldPassword)) {
              failed[Boolean](OriginPasswordError)
            } else if (validateLoginPwd(u, newPassword)) {
              failed[Boolean](oldPwd_Eq_newPwd_Error)
            } else {
              val passwordSalt = Digests.generateSalt(SALT_SIZE);
              val hashPassword = Digests.sha1(newPassword.getBytes, passwordSalt, HASH_INTERATIONS)
              await(mongoUser.updateOne(equal("_id", userSession._id),
                combine(set("password", Encodes.encodeHex(hashPassword)), set("passwordSalt", Encodes.encodeHex(passwordSalt))))
                .toFuture().map(_ => success(true)))
            }
          }

        }
      }
    }
  }

  /**
    *
    * @param authCodeType 验证类型
    * @param passFlagKey  老手机号验证通过flag:  放到redis里面，过期时间为12个小时。以便于在最终修改为新手机号时校验，是否通过了老手机号的校验，确保安全性
    * @param userSession
    * @param clientId
    * @param smsCode
    * @return
    */
  //验证老手机号验证码
  def validateOldPhoneSms(authCodeType: AuthCodeType, passFlagKey: String, userSession: JwtSession, clientId: String, smsCode: String): Future[Result[Boolean]] = {
    async {
      val authCodeKey = s"$clientId:$authCodeType"
      val authCodeValue = await(redisClient.get[String](authCodeKey)).getOrElse("")
      if (!authCodeValue.equals(smsCode)) {
        failed[Boolean](AuthCodeError)
      } else {
        await {
          for {
            _ <- redisClient.del(authCodeKey)
            r <- redisClient.setex(passFlagKey, 3600 * 12, UUID.randomUUID().toString)
          } yield success(r)
        }
      }
    }
  }

  //发送新手机号验证码
  def sendNewPhoneSms(authCodeType: AuthCodeType, passFlagKey: String, clientId: String, phone: String, imgCode: String): Future[Result[Boolean]] = {
    async {
      if (!await(redisClient.exists(passFlagKey))) {
        failed[Boolean](5000, "操作非法,原手机号的验证码没有通过校验!")
      } else if (!await(checkPhoneExists(phone)).success) {
        failed[Boolean](PhoneExistsError)
      } else {
        await(handleSendSms(authCodeType, clientId, phone, imgCode))
      }
    }
  }

  //更换手机号
  def updatePhone(authCodeType: AuthCodeType, passFlag: String, userSession: JwtSession, clientId: String, newPhone: String, smsCode: String): Future[Result[Boolean]] = {
    async {
      val authCodeKey = s"$clientId:$authCodeType"
      val authCodeValue = await(redisClient.get[String](authCodeKey)).getOrElse("")
      if (!authCodeValue.equals(smsCode)) {
        failed[Boolean](AuthCodeError)
      } else if (!await(checkPhoneExists(newPhone)).success) {
        failed[Boolean](PhoneExistsError)
      } else {
        await {
          for {
            _ <- redisClient.del(authCodeKey)
            _ <- redisClient.del(passFlag)
            r <- mongoUser.updateOne(equal("_id", userSession._id), set("phone", newPhone)).toFuture()
          } yield (success(r.getMatchedCount > 0))
        }
      }
    }
  }

  //更换管理员
  def changeAdmin(authCodeType: AuthCodeType, userSession: JwtSession, clientId: String, newAdminId: String, smsCode: String): Future[Result[Boolean]] = {

    def updateDB: Future[Boolean] = {
      for {
        a <- mongoUser.updateOne(equal("_id", new ObjectId(newAdminId)), set("role", RoleType.ADMIN.id)).toFuture.map(_.getModifiedCount > 0)
        b <- mongoUser.updateOne(equal("_id", userSession._id), set("disabled", true)).toFuture.map(_.getModifiedCount > 0)
      } yield b == true && b == true
    }

    async {
      val authCodeKey = s"$clientId:$authCodeType"
      val authCodeValue = await(redisClient.get[String](authCodeKey)).getOrElse("")
      if (!authCodeValue.equals(smsCode)) {
        failed[Boolean](AuthCodeError)
      } else {
        redisClient.del(authCodeKey)
        Option(await(mongoUser.find(equal("_id", new ObjectId(newAdminId))).head)) match {
          case None => failed(UserNotExistsError)
          case Some(_) => success(await(updateDB))
        }
      }
    }
  }

  def loadAllUsersInCompany(_id: ObjectId): Future[Result[Seq[UserDocument]]] = {
    findPersonalInfo(_id).map(u => u.companyId).flatMap {
      case Some(id) => mongoUser.find(equal("companyId", id)).toFuture().map(t => success(t.filter(u => u._id != _id && u.disabled!=true)))
      case None => Future.successful(success(Seq[UserDocument]()))
    }
  }

  def findAllUsersInCompany(_id: ObjectId, pager: Pager,
                            userName: Option[String],
                            phoneNum: Option[String]
                           ): Future[Result[PageItems[UserDocument]]] = {
    findPersonalInfo(_id)
      .map(u => u.companyId)
      .flatMap {
        case Some(id) => {

          val searchBson = List(
            userName.map(t => regex("userName", s"$t")),
            phoneNum.map(t => regex("phone", s"$t")),
            Option(equal("companyId", id))
          ).flatten

          val futureTotalCount = mongoUser.count(and(searchBson: _*)).toFuture()
          val futureData = mongoUser.find(and(searchBson: _*))
            .limit(pager.pageSize.get)
            .skip((pager.pageNum.get - 1) * pager.pageSize.get)
            .toFuture()
          for {(totalCount, data) <- futureTotalCount.zip(futureData);
               totalPage = if (totalCount % pager.pageSize.get == 0) totalCount % pager.pageSize.get else totalCount / pager.pageSize.get + 1
               p = Pagination(totalCount, totalPage, pager.pageSize.get, pager.pageNum.get)
          } yield success(data, p)
        }
        case None => {
          Future.successful(success(Seq[UserDocument](), Pagination()))
        }
      }
  }

  // 根据系统类型加载用户
  def findAllUsersOfPlatform(systemType: SystemType,
                             pager: Pager,
                             userName: Option[String],
                             phoneNum: Option[String],
                             disabled: Option[Boolean],
                             loginName: Option[String]
                            ): Future[Result[PageItems[UserDocument]]] = {

    val searchBson = List(
      userName.map(v => regex("userName", v)),
      phoneNum.map(v => regex("phone", v)),
      loginName.map(v => regex("loginName", v)),
      disabled.map(v => equal("disabled", v)),
      Option(equal("systemId", systemType.id))
    ).flatten

    val futureTotalCount = mongoUser.count(and(searchBson: _*)).toFuture()
    val futureData= mongoUser.find(and(searchBson: _*))
      .limit(pager.pageSize.get)
      .skip((pager.pageNum.get - 1) * pager.pageSize.get)
      .toFuture()
    for {(totalCount, data) <- futureTotalCount.zip(futureData);
         totalPage = if (totalCount % pager.pageSize.get == 0) totalCount % pager.pageSize.get else totalCount / pager.pageSize.get + 1
         p = Pagination(totalCount, totalPage, pager.pageSize.get, pager.pageNum.get)
    } yield success(data, p)
  }


  //添加员工
  def addEmployee(userSession: JwtSession, request: EmployeeRequest, systemType: SystemType): Future[Result[Boolean]] = {
    async {
      val user = await(findPersonalInfo(userSession._id))
      if (!await(checkPhoneExists(request.phone)).success) {
        failed[Boolean](PhoneExistsError)
      } else if (!await(checkLoginNameExists(request.loginName)).success) {
        failed[Boolean](LoginNameExistsError)
      } else {
        val passwordSalt = Digests.generateSalt(SALT_SIZE);
        val hashPassword = Digests.sha1(initialPassword.getBytes, passwordSalt, HASH_INTERATIONS)
        val u: UserDocument = UserDocument(new ObjectId(), systemId = systemType.id, phone = request.phone,
          loginName = request.loginName, password = Encodes.encodeHex(hashPassword), passwordSalt = Encodes.encodeHex(passwordSalt),
          userName = request.userName, role = request.userType.id, disabled = false, dept = request.dept, companyId = user.companyId)
        await(mongoUser.insertOne(u).toFuture().map(_ => success(true)))
      }
    }
  }

  def updateEmployee(employeeId: String, employee: EmployeeRequest): Future[Result[Boolean]] = {
    val updateBson = combine(set("userName", employee.userName),
      set("phone", employee.phone),
      set("dept", employee.dept.getOrElse(null)),
      set("role", employee.userType.id))
    async {
      val existsCount = await(mongoUser.count(and(equal("phone", employee.phone), notEqual("_id", new ObjectId(employeeId)))).toFuture())
      if (existsCount > 0) {
        failed[Boolean](PhoneExistsError)
      } else {
        await(mongoUser.updateOne(equal("_id", new ObjectId(employeeId)), updateBson).toFuture().map(_ => success(true)))
      }

    }
  }

  def disabledEmployeeAccount(employeeId: String, disabled: Boolean): Future[Result[Boolean]] = {
    mongoUser.updateOne(equal("_id", new ObjectId(employeeId)), set("disabled", disabled)).toFuture().map(_ => success(true))
  }

  def resetEmployeeLoginPwd(employeeId: String): Future[Result[Boolean]] = {
    val passwordSalt = Digests.generateSalt(SALT_SIZE);
    val hashPassword = Digests.sha1(initialPassword.getBytes, passwordSalt, HASH_INTERATIONS)
    val updateBson = combine(set("password", Encodes.encodeHex(hashPassword)), set("passwordSalt", Encodes.encodeHex(passwordSalt)))
    mongoUser.updateOne(equal("_id", new ObjectId(employeeId)), updateBson)
      .toFuture().map(_ => success(true))
  }

  def updateUserCompanyId(_id: ObjectId, companyId: String): Future[Boolean] = {
    mongoUser.updateOne(equal("_id", _id), set("companyId", companyId)).head().map(_.getModifiedCount > 0)
  }


}

