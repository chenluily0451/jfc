package com.yimei.jfc.dict

/**
  * Created by hary on 2017/5/17.
  */
object CompanyStatus extends Enumeration {

  type CompanyStatus = Value

  val CS_DRAFT = Value(0, "尚未提交")
  val CS_TO_CHECK = Value(1, "待平台审核")
  val CS_FAIL = Value(2, "审核不通过-打回")
  val CS_FAIL_END = Value(3, "审核不通过-结束")
  val CS_SUCCESS = Value(4, "审核通过")

  implicit val companyStatusFormat = JsonFormatEnum[CompanyStatus](CompanyStatus)

}
