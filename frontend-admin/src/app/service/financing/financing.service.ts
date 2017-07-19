/**
 * Created by jin on 6/16/17.
 */

/**
 * Created by jin on 6/13/17.
 */

import { Injectable } from '@angular/core';
import { Http,  Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { getApiPath } from '../apiPath';
import { currentUser, getUserIdentity } from '../stroage';
import { observableErrorHandler } from '../errorHandler';




@Injectable()
export class FinancingService {

    constructor(
        private http: Http
    ) {}

    financingStatus: any = [
        {id : 1, name: '融资申请已提交 等待平台审核'},
        {id : 2, name: '融资申请审核不通过, 等待核心企业修改融资信息'},
        {id : 3, name: '融资申请已审核 等待资金方审核'},
        {id : 4, name: '资金方审核不通过 等待核心企业修改融资信息'},
        {id : 5, name: '融资申请资金方已审核 等待资金方放款'},
        {id : 6, name: '资金方已放款 等待上游企业确认收款'},
        {id : 7, name: '上游企业已收到款,融资审核完成. 核心企业可继续确认收到下游企业回款'}
    ];

    repaymentStatus: any = [
        {id : 8, name: '核心企业已放款 等待资金方确认收到回款'},
        {id : 9, name: '资金方已收到回款 流程结束'}
    ];

    bridgeSubmitNewFinancing(postData : any): Observable< any > {

        return this.http.post(getApiPath().bridgeSubmitFinancing, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    getFinancingList(postData : any): Observable< any > {

        return this.http.post(getApiPath(getUserIdentity).getFinancingList,  postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    getFinancingDetail(id : any): Observable< any > {

        return this.http.get(getApiPath(getUserIdentity).getFinancingDetail + '/' + id)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }


    // 平台审核融资
    platformAuditFinancing(financingId: string, postData : any): Observable< any > {

        return this.http.post(getApiPath().platformAuditFinancing + '/' + financingId, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    // 资金方审核融资
    capitalAuditFinancing(financingId: string, postData : any): Observable< any > {

        return this.http.post(getApiPath().capitalAuditFinancing + '/' + financingId, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    // 资金方融资放款
    capitalFinancingLending( postData : any): Observable< any > {

        return this.http.post(getApiPath(getUserIdentity).capitalLendingFinancing, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }
    //资金方融资放款详情
    capitalFinancingLendingDetail( financingId: string ): Observable< any > {

        return this.http.get(getApiPath(getUserIdentity).getFinancingLending + '/' + financingId)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    // 上游确认融资流程收到资金方贷款
    upstreamConfirmFinancing( financingId: string ): Observable< any > {

        return this.http.get(getApiPath().upstreamConfirmFinancing + '/' + financingId)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }




    // 核心提交还款申请
    bridgeSubmitNewRepayment(postData : any): Observable< any > {

        // return Observable.of ({
        //     "businessId": "594279d94d21645521548cb4",
        //     "status": 0,
        //     "payAmount" : 100,
        //     "payDate" : "2017-06-30",
        //     "payCompanyName" : "资金方放款公司",
        //     "payMode" : 0,  //  0, "现汇"  , 1, "电汇"  , 2, "承兑汇票" , 3, "电汇+承兑汇票"
        //     "payAccount" : "资金方名称",
        //     "payCertificatePic" : {
        //         "filePath": "593df6414d216462942aa28b/07bfaee3-9957-50bd-f3a8-eb6a32a60dde.png",
        //         "fileName": "icon1.png",
        //         "fileExtName": "png"
        //     },
        //     "payCompanyBankProvince" : "北京市" ,
        //     "payCompanyBankCity" : "北京市" ,
        //     "payCompanyBankDistrict" : "北京市" ,
        //     "payCompanyBankName" : "付款银行名称",
        //     "recvCompanyName" : "收款公司",
        //     "recvBankProvince" : "北京市" ,
        //     "recvBankCity" :  "北京市" ,
        //     "recvBankDistrict" : "北京市" ,
        //     "recvBankName" : "收款银行名称",
        //     "recvBankAddr" : "收款银行地址",
        //     "recvAccount" : "收款银行账号",
        //     "recvAmount" : 100
        // })



        return this.http.post(getApiPath().bridgeSubmitRepayment, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    getRepaymentList(postData : any): Observable< any > {

        return this.http.post(getApiPath(getUserIdentity).getRepaymentList,  postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }



    getRepaymentDetail(repaymentId : string): Observable< any > {

        return this.http.get(getApiPath(getUserIdentity).getRepaymentDetail + '/' + repaymentId)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    // 资金方确认还款已收到
    capitalConfirmFinancingRepayment(repaymentId : string): Observable< any > {

        return this.http.get(getApiPath().capitalConfirmFinancingRepayment + '/' + repaymentId)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

}
