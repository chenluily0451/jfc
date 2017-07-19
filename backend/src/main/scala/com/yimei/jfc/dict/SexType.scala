package com.yimei.jfc.dict

/**
  * Created by hary on 2017/5/13.
  */
// 付款方式
object SexType extends Enumeration {
  type SexType = Value
  val SEX_MALE = Value(0, "男")
  val SEX_FEMALE = Value(1, "女")

  implicit val sexTypeFormat = JsonFormatEnum[SexType](SexType)
}