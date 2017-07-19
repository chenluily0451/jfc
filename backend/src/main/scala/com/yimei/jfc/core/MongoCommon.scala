package com.yimei.jfc.core

import java.util.Date

import org.mongodb.scala.bson.ObjectId
import spray.json.DefaultJsonProtocol

/**
  * Created by xiangyang on 2017/6/10.
  */
trait MongoCommon extends DefaultJsonProtocol with CustomerJsonSupport {

  case class OssAssetDocument(_id: ObjectId, filePath: String, mimeType: String, realname: String)

  case class FileDocument(filePath: String, fileName: String, fileExtName: String)

  implicit val FileDocumentFormat = jsonFormat3(FileDocument)

  /**
    *
    * @param systemId           参与方id
    * @param checkPersonId      审核人id
    * @param checkPersonName    审核人姓名
    * @param createDate         创建日期
    * @param checkResult        审核结果    1 打回， 2 通过， 3 放弃
    * @param opinion            审核意见
    * @param infoCollectChannel 信息获取渠道
    * @param  dataDeviation     数据偏差
    */
  case class AuditDocument(systemId: Int,
                           checkPersonId: String,
                           checkPersonName: String,
                           createDate: Date,
                           checkResult: Int,
                           opinion: Option[String]=None,
                           auditFile: Option[List[FileDocument]]=None,
                           infoCollectChannel: Option[String] = None,
                           dataDeviation: Option[String] = None
                          )


  implicit val AuditDocumentFormat = jsonFormat9(AuditDocument)


}
