package com.yimei.jfc.asset

import akka.http.scaladsl.server.Directives.{get, path, _}

/**
  * Created by hary on 2017/5/2.
  */
trait AssetRoute extends AssetController {

  ("AssetRoute coreSystem is " + coreSystem.hashCode())

  def assetRoute = pathPrefix("asset") {
    // 获取上传策略
    (path("policy") & get & jwt(0)) { jwtSession: JwtSession =>
      result(handleUploadPolicy(jwtSession._id.toString))
    } ~
      // 阿里云上传回调
      path("callback") {
        formFields("filename", "mimeType", "realname") { (filename, mimeType, realname) =>
          println(s"got realname = $realname")
          result(handleOssCallback(filename, mimeType, realname))
        }
      }
  }
}


