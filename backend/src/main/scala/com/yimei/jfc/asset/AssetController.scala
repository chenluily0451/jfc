package com.yimei.jfc.asset

import com.yimei.jfc.core.Utils

import scala.concurrent.Future

/**
  * Created by hary on 2017/5/12.
  */
trait AssetController extends AssetService {

  import AssetModels._

  def handleUploadPolicy(dirname: String): PolicyResponse = {
    val policy = Utils.base64Encode(getPolicy.getBytes());
    PolicyResponse(
      AssetServiceUtils.callback,
      Utils.hmacSHA1(accessKeySecret.getBytes(), policy.getBytes()),
      policy,
      accessKeyId,
      ossHost,
      dirname)
  }

  def handleOssCallback(filename: String, mimeType: String, realname: String): Future[OssCallbackResponse] = {
    insertUploadRecord(filename, mimeType, realname).map {
      case true => OssCallbackResponse(true, filename, mimeType, realname)
      case false => OssCallbackResponse(false, filename, mimeType, realname)
    }
  }
}
