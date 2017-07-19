package com.yimei.jfc.dict

/**
  * Created by hary on 2017/5/17.
  */
object BusinessStatus extends Enumeration {

  type BusinessStatus = Value

  // 业务申请阶段
  val UPSTREAM_SAVE_BUS = Value(1, "业务未提交")

  val BRIDGE_TO_AUDIT_BUS = Value(2, "核心企业待审核上游业务申请")

  val BRIDGE_CHECK_BUS_FAIL = Value(3, "核心企业打回上游业务申请")

  val PLATFORM_TO_AUDIT_BUS = Value(4, "平台待审核上游业务")

  val BRIDGE_TO_SUPPLEMENT_DOWNSTREAM = Value(5, "核心企业待补充下游业务信息")

  val PLATFORM_TO_AUDIT_DOWNSTREAM = Value(6, "平台待审核下游业务")

  val PLATFORM_CHECK_DOWNSTREAM_FAIL = Value(7, "平台打回下游业务")

  val CAPITAL_TO_AUDIT_DOWNSTREAM = Value(8, "资金方待审核下游业务")

  val CAPITAL_CHECK_DOWNSTREAM_FAIL = Value(9, "资金方打回下游业务")

  val BRIDGE_TO_UPLOAD_PROTOCOL = Value(10, "核心企业待上传融资还款协议")

  val PLATFORM_TO_AUDIT_UPLOAD_PROTOCOL = Value(11, "平台待审核融资还款协议")

  val PLATFORM_CHECK_UPLOAD_PROTOCOL_FAIL = Value(12, "平台打回融资还款协议")

  val BRIDGE_TO_WAIT_FINANCING= Value(13, "核心企业待发起融资申请")

  // 核心企业放弃上游业务
  val BRIDGE_REFUSE_BUS = Value(14, "核心企业放弃上游业务")

  // 资金方放弃上游业务
  val CAPITAL_REFUSE_BUS = Value(15, "资金方放弃上游业务")

  implicit val businessStatusFormat = JsonFormatEnum[BusinessStatus](BusinessStatus)

}



