package com.yimei.jfc.asset

import com.yimei.jfc.core.{AppConfig, CoreSupport, MongoSupport, Utils}
import org.mongodb.scala.MongoCollection
import org.mongodb.scala.bson.ObjectId

import scala.concurrent.Future

object AssetServiceUtils extends AppConfig {

  val callbackBody = "filename=${object}&size=${size}&mimeType=${mimeType}&height=${imageInfo.height}&width=${imageInfo.width}&realname=${x:realname}";

  val callback = Utils.base64Encode(
    s"""
       |{
       |"callbackUrl":"http://$jfcDomain/api/asset/callback",
       |"callbackBody":"$callbackBody",
       |"callbackBodyType":"application/x-www-form-urlencoded"
       |}
    """.stripMargin.getBytes()
  )

}

/**
  * Created by xiangyang on 2017/5/5.
  */
trait AssetService extends CoreSupport {

  def insertUploadRecord(filename: String, mimeType: String, realname: String): Future[Boolean] = {
    val collection: MongoCollection[OssAssetDocument] = mongoDb.getCollection("uploadFile_record");
    collection.insertOne(OssAssetDocument(new ObjectId(),filename, mimeType, realname)).toFuture().map { _ => true }
  }

  def getPolicy: String = {
    val expire = "2120-01-01T12:00:00.000Z" // todo: should be now + 10 minutes
    s"""
       |{
       |"expiration": "$expire",
       |"conditions": [
       |  ["content-length-range", 0, 1073741824]
       |]
       |}
    """.stripMargin
  }
}
