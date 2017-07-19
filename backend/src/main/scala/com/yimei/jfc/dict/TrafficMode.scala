package com.yimei.jfc.dict

import spray.json.{DeserializationException, JsNumber, JsObject, JsString, JsValue, RootJsonFormat}

/**
  * Created by hary on 2017/5/13.
  */

// 运输方式
object TrafficMode extends Enumeration {
  type TrafficMode = Value
  val TRAFFIC_BY_CAR = Value(0, "汽运")
  val TRAFFIC_BY_TRAIN = Value(1, "火运")
  val TRAFFIC_BY_BOAT = Value(2, "船运")

  implicit val trafficModeFormat = JsonFormatEnum[TrafficMode](TrafficMode)

}
