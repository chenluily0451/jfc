package com.yimei.jfc.dict

/**
  * Created by hary on 2017/5/13.
  */
// 付款方式
object PayMode extends Enumeration {
  type PayMode = Value
  val PAY_XF = Value(0, "现汇")
  val PAY_DF = Value(1, "电汇")
  val PAY_CDHP = Value(2, "承兑汇票")
  val PAY_CDHP_DF = Value(3, "电汇+承兑汇票")

  implicit val payModeFormat = JsonFormatEnum[PayMode](PayMode)

}