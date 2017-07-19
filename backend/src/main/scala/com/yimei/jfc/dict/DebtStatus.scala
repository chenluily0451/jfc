package com.yimei.jfc.dict

/**
  * Created by xiangyang on 2017/6/15.
  */

object DebtStatus extends Enumeration {

  type DebtType = Value


  val NOFINANCE= Value(0, "未融资")

  val FINANCED= Value(1, "已融资")



  implicit val DebtTypeFormat = JsonFormatEnum[DebtType](DebtStatus)
}
