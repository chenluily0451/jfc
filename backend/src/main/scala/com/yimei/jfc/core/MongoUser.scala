package com.yimei.jfc.core

import java.util.Date

import org.mongodb.scala.bson.ObjectId
import spray.json.DefaultJsonProtocol

/**
  * Created by xiangyang on 2017/6/10.
  */
trait MongoUser extends Core with DefaultJsonProtocol with HttpSupport with MongoCommon {

  case class UserDocument(_id: ObjectId,
                          systemId: Int, //系统id
                          companyId: Option[String], //公司id
                          dept: Option[String], //部门
                          phone: String, //手机号
                          userName: String, // 姓名
                          loginName: String, // 用户登录名
                          password: String, // 密码
                          passwordSalt: String, //
                          role: Int, // 是否为管理员
                          disabled: Boolean, // 是否禁用
                          createDate: Date = new Date()
                         )
  implicit val UserDocumentFormat = jsonFormat12(UserDocument)

  implicit val CompanyLicenseFormat = jsonFormat9(CompanyLicenseDocument)

  implicit val CompanyLegalPersonFormat = jsonFormat5(CompanyLegalPersonDocument)

  implicit val CompanyAuthPersonDocumentFormat = jsonFormat6(CompanyAuthPersonDocument)

  implicit val CompanyAuditDocumentFormat = jsonFormat5(CompanyAuditDocument)

  implicit val CompanyDocumentFormat = jsonFormat19(CompanyDocument)


  implicit val DownStreamCompanyFormat= jsonFormat3(DownStreamCompany)

  case class DownStreamCompany(_id:ObjectId,department:String,companies:Seq[String])
  //公司基本信息
  case class CompanyDocument(_id: Option[ObjectId] = None,
                             systemId: Option[Int] = None, // 系统id
                             companyName: Option[String] = None, // 公司全称
                             companyType: Option[Int] = None, // 公司类型
                             registerCapital: Option[Double] = None, // 注册资本
                             scope: Option[String] = None, // 经营范围
                             founded: Option[Date] = None, // 成立时间
                             province: Option[String] = None, // 省
                             city: Option[String] = None, // 市
                             district: Option[String] = None, // 区
                             registerAddress: Option[String] = None, // 注册地址
                             depts: Option[List[String]] = None, // 公司部门列表
                             license: Option[CompanyLicenseDocument] = None, // 证照信息
                             legalPerson: Option[CompanyLegalPersonDocument] = None, // 法人信息
                             authPerson: Option[CompanyAuthPersonDocument] = None, // 委托人信息
                             companyStatus: Option[Int] = None, // 公司状态
                             auditList: Option[List[CompanyAuditDocument]] = None, //公司信息审核
                             createBy: Option[String] = None, // 创建人
                             createDate: Option[Date] = None

                            )


  case class CompanyLicenseDocument(
                                     operationType: Option[Int], //营业期限类型
                                     operationBegin: Option[Date], // 营业期限开始时间
                                     operationEnd: Option[Date], // 营业期限截止时间
                                     registerOrgan: Option[String], // 登记机关
                                     // 证件信息
                                     unionLicenseCode: Option[String], //社会统一信用代码证编号
                                     operationLicensePic: Option[FileDocument], //营业执照图片
                                     organLicensePic: Option[FileDocument], //组织机构代码证图片
                                     unionLicensePic: Option[FileDocument], //社会统一信用代码证图片
                                     bankLicensePic: Option[FileDocument] //银行开户许可证图片
                                   )

  /**
    * 公司法人信息
    *
    * @param legalPersonName             法人姓名
    * @param legalPersonId               法人身份证号
    * @param legalPersonPhone            法人手机号
    * @param legalPersonIdFrontSidePic   法人身份证复印件正面图片
    * @param legalPersonIdReverseSidePic 法人身份证复印件反面图片
    */
  case class CompanyLegalPersonDocument(legalPersonName: Option[String],
                                        legalPersonId: Option[String],
                                        legalPersonPhone: Option[String],
                                        legalPersonIdFrontSidePic: Option[FileDocument],
                                        legalPersonIdReverseSidePic: Option[FileDocument]
                                       )

