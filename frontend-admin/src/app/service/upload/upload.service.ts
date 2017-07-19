import { Injectable } from '@angular/core';
import { Http,  Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { getApiPath } from '../apiPath';
import { observableErrorHandler } from '../errorHandler';
import { authMultipartOptions } from '../httpHeader';
import { aliOss } from '../stroage';



@Injectable()
export class UploadService {

    constructor(
        private http: Http
    ) {}

    getAliOssHttpRequest(): Observable< any > {

        return this.http.get(getApiPath().aliOssPolicy).map((res: Response) => {
            const body = res.json();

            if (body && body.data && body.data.host) {

                    aliOss.OSSAccessKeyId = body.data.OSSAccessKeyId
                    aliOss.callback       = body.data.callback
                    aliOss.dirName        = body.data.dirName
                    aliOss.host = body.data.host
                    aliOss.policy = body.data.policy
                    aliOss.signature = body.data.signature

            }

            return body.data || [];
        })
        .catch(observableErrorHandler);

    }



    guid1() {
        // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    guid2() {
        // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c: any) {
            const r = Math.random() * 16 | 0
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }


    upload(file: any) {
        const resultAliOssPolicy = aliOss;
        const host: string = resultAliOssPolicy.host

        const inputForm = new FormData();
        inputForm.append('key', resultAliOssPolicy.dirName + '/' + this.guid1() + '.' + file.name.split('.').pop());
        inputForm.append('policy', resultAliOssPolicy.policy);
        inputForm.append('callback', resultAliOssPolicy.callback);
        inputForm.append('signature', resultAliOssPolicy.signature);
        inputForm.append('OSSAccessKeyId', resultAliOssPolicy.OSSAccessKeyId);
        inputForm.append('x:realname', file.name);
        inputForm.append('file', file, file.name); //append the key name 'file' with the first file in the element


        return this.http.post(resultAliOssPolicy.host , inputForm, authMultipartOptions)
            .map( (response: Response) => {
                const body = response.json();
                if (body.success ) {
                    body.data.host = host;
                    return body.data;
                }else {
                    return body;
                }

            })
            .catch(observableErrorHandler);
    }

    // upload2(file: any) {
    //     let host: string = ''
    //     return this.getMessage().switchMap(
    //         (resultAliOssPolicy) => {
    //
    //             host = resultAliOssPolicy.host;
    //                 console.log(host)
    //             const inputForm = new FormData();
    //             inputForm.append('key', resultAliOssPolicy.dirName + '/' + this.guid1() + '.' + file.name.split('.').pop());
    //             inputForm.append('policy', resultAliOssPolicy.policy);
    //             inputForm.append('callback', resultAliOssPolicy.callback);
    //             inputForm.append('signature', resultAliOssPolicy.signature);
    //             inputForm.append('OSSAccessKeyId', resultAliOssPolicy.OSSAccessKeyId);
    //             inputForm.append('x:realname', file.name);
    //             inputForm.append('file', file, file.name); //append the key name 'file' with the first file in the element
    //
    //
    //             return this.http.post(resultAliOssPolicy.host , inputForm, authMultipartOptions)
    //         })
    //         .map( (response: Response) => {
    //             const body = response.json();
    //             if (body.success ) {
    //                 body.data.host = host;
    //                 return body.data;
    //             }else {
    //                 return body;
    //             }
    //
    //         })
    //         .catch(observableErrorHandler);
    // }

}
