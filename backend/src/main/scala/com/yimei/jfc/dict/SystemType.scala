package com.yimei.jfc.dict


/**
  * Created by xiangyang on 2017/6/5.
  */
object SystemType extends Enumeration {

  type SystemType = Value

  val bridge = Value(1, "bridge")
  val capital = Value(2, "capital")
  val upstream = Value(3, "upstream")
  val platform = Value(4, "platform")

  implicit val systemTypeFormat = JsonFormatEnum[SystemType](SystemType)

}
