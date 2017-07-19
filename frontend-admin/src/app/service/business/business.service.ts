import { Injectable } from '@angular/core';
import { Http,  Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { getApiPath } from '../apiPath';
import { currentUser, getUserIdentity } from '../stroage';
import { observableErrorHandler, removeEmptyProperty } from '../errorHandler';



@Injectable()
export class BusinessService {

    constructor(
        private http: Http
    ) {}

    getCompaniesBySystemName(systemName: string): Observable< any > {

        const getParam = {
            search : {
                systemName : systemName
            }
        }

        if ( systemName === 'downstream') {
            return this.http.get(getApiPath().dictionaryAllDSCompanies)
                .map((res: Response) => {
                    const body = res.json();
                    return body.data || [];
                })
                .catch(observableErrorHandler);
        } else {
            return this.http.get(getApiPath().dictionaryCompaniesBySystemName, getParam)
                .map((res: Response) => {
                    const body = res.json();
                    return body.data || [];
                })
                .catch(observableErrorHandler);
        }

    }

    getProvinceList(): Observable< any > {

        return this.http.get('/static/assets/province.json')
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }



    getBusinessQuery(data: any): Observable< any > {

        return this.http.post(getApiPath(getUserIdentity).getBusinessQuery, data)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }
    getBusinessDetail(businessId: string): Observable< any > {

        return this.http.get(getApiPath(getUserIdentity).getBusinessDetail + '/' + businessId)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }
    getBusinessAuditList(businessId: string): Observable< any > {

        return this.http.get(getApiPath(getUserIdentity).getBusinessAuditList + '/' + businessId)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }


    upstreamSaveBusiness(businessApplicationInfo : any): Observable< any > {

        return this.http.post(getApiPath().upstreamSaveBusiness, removeEmptyProperty(businessApplicationInfo))
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    upstreamSubmitBusiness(businessApplicationInfo : any): Observable< any > {

        return this.http.post(getApiPath().upstreamSubmitBusiness, removeEmptyProperty(businessApplicationInfo))
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }





    // 核心企业审核业务
    bridgeAuditBusinessUpstream(businessId: string, checkResult : number, auditOpinion : string): Observable< any > {

        return this.http.post(getApiPath().bridgeAuditBusinessUpstream + '/' + businessId, {checkResult : checkResult , opinion : auditOpinion})
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    bridgeSaveDownstreamBusiness(downstreamBusinessInfo : any): Observable< any > {

        return this.http.post(getApiPath().bridgeSaveDownstreamBusiness, removeEmptyProperty(downstreamBusinessInfo))
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    bridgeSubmitDownstreamBusiness(downstreamBusinessInfo : any): Observable< any > {

        return this.http.post(getApiPath().bridgeSubmitDownstreamBusiness, removeEmptyProperty(downstreamBusinessInfo))

            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    bridgeSaveFinancingProtocol(businessId: string, financingProtocolPic: any, repayProtocolPic: any): Observable< any > {

        return this.http.post(getApiPath().bridgeSaveFinancingProtocol, {businessId : businessId , financingProtocolPic: financingProtocolPic, repayProtocolPic: repayProtocolPic })
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    bridgeSubmitFinancingProtocol(businessId: string, financingProtocolPic: any, repayProtocolPic: any): Observable< any > {

        return this.http.post(getApiPath().bridgeSubmitFinancingProtocol, {businessId : businessId , financingProtocolPic: financingProtocolPic, repayProtocolPic: repayProtocolPic })
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }




    // 平台审核业务
    platformAuditBusinessUpstream(businessId: string, checkResult : number, auditOpinion : string): Observable< any > {

        return this.http.post(getApiPath().platformAuditBusinessUpstream + '/' + businessId, {checkResult : checkResult , opinion : auditOpinion})
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }
    platformAuditBusinessDownstream(businessId: string, checkResult : number, auditOpinion : string, auditFile: any): Observable< any > {

        return this.http.post(getApiPath().platformAuditBusinessDownstream + '/' + businessId, {checkResult : checkResult , opinion : auditOpinion, auditFile: auditFile })
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }
    platformAuditBusinessFinancingProtocol(businessId: string, checkResult : number, auditOpinion : string): Observable< any > {

        return this.http.post(getApiPath().platformAuditBusinessFinancingProtocol + '/' + businessId, {checkResult : checkResult , opinion : auditOpinion  })
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }


    // 资金方审核业务
    capitalAuditBusinessDownstream(businessId: string, checkResult : number, auditOpinion : string): Observable< any > {

        return this.http.post(getApiPath().capitalAuditBusinessDownstream + '/' + businessId, {checkResult : checkResult , opinion : auditOpinion })
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }





    // 核心提交还款申请
    bridgePostDownstreamRepayment(postData : any): Observable< any > {

        return this.http.post(getApiPath().bridgePostDownstreamRepayment, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    getDownstreamRepaymentList(postData : any): Observable< any > {

        return this.http.post(getApiPath(getUserIdentity).getDownstreamRepaymentList,  postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    getDownstreamRepaymentDetail(downstreamRepaymentId : string): Observable< any > {

        return this.http.get(getApiPath(getUserIdentity).getDownstreamRepaymentDetail + '/' + downstreamRepaymentId)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

}
