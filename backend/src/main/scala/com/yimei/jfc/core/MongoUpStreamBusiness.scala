package com.yimei.jfc.core

import java.util.Date

import org.mongodb.scala.bson.ObjectId
import spray.json.DefaultJsonProtocol

/**
  * Created by xiangyang on 2017/6/10.
  * 上游企业业务信息
  */
trait MongoUpStreamBusiness extends Core with DefaultJsonProtocol with HttpSupport with MongoCommon with MongoBridgeBusiness {


  // 业务申请-运输交货信息项
  case class TrafficDocument(
                              deliveryBegin: Option[Date] = None, //供货开始时间
                              deliveryEnd: Option[Date] = None, //供货截止时间
                              trafficMode: Option[Int] = None, //  运输方式	选择	运输方式：汽运，火运，船运，其他	　	　
                              sendStation: Option[String] = None, //  发运站	录入	与运输方式联动：（1）若为“汽运”，显示“发运地”，（2）若为“火运”，显示“发站”和“到站”（3）若为“船运”，显示“发运港”和“到货港”（4）若为"其他"，显示“发货地”，“交货地”	　	　
                              receiveStation: Option[String] = None, // 交货站
                              freightPayer: Option[String] = None, //  运费承担方	录入	必填	文本	　
                              freightPrice: Option[Double] = None, //  运费	录入	必填	数字	单位，元/吨
                              otherMiscFee: Option[Double] = None  // 其它杂费
                            )

  implicit val trafficInfoFormat = jsonFormat8(TrafficDocument)

  // 业务申请-价格及付款信息
  case class PayInfoDocument(
                              contractUnitPrice: Option[Double] = None, // 合同单价	录入	必填	数字	单位元/吨
                              hasDeposit: Option[Boolean] = None, //  是否有保证金	录入	布尔	　	有；无
                              depositAmount: Option[Double] = None, // 保证金额
                              payMode: Option[Int] = None, //  付款方式	选择	　	　	电汇、承兑汇票、电汇+承兑汇票
                              contractAmount: Option[Double] = None, //  合同量录入	必填	数字	单位吨
                              payCertificatePic: Option[FileDocument] = None, //  保证金付款凭证	录入	照片	图片	　
                              openAccountBank: Option[String] = None, // 开户行
                              bankAccountNo: Option[String] = None // 银行账号
                            )

  implicit val PayInfoFormat = jsonFormat8(PayInfoDocument)


  // 业务申请-合同信息
  case class ProvisionContractDocument(
                                        // 合同影印件
                                        contractFile: Option[List[FileDocument]] = None,
                                        // 其他附件
                                        otherContractFile: Option[List[FileDocument]] = None
                                      )

  implicit val ProvisionContractFormat = jsonFormat2(ProvisionContractDocument)


  case class IndexBracketDouble(begin: Option[Double], end: Option[Double]);

  implicit val IndexBracketDoubleFormat = jsonFormat2(IndexBracketDouble);

  case class IndexBracketInt(begin: Option[Int], end: Option[Int]);

  implicit val IndexBracketIntFormat = jsonFormat2(IndexBracketInt);


  //煤炭产地
  case class CoalPlace(province: String, city: String);

  implicit val CoalPlaceFormat = jsonFormat2(CoalPlace)

  // 煤炭指标信息
  case class CoalIndex(
                        /*煤种*/
                        coalType: Option[String] = None,
                        /*煤产地*/
                        coalPlace: Option[CoalPlace] = None,
                        /*热值*/
                        NCV: Option[IndexBracketInt] = None,
                        /*空干基挥发分*/
                        ADV: Option[IndexBracketDouble] = None,
                        /*全水*/
                        TM: Option[IndexBracketDouble] = None,
                        /*收到基硫分*/
                        RS: Option[IndexBracketDouble] = None,
                        /*空干基硫发分*/
                        ADS: Option[IndexBracketDouble] = None,
                        /*内水*/
                        IM: Option[IndexBracketDouble] = None,
                        /*灰分*/
                        ASH: Option[IndexBracketDouble] = None,
                        /*固定碳*/
                        FC: Option[IndexBracketInt] = None,
                        /* G值*/
                        GV: Option[IndexBracketInt] = None,
                        /*Y值*/
                        YV: Option[IndexBracketInt] = None,
                        /*灰熔点*/
                        AFT: Option[IndexBracketInt] = None,
                        /* 哈氏可磨指数	*/
                        HGI: Option[IndexBracketInt] = None,
                        /*收到基挥发*/
                        RV: Option[IndexBracketDouble] = None,
                        /*焦渣特征*/
                        CRC: Option[IndexBracketInt] = None,
                        /*颗粒度*/
                        PS: Option[String] = None
                      )

