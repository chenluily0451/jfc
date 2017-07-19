package com.yimei.jfc.dict


/**
  * Created by hary on 2017/5/17.
  */
object FinanceStatus extends Enumeration {

  type FinanceStatus = Value


  val PLATFORM_TO_AUDIT_FINANCING = Value(1, "平台待审核融资申请")

  val PLATFORM_CHECK_FINANCING_FAIL = Value(2, "平台打回融资申请")

  val CAPITAL_TO_AUDIT_FINANCING = Value(3, "资金方待审核融资申请")

  val CAPITAL_CHECK_FINANCING_FAIL = Value(4, "资金方打回融资申请")

  val CAPITAL_CHECK_FINANCING_SUCCESS = Value(5, "资金方通过融资申请")

  val CAPITAL_LENDING = Value(6, "资金方已放款")

  val UPSTREAM_RECEIPT_MONEY = Value(7, "上游已确认收到款")



  // 业务进入还款流程

  val BRIDGE_REPAYMENT= Value(8, "核心企业已回款到资金方")

  val CAPITAL_RECEIVE_MONEY = Value(9, "资金方收到回款")

  implicit val financeStatusFormat = JsonFormatEnum[FinanceStatus](FinanceStatus)
}
