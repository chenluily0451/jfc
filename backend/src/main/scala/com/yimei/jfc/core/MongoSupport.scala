package com.yimei.jfc.core

import java.time.LocalDateTime

import com.yimei.jfc.dict.AuthCodeType.AuthCodeType
import org.bson.codecs.configuration.CodecRegistries.{fromProviders, fromRegistries}
import org.mongodb.scala.bson.{BsonDateTime, ObjectId}
import org.mongodb.scala.bson.codecs.Macros._
import org.mongodb.scala.bson.codecs.{DEFAULT_CODEC_REGISTRY, Macros}
import org.mongodb.scala.{MongoClient, MongoCollection}


/**
  * Created by hary on 2017/5/12.
  */
// mongodb supportj
trait MongoSupport extends MongoCommon with MongoUser with MongoUpStreamBusiness {

  case class SMSCodeDocument(_id: ObjectId, phone: String, code: String, mytype: AuthCodeType, createDate: LocalDateTime, expireDate: LocalDateTime, validated: Boolean = false)

  case class MyTestDocument(_id: ObjectId, createDate: BsonDateTime)

  implicit val MyTestFormat = jsonFormat2(MyTestDocument)


  val codecRegistry = fromRegistries(
    fromProviders(
      //      new LocalDateTimeCodecProvider(),

      Macros.createCodecProviderIgnoreNone[MyTestDocument](), //测试文档
      classOf[OssAssetDocument], // 阿里云资源
      Macros.createCodecProviderIgnoreNone[UserDocument](), //用户
      Macros.createCodecProviderIgnoreNone[FileDocument](),

      //公司基本信息
      Macros.createCodecProviderIgnoreNone[CompanyDocument](),
      Macros.createCodecProviderIgnoreNone[CompanyLicenseDocument](),
      Macros.createCodecProviderIgnoreNone[CompanyLegalPersonDocument](),
      Macros.createCodecProviderIgnoreNone[CompanyAuthPersonDocument](),
      Macros.createCodecProviderIgnoreNone[CompanyAuditDocument](),

      //公司准入信息
      Macros.createCodecProviderIgnoreNone[CompanySurveyDocument](),
      Macros.createCodecProviderIgnoreNone[LicenseSurveyDocument](),
      Macros.createCodecProviderIgnoreNone[BusinessRegisterSurveyDocument](),
      Macros.createCodecProviderIgnoreNone[ShareHolderSurveyDocument](),
      Macros.createCodecProviderIgnoreNone[ShareHolderDocument](),
      Macros.createCodecProviderIgnoreNone[ControlPersonDocument](),
      Macros.createCodecProviderIgnoreNone[FieldInvestigationSurveyDocument](),
      Macros.createCodecProviderIgnoreNone[CooperationSurveyDocument](),

      //下游公司
      Macros.createCodecProviderIgnoreNone[DownStreamCompany](),

      //核心企业发起下游业务申请
      Macros.createCodecProviderIgnoreNone[BdApplication](),

      //上游业务申请
      Macros.createCodecProviderIgnoreNone[BusinessDocument](),
      Macros.createCodecProviderIgnoreNone[CoalIndex](),
      Macros.createCodecProviderIgnoreNone[TrafficDocument](),
      Macros.createCodecProviderIgnoreNone[PayInfoDocument](),
      Macros.createCodecProviderIgnoreNone[ProvisionContractDocument](),
      Macros.createCodecProviderIgnoreNone[BuApplication](),
      Macros.createCodecProviderIgnoreNone[IndexBracketInt](),
      Macros.createCodecProviderIgnoreNone[IndexBracketDouble](),
      Macros.createCodecProviderIgnoreNone[CoalPlace](),
      Macros.createCodecProviderIgnoreNone[AuditDocument](),



      //债券和融资

      Macros.createCodecProviderIgnoreNone[FinancingProtocolDocument](),
      Macros.createCodecProviderIgnoreNone[DebtQuantityDocument](),
      Macros.createCodecProviderIgnoreNone[DebtQualityDocument](),
      Macros.createCodecProviderIgnoreNone[DebtDocument](),
      Macros.createCodecProviderIgnoreNone[CapitalRaiseDocument](),


      // 资金方放款
      Macros.createCodecProviderIgnoreNone[CapitalLendingDocument](),
      Macros.createCodecProviderIgnoreNone[BridgeRepaymentDocument](),
      Macros.createCodecProviderIgnoreNone[PayInfo](),
      Macros.createCodecProviderIgnoreNone[RecvInfo](),
      Macros.createCodecProviderIgnoreNone[DownstreamRepaymentDocument]())



      ,
      DEFAULT_CODEC_REGISTRY
    )
  val mongoClient = MongoClient(coreConfig.getString("mongo.uri"))
  val mongoDb = mongoClient.getDatabase(coreConfig.getString("mongo.database")).withCodecRegistry(codecRegistry)
  val mongoAsset: MongoCollection[OssAssetDocument] = mongoDb.getCollection("asset")
  val mongoUser: MongoCollection[UserDocument] = mongoDb.getCollection("user")
  val mongoCompany: MongoCollection[CompanyDocument] = mongoDb.getCollection("company")
  val mongoSurvey: MongoCollection[CompanySurveyDocument] = mongoDb.getCollection("companySurvey")
  val mongoDSCompany: MongoCollection[DownStreamCompany] = mongoDb.getCollection("downstreamCompany")


  val mongoBusiness: MongoCollection[BusinessDocument] = mongoDb.getCollection("business")
  val mongoBuApplication: MongoCollection[BuApplication] = mongoDb.getCollection("buApplication")
  val mongoDuApplication: MongoCollection[BdApplication] = mongoDb.getCollection("bdApplication")

  val mongoDebt: MongoCollection[DebtDocument] = mongoDb.getCollection("debt")
  val mongoCapitalRaise: MongoCollection[CapitalRaiseDocument] = mongoDb.getCollection("capitalRaise")

  val mongoCapitalLending: MongoCollection[CapitalLendingDocument] = mongoDb.getCollection("capitalLending")
  val mongoBridgeRepayment: MongoCollection[BridgeRepaymentDocument] = mongoDb.getCollection("bridgeRepayment")
  val mongoDownstreamRepayment: MongoCollection[DownstreamRepaymentDocument] = mongoDb.getCollection("downstreamRepayment")
  val mongoTest: MongoCollection[MyTestDocument] = mongoDb.getCollection("myTest")

}


