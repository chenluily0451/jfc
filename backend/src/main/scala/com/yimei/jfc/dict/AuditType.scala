package com.yimei.jfc.dict

/**
  * Created by xiangyang on 2017/6/15.
  */

object AuditType extends Enumeration {

  type AuditType = Value

  val PASS= Value(10, "审核通过")

  val FAIL= Value(1, "审核打回")

  val REFUSE= Value(0, "审核放弃")

  implicit val AuditTypeFormat = JsonFormatEnum[AuditType](AuditType)
}
