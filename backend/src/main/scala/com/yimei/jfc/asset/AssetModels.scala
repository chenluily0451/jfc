package com.yimei.jfc.asset

import spray.json.DefaultJsonProtocol

/**
  * Created by hary on 2017/5/2.
  */
trait AssetModels extends DefaultJsonProtocol {

  case class PolicyResponse(callback: String, signature: String, policy: String, OSSAccessKeyId: String, host: String,dirName:String)
  implicit val PolicyResponseFormat = jsonFormat6(PolicyResponse)

  case class OssCallbackResponse(success: Boolean, fileName: String, mimeType: String, realname: String)
  implicit val OssCallbackResponseFormat = jsonFormat4(OssCallbackResponse)
}

object AssetModels extends AssetModels
