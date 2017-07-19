package com.yimei.jfc.core


trait AppConfig extends Core {

  case class AliyunConfig(accessKeyId: String, accessKeySecret: String, ossBucket: String, ossHost: String)
  case class JfcConfig(port: Int, domain: String, jwtSecret: String, jwtExpire: Long)

  case class SendCloudConfig(smsUrl: String, smsUser: String, smsKey: String, smsTemplates: Map[String, Map[String, String]])
  case class ApplicationConfig(aliyun: AliyunConfig, jfc: JfcConfig, sendcloud: SendCloudConfig)

  val accessKeyId = coreConfig.getString("aliyun.accessKeyId")
  val accessKeySecret = coreConfig.getString("aliyun.accessKeySecret")
  val ossBucket = coreConfig.getString("aliyun.ossBucket")
  val ossHost = coreConfig.getString("aliyun.ossHost")

  //
  val jfcPort = coreConfig.getInt("jfc.port")
  val jfcDomain = coreConfig.getString("jfc.domain")
  val jwtSecret = coreConfig.getString("jfc.jwtSecret")
  val jwtExpire = coreConfig.getLong("jfc.jwtExpire")

  // sendcloud
  val smsUrl = coreConfig.getString("sendcloud.sms.url")
  val smsUser = coreConfig.getString("sendcloud.sms.smsUser")
  val smsKey= coreConfig.getString("sendcloud.sms.smsKey")
  val smsRegisterTpl = coreConfig.getString("sendcloud.sms.template.authCode.id")
  val smsRegisterVars = Map(
    "hotline" -> coreConfig.getString("sendcloud.sms.template.authCode.vars.hotline")
  )

  val smsResetPassword= coreConfig.getString("sendcloud.sms.template.resetPassword.id")

  val mailUrl = coreConfig.getString("sendcloud.mail.url")
  val mailUser = coreConfig.getString("sendcloud.mail.mailUser")
  val mailKey = coreConfig.getString("sendcloud.mail.mailKey")


  // application config data
  val systemList = coreConfig.getStringList("jfc.systemList")
}
