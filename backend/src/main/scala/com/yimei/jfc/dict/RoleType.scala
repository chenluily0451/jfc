package com.yimei.jfc.dict

import com.yimei.jfc.dict
import spray.json.{DeserializationException, JsNumber, JsString, JsValue, RootJsonFormat}

/**
  * Created by hary on 2017/5/13.
  */

object RoleType extends Enumeration {
  type UserType = Value
  val ADMIN = Value(1, "管理员")
  val SALESMAN = Value(2, "业务人员")
  val TREASURER = Value(3, "财务人员")

  val PlatFormCustomerService = Value(4, "平台客服")
  val PlatFormAdmin = Value(5, "平台管理员")

  implicit val UserTypeFormat = JsonFormatEnum[UserType](RoleType)
}