  implicit val CoalIndexFormat = jsonFormat17(CoalIndex)

  /*
  一、业务准备阶段(上游 + 核心企业)
  1 上游企业 进行供货业务申请
  2 核心企业 审核业务申请
  3 易煤网 审查贸易真实性

  二、核心企业 + 下游企业
  4 核心企业 进行融资业务申请
  5 易煤网 审查贸易真实性并上传风控报告
  6 资金方 评判业务可操作性
  7 核心企业 上传融资协议和代还款协议
  8 易煤网 审核协议真实性
  */


  /**
    * 上游业务申请
    *
    * @param businessId         业务ID,parent Document _id
    * @param receiveCompanyName 核心企业公司名称
    * @param receiveCompanyId   核心企业公司Id
    * @param lastUpdateDate     最后修改时间
    * @param provider           供货方
    * @param coalIndex          煤炭指标信息
    * @param trafficInfo        运输交货信息项
    * @param payInfo            价格及付款信息
    * @param contractInfo       合同信息
    * @param auditList          审核信息
    */
  case class BuApplication(
                            businessId: Option[String] = None,
                            receiveCompanyName: Option[String] = None,
                            receiveCompanyId: Option[String] = None,
                            lastUpdateDate: Option[Date] = None,
                            provider: Option[Seq[String]] = None,
                            coalIndex: Option[CoalIndex] = None,
                            trafficInfo: Option[TrafficDocument] = None,
                            payInfo: Option[PayInfoDocument] = None,
                            contractInfo: Option[ProvisionContractDocument] = None,
                            auditList: Option[Seq[AuditDocument]] = None
                          ) {
    def check1: (Boolean, String) = {
      import com.wix.accord._
      import com.wix.accord.dsl._
      implicit val check1Validate = validator[BuApplication] { bu =>
        bu.receiveCompanyId.getOrElse("") is notEmpty
      }
      validate(this) match {
        case Success => (true, "")
        case t => (false, t.toString)
      }
    }
  }

  implicit val BuApplicationFormat = jsonFormat10(BuApplication)


  /**
    * 核心企业补充下游合同
    *
    * @param businessId               业务ID,parent Document _id
    * @param downstreamCompanyName    下游公司名
    * @param capitalCompanyId         资金方公司id
    * @param capitalCompanyName       资金方公司名称
    * @param contractAmount           合同量
    * @param contractUnitPrice        合同单价
    * @param deliveryBegin            交货开始时间
    * @param deliveryEnd              交货截止时间
    * @param returnedMoneyPeriod      回款周期
    * @param detectionOrganization    检测机构
    * @param hasDeposit               是否缴纳保证金
    * @param depositAmount            保证金金额
    * @param depositPayCertificatePic 保证金支付凭证图片
    * @param numberInspection         数量检测
    * @param qualityInspection        质量检测
    * @param contractFiles            合同影印件
    * @param createPersonId           创建人ID
    * @param createPersonName         创建人姓名
    * @param bridgeCompanyName        核心企业公司名称
    * @param createDate               创建日期
    * @param auditList                审核记录
    */
  case class BdApplication(
                            businessId: String,
                            downstreamCompanyName: Option[String],
                            capitalCompanyId: Option[String],
                            capitalCompanyName: Option[String],
                            contractAmount: Option[Double],
                            contractUnitPrice: Option[Double] = None,
                            deliveryBegin: Option[Date] = None,
                            deliveryEnd: Option[Date] = None,
                            returnedMoneyPeriod: Option[Int],
                            detectionOrganization: Option[String],
                            hasDeposit: Option[Boolean] = None,
                            depositAmount: Option[Double] = None,
                            depositPayCertificatePic: Option[FileDocument] = None,
                            numberInspection: Option[String] = None,
                            qualityInspection: Option[String] = None,
                            contractFiles: Option[Seq[FileDocument]] = None,
                            createPersonId: Option[String] = None,
                            createPersonName: Option[String] = None,
                            bridgeCompanyName: Option[String] = None,
                            createDate: Option[Date] = None,
                            auditList: Option[Seq[AuditDocument]] = None
                          ) {
    def check1: (Boolean, String) = {
      import com.wix.accord._
      import com.wix.accord.dsl._
      implicit val check1Validate = validator[BdApplication] { bd =>
        bd.capitalCompanyId.getOrElse("") is notEmpty
      }
      validate(this) match {
        case Success => (true, "")
        case t => (false, t.toString)
      }
    }
  }

