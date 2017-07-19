import { Injectable } from '@angular/core';
import { Http,  Response} from '@angular/http';


import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



import { getApiPath } from '../apiPath';
import { getUserIdentity, currentUser } from '../stroage';
import { observableErrorHandler } from '../errorHandler';



@Injectable()
export class UserSecurityService {

    private userBehaviorSubject : any = new BehaviorSubject({});

    constructor(
        private http: Http
    ) {}



    getUserInfoHttp(): Observable<any> {

        return this.http.get(getApiPath(getUserIdentity).userInfo)
            .map((res: Response) => {
                const body = res.json();
                currentUser.username = body.data.userName
                currentUser.companyId = body.data.companyId
                currentUser.createDate = body.data.createDate
                currentUser.disabled = body.data.disabled
                currentUser.loginName = body.data.loginName
                currentUser.phone = body.data.phone
                currentUser.role = body.data.role
                currentUser.systemId = body.data.systemId
                currentUser._id = body.data._id

                if (body.data.systemId === 1 ) { currentUser.userIdentity = 'bridge' }
                if (body.data.systemId === 2 ) { currentUser.userIdentity = 'capital' }
                if (body.data.systemId === 3 ) { currentUser.userIdentity = 'upstream' }
                if (body.data.systemId === 4 ) { currentUser.userIdentity = 'platform' }

                return body.data;
            })
            .catch(observableErrorHandler);
    }

    getUserInfo(): Observable<any> {
        return this.userBehaviorSubject.asObservable();
    }




    getOldPhoneSms(imgCode : string): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).getOldPhoneSmsCode + '?imgCode=' + imgCode)
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }

    validateOldPhoneSms(smsCode : string): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).validateOldPhoneSms + '?smsCode=' + smsCode)
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }

    getNewPhoneSms(imgCode : string, mobilePhone: string): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).getNewPhoneSmsCode + '?imgCode=' + imgCode + '&newPhone=' + mobilePhone)
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }

    updatePhone(smsCode : string, newPhone: string): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).updatePhone + '?smsCode=' + smsCode + '&newPhone=' + newPhone)
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }



    sendPasswordSms(imgCode : string): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).sendPasswordSms + '?imgCode=' + imgCode )
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }

    validateOldPwd(oldPassword : string): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).validateOldPwd + '?oldPassword=' + oldPassword )
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }

    changePassword(oldPassword : string, newPassword : string, smsCode : string): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).changePassword + '?oldPassword=' + oldPassword + '&newPassword=' + newPassword + '&smsCode=' + smsCode)
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }

    sendOldAdminPhoneSms(imgCode : string ): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).sendOldAdminPhoneSms + '?imgCode=' + imgCode)
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }
    getAllEmployeesWithOutAdmin(): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).getAllEmployeesWithOutAdmin)
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }
    changeAdmin(newAdminId: string, smsCode: string): Observable<any> {
        return this.http.get(getApiPath(getUserIdentity).changeAdmin + '?newAdminId=' + newAdminId + '&smsCode=' + smsCode )
            .map((res: Response) => {
                const body = res.json();
                return body || {};
            })
            .catch(observableErrorHandler);
    }


}
