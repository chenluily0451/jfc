package com.yimei.jfc.dict

import spray.json.{JsNumber, JsObject, JsString, JsValue, RootJsonFormat}

object JsonFormatEnum {
  def apply[T<: Enumeration#Value](enum: Enumeration): RootJsonFormat[T] = {
    val vmap = enum.values.toList.map { v => (v.id, v)}.toMap
    new RootJsonFormat[T] {
      override def write(obj: T): JsValue = JsObject(
        "id" -> JsNumber(obj.id),
        "value" -> JsString(obj.toString)
      )
      override def read(json: JsValue): T = json match {
        case JsNumber(n) => vmap(n.toInt).asInstanceOf[T]
        case _ => throw new RuntimeException(s"invalid values $json")
      }
    }
  }
}