  implicit val BdApplicationFormat = jsonFormat21(BdApplication)

  /**
    * 核心企业上传协议
    *
    * @param businessId           业务ID
    * @param financingProtocolPic 融资协议
    * @param repayProtocolPic     代还款协议
    */
  case class FinancingProtocolDocument(
                                        businessId: String,
                                        financingProtocolPic: Option[Seq[FileDocument]],
                                        repayProtocolPic: Option[Seq[FileDocument]],
                                        auditList: Option[Seq[AuditDocument]]
                                      ) {
    def check1: (Boolean, String) = {
      import com.wix.accord._
      import com.wix.accord.dsl._
      implicit val check1Validate = validator[FinancingProtocolDocument] { f =>
        f.financingProtocolPic.getOrElse(Seq()) is notEmpty
        f.repayProtocolPic.getOrElse(Seq()) is notEmpty
      }
      validate(this) match {
        case Success => (true, "")
        case t => (false, t.toString)
      }
    }
  }


  implicit val FinancingProtocolFormat = jsonFormat4(FinancingProtocolDocument)


  /**
    *
    * 业务文档
    *
    * @param _id
    * @param status              状态
    * @param upstreamCompanyId   上游公司ID
    * @param upstreamCompanyName 上游公司名称
    * @param createPersonId      创建人ID
    * @param createDate          创建日期
    * @param version             修改版本
    * @param upstreamBusiness    上游业务申请
    * @param downstreamBusiness  下游业务申请
    * @param financingProtocol   融资协议
    * @param bridgeCompanyId     核心企业ID
    * @param capitalCompanyId    资金方ID
    */
  case class BusinessDocument(_id: ObjectId,
                              upstreamBusiness: BuApplication,
                              upstreamCompanyId: String,
                              upstreamCompanyName: String,
                              createPersonId: String,
                              status: Int,
                              createDate: Date,
                              version: Option[Int] = None,
                              downstreamBusiness: Option[BdApplication] = None,
                              financingProtocol: Option[FinancingProtocolDocument] = None,
                              bridgeCompanyId: Option[String] = None,
                              capitalCompanyId: Option[String] = None
                             )

  implicit val BusinessDocumentFormat = jsonFormat12(BusinessDocument)


  /**
    * 债权 -  货物数量单据
    *
    * @param _id               id
    * @param receiptsBeginDate 单据开始日期
    * @param receiptsEndDate   单据截止日期
    * @param carAmount         车船数量
    * @param receiptAmount     单据数量
    * @param receiptFile       单据图片
    */
  case class DebtQuantityDocument(
                                   _id: Option[ObjectId],
                                   receiptsBeginDate: Date,
                                   receiptsEndDate: Date,
                                   carAmount: Int,
                                   receiptAmount: Double,
                                   receiptFile: List[FileDocument]
                                 )

  implicit val DebtQuantityFormat = jsonFormat6(DebtQuantityDocument)

  /**
    * 债权 - 货物质量单据
    *
    * @param _id
    * @param receiptsBeginDate   单据开始日期
    * @param receiptsEndDate     单据截止日期
    * @param calculateAmount     计量吨数
    * @param checkAmount         验收数量
    * @param coalIndex           煤炭指标
    * @param coalReportPresetWay 煤炭报告呈现形式
    * @param isFromDownstreamObtain  是否从下游获取
    * @param receiptFile         单据图片
    */
  case class DebtQualityDocument(
                                  _id: Option[ObjectId],
                                  receiptsBeginDate: Date,
                                  receiptsEndDate: Date,
                                  calculateAmount: Option[Double],
                                  checkAmount: Option[Double],
                                  coalIndex: CoalIndex,
                                  coalReportPresetWay: Option[String],
                                  isFromDownstreamObtain: Option[Boolean],
                                  receiptFile: List[FileDocument]

                                )