  /**
    * 公司委托人信息
    *
    * @param authPersonName             委托人姓名
    * @param authPersonId               委托人身份证号
    * @param authPersonPhone            委托人手机号
    * @param authDocumentPic            委托书
    * @param authPersonIdFrontSidePic   委托人身份证复印件正面图片
    * @param authPersonIdReverseSidePic 委托人身份证复印件反面图片
    */
  case class CompanyAuthPersonDocument(authPersonName: Option[String],
                                       authPersonId: Option[String],
                                       authPersonPhone: Option[String],
                                       authDocumentPic: Option[FileDocument],
                                       authPersonIdFrontSidePic: Option[FileDocument],
                                       authPersonIdReverseSidePic: Option[FileDocument]
                                      )

  /**
    *
    * @param _id
    * @param companyStatus 审核状态
    * @param auditContent  审核内容
    * @param auditPerson   审核人
    * @param createDate    创建日期
    */
  case class CompanyAuditDocument(_id: ObjectId,
                                  companyStatus: Int,
                                  auditContent: Option[String],
                                  auditPerson: String,
                                  createDate: Date = new Date())


  //公司调查信息
  case class CompanySurveyDocument(_id: Option[ObjectId] = None,
                                   systemId: Option[String] = None, // 系统id
                                   companyId: Option[String] = None, // 公司id
                                   licenseSurvey: Option[LicenseSurveyDocument] = None, //企业资质审查
                                   businessRegisterSurvey: Option[BusinessRegisterSurveyDocument] = None, //工商注册审查
                                   shareHolderSurvey: Option[ShareHolderSurveyDocument] = None, //股东审查意见
                                   controlPersonSurvey: Option[ControlPersonDocument] = None, //实际控制人调查
                                   fieldInvestigationSurvey: Option[FieldInvestigationSurveyDocument] = None, //实地调查
                                   cooperationSurvey: Option[CooperationSurveyDocument] = None, //合作记录调查
                                   createDate: Option[Date] = None
                                  )

  implicit val LicenseSurveyFormat = jsonFormat11(LicenseSurveyDocument)

  implicit val BusinessRegisterSurveyFormat = jsonFormat4(BusinessRegisterSurveyDocument)
  implicit val ShareHolderFormat = jsonFormat8(ShareHolderDocument)
  implicit val ShareHolderSurveyFormat = jsonFormat5(ShareHolderSurveyDocument)

  implicit val ControlPersonFormat = jsonFormat12(ControlPersonDocument)

  implicit val FieldInvestigationSurveyFormat = jsonFormat13(FieldInvestigationSurveyDocument)
  implicit val CooperationSurveyFormat = jsonFormat8(CooperationSurveyDocument)

  implicit val CompanySurveyFormat = jsonFormat10(CompanySurveyDocument)

  /**
    * 企业证件资质准入审查
    *
    * @param operationLicensePicChecked         营业执照
    * @param organLicensePicChecked             组织机构代码证
    * @param unionLicensePicChecked             统一信用代码证
    * @param bankLicensePicChecked              开户许可证
    * @param licenseAuditOpinion                资质审核意见
    * @param legalPersonIdFrontSidePicChecked   法人身份证正面
    * @param legalPersonIdReverseSidePicChecked 法人身份证反面
    * @param authPersonIdFrontSidePicChecked    授权委托人身份证正面
    * @param authPersonIdReverseSidePicChecked  授权委托人身份证反面
    * @param authDocumentPicChecked             授权委托书
    * @param otherLicenseAuditOpinion           其它资质审核意见
    */
  case class LicenseSurveyDocument(
                                    operationLicensePicChecked: Option[Boolean] = None,
                                    organLicensePicChecked: Option[Boolean] = None,
                                    unionLicensePicChecked: Option[Boolean] = None,
                                    bankLicensePicChecked: Option[Boolean] = None,
                                    legalPersonIdFrontSidePicChecked: Option[Boolean] = None,
                                    legalPersonIdReverseSidePicChecked: Option[Boolean] = None,
                                    authPersonIdFrontSidePicChecked: Option[Boolean] = None,
                                    authPersonIdReverseSidePicChecked: Option[Boolean] = None,
                                    authDocumentPicChecked: Option[Boolean] = None,
                                    licenseAuditOpinion: Option[String] = None,
                                    otherLicenseAuditOpinion: Option[String] = None
                                  )


