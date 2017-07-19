import { Headers, RequestOptions, BaseRequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

import { getAccessToken } from './stroage'

const httpHeader = new Headers({'Content-Type': 'application/json'});
const authHeader = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + getAccessToken });

const authMultipartHeader = new Headers({ 'Authorization': 'Bearer ' + getAccessToken });

const reqOptions = new RequestOptions({ headers: httpHeader });
const authOptions = new RequestOptions({ headers: authHeader });
const authMultipartOptions = new RequestOptions({ headers: authMultipartHeader });





@Injectable()
class DefaultRequestOptions extends BaseRequestOptions {

    constructor() {
        super();

        // Set the default 'Content-Type' header
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('Authorization', 'Bearer ' + getAccessToken);
    }
}

const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };





export { reqOptions, authOptions, authMultipartOptions, requestOptionsProvider, DefaultRequestOptions}


