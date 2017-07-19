import { Injectable } from '@angular/core';
import { Http,  Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { getApiPath } from '../apiPath';
import { currentUser, getUserIdentity } from '../stroage';
import { observableErrorHandler } from '../errorHandler';


@Injectable()
export class CompanyService {

    constructor(
        private http: Http
    ) {}

    dictionarySystemType(): Observable< any > {

        return this.http.get(getApiPath().dictionarySystemType)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    dictionaryCompanyType(): Observable< any > {

        return this.http.get(getApiPath().dictionaryCompanyType)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    dictionaryCompanyInfoStatus(): Observable< any > {

        return this.http.get(getApiPath().dictionaryCompanyInfoStatus)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    dictionarySexType(): Observable< any > {

        return this.http.get(getApiPath().dictionarySexType)
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }
    dictionaryTrafficMode(): Observable< any > {

        return this.http.get(getApiPath().dictionaryTrafficMode)
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }

    dictionaryPayMode(): Observable< any > {

        return this.http.get(getApiPath().dictionaryPayMode)
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }

    dictionaryAllDSCompanies(): Observable< any > {

        return this.http.get(getApiPath().dictionaryAllDSCompanies)
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }

    // For Upstream
    getUpstreamCompanyInfo(): Observable< any > {
        return this.http.get(getApiPath(getUserIdentity).getCompanyInfo)
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }

    saveUpstreamCompanyInfo(companyInfo : any): Observable< any > {
        return this.http.post(getApiPath(getUserIdentity).saveCompanyInfo, companyInfo)
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }

    auditUpstreamCompanyInfo(companyInfo : any): Observable< any > {

        return this.http.post(getApiPath(getUserIdentity).auditCompanyInfo, companyInfo)
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }


    // For platform
    getCompanyList(query : any): Observable< any > {

        // return Observable.from ([
        //     {_id : 11, companyName : 'aaaa'},
        //     {_id : 22, companyName : 'bbbb'},
        //     {_id : 33, companyName : 'cccc'}
        // ])
        return this.http.get(getApiPath().platformCompanyList, { search : query})
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }

    getCompanyDetail(id : string): Observable<any> {

        // return Observable.of ({_id : 11, companyName : 'aaaa'})

        return this.http.get(getApiPath().platformCompanyInfo + '/' + id)
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }


    platformCompanyAudit(audit: number, companyId : string, comment: string ): Observable< any > {

        let path = '';
        if (audit === 10 ) {path = 'auditSuccess'}
        if (audit === 0 ) {path = 'auditFailEnd'}
        if (audit === 1 ) {path = 'auditFail'}

        const getParam = {
            search : {
                auditContent : comment
            }
        }

        return this.http.get(getApiPath(getUserIdentity).platformCompanyAudit + '/' + path + '/' + companyId, getParam)
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }

    getCompanyInvestigation(id : string): Observable<any> {

        return this.http.get(getApiPath().platformCompanyInvestigation + '/' + id)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    saveLicenseSurveyDocument(id : string, postData: any): Observable<any> {

        return this.http.post(getApiPath().platformCompanySaveLicenseSurveyDocument + '/' + id, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    saveBusinessRegisterSurvey(id : string, postData: any): Observable<any> {

        return this.http.post(getApiPath().platformCompanySaveBusinessRegisterSurvey + '/' + id, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    saveShareHolderSurvey(id : string, postData: any): Observable<any> {

        return this.http.post(getApiPath().platformCompanySaveShareHolderSurvey + '/' + id, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    saveControlPerson(id : string, postData: any): Observable<any> {

        return this.http.post(getApiPath().platformCompanySaveControlPerson + '/' + id, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    saveFieldInvestigationSurvey(id : string, postData: any): Observable<any> {

        return this.http.post(getApiPath().platformCompanySaveFieldInvestigationSurvey + '/' + id, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    saveCooperationSurvey(id : string, postData: any): Observable<any> {

        return this.http.post(getApiPath().platformCompanySaveCooperationSurvey + '/' + id, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    // 员工管理

    getEmployees(data: any): Observable< any > {

        return this.http.get(getApiPath(getUserIdentity).getEmployees, {search: data})
            .map((res: Response) => {
                const body = res.json();
                return body.data || {};
            })
            .catch(observableErrorHandler);
    }


    // 创建员工

    createEmployee(postData : any): Observable<any> {

        return this.http.post(getApiPath(getUserIdentity).createEmployee, postData)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    // 员工信息详情

    getEmployeesInfo(id: string): Observable<any> {

        return this.http.get(getApiPath(getUserIdentity).getEmployeesInfo + '/' + id)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    // 编辑员工信息
    editEmployees(id: string, data: any): Observable<any> {

        return this.http.post(getApiPath(getUserIdentity).editEmployees + id, data)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    // 重置员工密码
    resetEmployeePwd(id: string): Observable<any> {

        return this.http.get(getApiPath(getUserIdentity).resetEmployeePwd + id)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    // 停用员工账号
    disabledAccount(id: string): Observable<any> {

        return this.http.get(getApiPath(getUserIdentity).disabledAccount + id)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    // 启用员工账号
    enabledAccount(id: string): Observable<any> {

        return this.http.get(getApiPath(getUserIdentity).enabledAccount + id)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }
}

