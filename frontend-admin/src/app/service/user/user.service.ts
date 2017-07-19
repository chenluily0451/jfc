import { Injectable } from '@angular/core';
import { Http,  Response} from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { getApiPath } from '../apiPath';
import { reqOptions } from '../httpHeader';
import { saveAccessToken, saveUserIdentity } from '../stroage';

import { observableErrorHandler } from '../errorHandler';


@Injectable()
export class UserService {
    constructor(
        private http: Http
    ) {}

    verifyCaptcha(identity: string, data: any): Observable< any > {

        return this.http.get(getApiPath(identity).verifyCaptcha + data)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    verifyMobile(identity : string, postData : any): Observable< any > {

        return this.http.post(getApiPath(identity).mobileVerify + postData, '', reqOptions)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    loginNameVerify(identity : string, postData : any): Observable< any > {

        return this.http.post(getApiPath(identity).loginNameVerify + postData, '', reqOptions)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    getSmsCode(identity: string, mobilePhone : string, imgCode : string): Observable< any > {

        return this.http.get(getApiPath(identity).smsCode +  '?mobilePhone=' + mobilePhone + '&imgCode=' + imgCode)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    register(identity : string, postData: any): Observable< any > {

        return this.http.post(getApiPath(identity).register, postData, reqOptions)
            .map((res: Response) => {
                const body = res.json();
                return body || [];
            })
            .catch(observableErrorHandler);
    }

    login(identity : string, postData: any): Observable< any > {

        return this.http.post(getApiPath(identity).login, postData, reqOptions)
            .map((res: Response) => {
                const body = res.json();
                saveAccessToken(body.data);
                saveUserIdentity(identity);
                return body || [];
            })
            .catch(observableErrorHandler);
    }
}

