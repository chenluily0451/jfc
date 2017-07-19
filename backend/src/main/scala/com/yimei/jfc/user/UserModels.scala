package com.yimei.jfc.user

import java.util.Date

import com.yimei.jfc.core.{CustomerJsonSupport, MongoSupport}
import com.yimei.jfc.dict.RoleType.UserType
import org.mongodb.scala.bson.ObjectId
import spray.json.DefaultJsonProtocol

/**
  * Created by hary on 2017/5/12.
  */
trait UserModels extends DefaultJsonProtocol with CustomerJsonSupport {

  case class JwtLoginRequest(username: String, password: String)

  implicit val JWTLoginRequestFormat = jsonFormat2(JwtLoginRequest)

  case class RegisterRequest(loginName: String, userName: String, password: String, phone: String, smsCode: String)

  implicit val RegisterRequestFormat = jsonFormat5(RegisterRequest)


  case class EmployeeRequest(loginName: String, userName: String, phone: String, dept: Option[String], userType: UserType)

  implicit val EmployeeRequestFormat = jsonFormat5(EmployeeRequest)


  case class UserDTO(_id: ObjectId,
                     systemId: Int,
                     companyId: Option[String],
                     dept: Option[String],
                     phone: String,
                     userName: String,
                     loginName: String,
                     role: Int,
                     disabled: Boolean,
                     createDate: Date)

  implicit val UserDTOFormat = jsonFormat10(UserDTO)




}

object UserModels extends UserModels