  implicit val DebtQualityFormat = jsonFormat9(DebtQualityDocument)

  /**
    *
    * 债权
    *
    * @param _id
    * @param businessId          业务ID
    * @param bridgeCompanyId     核心企业公司ID
    * @param bridgeCompanyName   核心企业公司名称
    * @param upstreamCompanyId   上游公司ID
    * @param upstreamCompanyName 上游公司名称
    * @param capitalCompanyName  资金方公司名称
    * @param capitalCompanyId    资金方公司ID
    * @param quantity            数量单据
    * @param quality             质量单据
    * @param status              状态
    * @param createDate          创建日期
    * @param capitalRaiseId      融资编号
    * @param evaluationAmount    债权估值
    * @param  totalQuantity      债权总吨数
    */
  case class DebtDocument(
                           _id: Option[ObjectId],
                           businessId: String,
                           bridgeCompanyId: Option[String],
                           bridgeCompanyName: Option[String],
                           upstreamCompanyId: Option[String],
                           upstreamCompanyName: Option[String],
                           capitalCompanyName: Option[String],
                           capitalCompanyId: Option[String],
                           quantity: Seq[DebtQuantityDocument],
                           quality: Seq[DebtQualityDocument],
                           status: Option[Int],
                           createDate: Option[Date],
                           capitalRaiseId: Option[String],
                           evaluationAmount: Option[Double],
                           totalQuantity: Option[Double]
                         )

  implicit val DebtDocumentFormat = jsonFormat15(DebtDocument)

  /**
    *
    * 融资
    *
    * @param _id
    * @param businessId
    * @param capitalRaisingAmount 融资金额
    * @param debtActualValue      债券实际货值
    * @param capitalRaisingBegin  融资开始时间
    * @param capitalRaisingEnd    融资结束时间
    * @param receiptAcquired      单据是否获取
    * @param  repaymentId         还款id
    * @param invoiceNo            发票号
    * @param invoiceAmount        发票金额
    * @param invoicePic           发票扫描件
    * @param goodTransferPic      货权转移证明
    * @param debtIds              债券
    */
  case class CapitalRaiseDocument(_id: Option[ObjectId],
                                  businessId: String,
                                  upstreamCompanyId: Option[String],
                                  upstreamCompanyName: Option[String],
                                  capitalCompanyId: Option[String],
                                  capitalCompanyName: Option[String],
                                  bridgeCompanyId: Option[String],
                                  bridgeCompanyName: Option[String],
                                  createDate: Option[Date],
                                  capitalRaisingAmount: Option[Double] = None,
                                  debtActualValue: Option[Double] = None,
                                  capitalRaisingBegin: Option[Date] = None,
                                  capitalRaisingEnd: Option[Date] = None,
                                  receiptAcquired: Option[Boolean] = None,
                                  repaymentId: Option[String] = None,
                                  invoiceNo: Option[List[String]] = None,
                                  invoiceAmount: Option[Double] = None,
                                  invoicePic: Option[List[FileDocument]] = None,
                                  goodTransferPic: Option[List[FileDocument]] = None,
                                  status: Option[Int] = None,
                                  auditList: Option[List[AuditDocument]] = None,
                                  debtIds: Option[Seq[String]] = None
                                 )


  implicit val CapitalRaiseFormat = jsonFormat22(CapitalRaiseDocument)

