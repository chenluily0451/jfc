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
export class CreditorRightService {

    constructor(
        private http: Http
    ) {}



    saveNewCreditorRight(postData : any): Observable< any > {

        // return Observable.of ({
        //     "businessId": "594279d94d21645521548cb4",
        //     "status": 0,
        //     "quantity": [
        //         {
        //             "receiptsNo": "X1111",
        //             "receiptsDate": "2017-06-18",
        //             "carNo": "30001",
        //             "receiptAmount": 10,
        //             "receiptFile": [
        //                 {
        //                     "filePath": "593df6414d216462942aa28b/07bfaee3-9957-50bd-f3a8-eb6a32a60dde.png",
        //                     "fileName": "icon1.png",
        //                     "fileExtName": "png"
        //                 }
        //             ]
        //         }
        //     ],
        //     "quality": [
        //         {
        //             "receiptsNo": "X1112",
        //             "receiptsDate": "2017-06-18",
        //             "carAmount": 10,
        //             "calculateAmount": 10,
        //             "checkAmount": 10,
        //             "coalIndex": {
        //                 "coalType": "太原"
        //             },
        //             "receiptFile": [
        //                 {
        //                     "filePath": "593df6414d216462942aa28b/07bfaee3-9957-50bd-f3a8-eb6a32a60dde.png",
        //                     "fileName": "icon1.png",
        //                     "fileExtName": "png"
        //                 }
        //             ]
        //         }
        //     ]
        // })


        return this.http.post(getApiPath().bridgeSubmitCreditorRight, postData)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    // 获取某个业务下的债权列表
    getCreditorRightListByBusinessId(businessId : string, query : any): Observable< any > {

        return this.http.get(getApiPath(getUserIdentity).getCreditorRightsListByBusinessId + '/' + businessId, {search : query})
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    // 获取债权所有列表
    getCreditorRightList(query : any): Observable< any > {

        return this.http.post(getApiPath(getUserIdentity).getCreditorRightsList, query)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

    // 债权获取详情
    getCreditorRightDetail(id : string): Observable< any > {
        return this.http.get(getApiPath(getUserIdentity).getCreditorRightDetail + '/' + id)
            .map((res: Response) => {
                const body = res.json();
                return body.data || [];
            })
            .catch(observableErrorHandler);
    }

}
