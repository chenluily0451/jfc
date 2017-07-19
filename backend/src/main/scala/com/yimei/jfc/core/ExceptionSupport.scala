package com.yimei.jfc.core

import com.yimei.jfc.dict.RoleType.UserType

/**
  * Created by hary on 2017/5/12.
  */
// 异常定义
trait ExceptionSupport {

  sealed trait InternalException extends Exception {
    val message: String
  }

  case class DatabaseException(message: String) extends InternalException

  case class ParameterException(message: String) extends InternalException

  case class BusinessException(message: String) extends InternalException

  case class UnauthorizedException(message: String) extends InternalException

  case class NotFoundException(message:String) extends InternalException

  case class ForbiddenException(userType: UserType, message: String) extends InternalException

  case class CompanyException(status:Int,message:String) extends InternalException

}