  /**
    * 资金方放款
    *
    * @param _id
    * @param businessId             业务id
    * @param capitalRaiseId         融资id
    * @param payAmount              付款金额
    * @param payDate                付款日期
    * @param payCompanyName         付款公司
    * @param payMode                付款方式
    * @param payAccount             付款账号
    * @param payCertificatePic      付款支付凭证
    * @param payCompanyBankProvince 付款公司开户行省
    * @param payCompanyBankCity     付款公司开户行市
    * @param payCompanyBankDistrict 付款公司开户行地区
    * @param payCompanyBankName     支付公司银行开户名
    * @param recvCompanyName        收款公司名
    * @param recvBankProvince       收款银行所在省
    * @param recvBankCity           收款银行所在市
    * @param recvBankDistrict       收款银行所在区县
    * @param recvBankName           收款银行名称
    * @param recvBankAddr           收款银行地址
    * @param recvAccount            收款账号
    * @param recvAmount             收款金额
    */
  case class CapitalLendingDocument(
                                     _id: Option[ObjectId] = None,
                                     businessId: String,
                                     capitalRaiseId: String,
                                     payAmount: Option[Double] = None,
                                     payDate: Option[Date] = None,
                                     payCompanyName: Option[String] = None,
                                     payMode: Option[Int] = None,
                                     payAccount: Option[String] = None,
                                     payCertificatePic: Option[FileDocument] = None,
                                     payCompanyBankProvince: Option[String] = None,
                                     payCompanyBankCity: Option[String] = None,
                                     payCompanyBankDistrict: Option[String] = None,
                                     payCompanyBankName: Option[String] = None,
                                     recvCompanyName: Option[String] = None,
                                     recvBankProvince: Option[String] = None,
                                     recvBankCity: Option[String] = None,
                                     recvBankDistrict: Option[String] = None,
                                     recvBankName: Option[String] = None,
                                     recvBankAddr: Option[String] = None,
                                     recvAccount: Option[String] = None,
                                     recvAmount: Option[Double] = None
                                   )

  implicit val CapitalLendingFormat = jsonFormat21(CapitalLendingDocument)

  case class PayInfo(
                      payAmount: Option[Double] = None,
                      payDate: Option[Date] = None,
                      payCompanyName: Option[String] = None,
                      payMode: Option[Int] = None,
                      payAccount: Option[String] = None,
                      payCertificatePic: Option[FileDocument] = None,
                      payCompanyBankProvince: Option[String] = None,
                      payCompanyBankCity: Option[String] = None,
                      payCompanyBankDistrict: Option[String] = None,
                      payCompanyBankName: Option[String] = None
                    )

  implicit val payInfoFormat = jsonFormat10(PayInfo)

  case class RecvInfo(
                       recvCompanyName: Option[String] = None,
                       recvBankProvince: Option[String] = None,
                       recvBankCity: Option[String] = None,
                       recvBankDistrict: Option[String] = None,
                       recvBankName: Option[String] = None,
                       recvBankAddr: Option[String] = None,
                       recvAccount: Option[String] = None,
                       recvAmount: Option[Double] = None
                     )

  implicit val RecvInfoFormat = jsonFormat8(RecvInfo)

  //  核心企业回款到资金方
  case class BridgeRepaymentDocument(
                                      _id: Option[ObjectId],
                                      businessId: String,
                                      bridgeCompanyId: Option[String],
                                      capitalCompanyId: String,
                                      capitalRaiseIds: List[String],
                                      status: Option[Int] = None,
                                      payInfo: PayInfo,
                                      recvInfo: RecvInfo
                                    )

  implicit val BridgeRepaymentDocumentFormat = jsonFormat8(BridgeRepaymentDocument)

  // 下游还款
  case class DownstreamRepaymentDocument(
                                          _id: Option[ObjectId] = None,
                                          businessId: String = null,
                                          payAmount: Option[Double] = None,
                                          payDate: Option[Date] = None,
                                          payCompanyName: Option[String] = None,
                                          payMode: Option[Int] = None,
                                          payAccount: Option[String] = None,
                                          payCertificatePic: Option[FileDocument] = None,
                                          payCompanyBankProvince: Option[String] = None,
                                          payCompanyBankCity: Option[String] = None,
                                          payCompanyBankDistrict: Option[String] = None,
                                          payCompanyBankName: Option[String] = None,
                                          recvCompanyName: Option[String] = None,
                                          recvBankProvince: Option[String] = None,
                                          recvBankCity: Option[String] = None,
                                          recvBankDistrict: Option[String] = None,
                                          recvBankName: Option[String] = None,
                                          recvBankAddr: Option[String] = None,
                                          recvAccount: Option[String] = None,
                                          recvAmount: Option[Double] = None
                                        )

  implicit val DownstreamRepaymentFormat = jsonFormat20(DownstreamRepaymentDocument)
}
