package com.yimei.jfc.flow

import java.util.Date

import com.yimei.jfc.core.{ApiSupport, CustomerJsonSupport, MongoCommon, MongoUpStreamBusiness}
import com.yimei.jfc.dict.AuditType
import com.yimei.jfc.dict.AuditType.AuditType

/**
  * Created by hary on 2017/5/12.
  */
trait FlowModels extends ApiSupport with CustomerJsonSupport with MongoCommon with MongoUpStreamBusiness {


  case class BusinessSearchRequest(
                                    pager: Option[Pager],
                                    status: Option[Int],
                                    businessId: Option[String],
                                    bridgeCompanyId: Option[String],
                                    bridgeCompanyName: Option[String],
                                    upstreamCompanyId: Option[String],
                                    upstreamCompanyName: Option[String],
                                    capitalCompanyId: Option[String],
                                    capitalCompanyName: Option[String],
                                    contractAmount: Option[Double],
                                    beginDate: Option[Date],
                                    endDate: Option[Date]
                                  )

  implicit val BusinessSearchRequestFormat = jsonFormat12(BusinessSearchRequest)

  case class AuditResult(checkResult: AuditType, opinion: Option[String], auditFile: Option[List[FileDocument]]) {

    def isPass(): Boolean = {
      this.checkResult == AuditType.PASS
    }
  }

  implicit val AuditResultFormat = jsonFormat3(AuditResult)


  case class PlatformAuditFinancingResult(checkResult: AuditType,
                                          opinion: Option[String],
                                          auditFile: Option[List[FileDocument]],
                                          infoCollectChannel: Option[String] = None,
                                          dataDeviation: Option[String] = None
                                         )


  implicit val PlatformAuditFinancingFormat = jsonFormat5(PlatformAuditFinancingResult)

  case class DebtSearchRequest(
                                pager: Option[Pager],
                                businessId: Option[String],
                                upstreamCompanyName: Option[String],
                                status: Option[Int],
                                capitalRaiseId: Option[String],
                                beginDate: Option[Date],
                                endDate: Option[Date]
                              )

  implicit val DebtSearchRequestFormat = jsonFormat7(DebtSearchRequest)

  case class FinancingDetailResponse(capitalRaise: CapitalRaiseDocument, debtList: Seq[DebtDocument])

  implicit val FinancingDetailFormat = jsonFormat2(FinancingDetailResponse)

}