  //工商注册审核意见
  case class BusinessRegisterSurveyDocument(registerAuditOpinion: Option[String],
                                            scopeAuditOpinion: Option[String],
                                            registerCapital: Option[Double],
                                            registerCapitalAuditOpinion: Option[String]
                                           )

  //股东审查意见
  case class ShareHolderSurveyDocument(executiveDirector: Option[String],
                                       supervisors: Option[String],
                                       manager: Option[String],
                                       auditOpinion: Option[String],
                                       shareHolderList: Option[List[ShareHolderDocument]] = Some(List())
                                      )

  // 股东构成
  case class ShareHolderDocument(_id: Option[ObjectId],
                                 name: String, //股东构成姓名	录入	　	　	　
                                 ratio: Double, //出资比例	录入	　	　	　
                                 subscribedAmount: Double, //认缴金额
                                 actualSubscribedAmount: Double, //实际认缴金额
                                 `type`: String, //股东类型
                                 subscribedAmountDate: Date, //认缴出资日期
                                 remark: Option[String] //备注
                                );


  // 实际控制人信息
  case class ControlPersonDocument(
                                    name: Option[String], //  姓名	录入	　	　	　
                                    age: Option[Int], //  年龄	录入	　	　	　
                                    sex: Option[Int], //  性别	录入	　	　	　
                                    phone: Option[String], //  联系方式	录入	　	　	　
                                    residence: Option[String], //  现居住地	录入	　	　	　
                                    family: Option[String], //  家庭成员情况	录入	　	　	　
                                    ownedCapital: Option[Double], //  自有资金情况	录入	　	　	　
                                    major: Option[String], //  主业务情况	录入	　	　	　
                                    minor: Option[String], //  其他业务情况	录入	　	　	　
                                    relatedCompany: Option[String], //  关联企业情况	录入	　	　	　
                                    badInfo: Option[String], //  有无不良纠纷及诉讼或者长期账款	录入	　	　	　
                                    otherInfo: Option[String] //  其他说明	录入
                                  )


  // 实地调查
  case class FieldInvestigationSurveyDocument(person: Option[String], // 实地尽职调查	被调查人	录入	　	　	　
                                              title: Option[String], // 职位	录入	　	　	　
                                              phone: Option[String], // 联系方式	录入	　	　	　
                                              recordingFile: Option[FileDocument], // 访谈录音文件
                                              registerAddress: Option[String], // 注册地址
                                              operationAddress: Option[String], // 经营地	选择+录入	　	　	　
                                              operationProvince: Option[String], // 省
                                              operationCity: Option[String], // 市
                                              operationDistrict: Option[String], // 区
                                              businessFulfilAddress: Option[String], // 业务实际履行地
                                              supplementFile: Option[FileDocument], //补充材料文件
                                              businessStateFile: Option[FileDocument], //经营情况状况文件
                                              auditOpinion: Option[String] //审核意见
                                             )

  // 合作记录
  case class CooperationSurveyDocument(time: Option[Date], // 合作时间
                                       name: Option[String], // 合作单位
                                       quantity: Option[Double], // 合作量
                                       bail: Option[Double], // 保证金
                                       completion: Option[Double], // 完成量
                                       traffic: Option[Int], // 运输方式
                                       settled: Option[Boolean], // 是否结清
                                       disputed: Option[Boolean] // 有无纠纷
                                      )




}
