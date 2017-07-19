import { Injectable, Output, EventEmitter } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

import { currentUser } from './stroage'


class HttpResponse {

    success : boolean;
    error : {
        code : number,
        field : string,
        message : string
    };
    meta : {
        page : number,
        count : number,
        offset : number,
        total : number
    };
    data : any;

}




const observableErrorHandler = (error: Response | any) => {

    if (error && error.status === 401 ) {
        if (currentUser.userIdentity === 'upstream') {
            window.location.href = '/web/upstream/login'

        }else if (currentUser.userIdentity === 'platform') {
            window.location.href = '/web/platform/login'

        }else if (currentUser.userIdentity === 'bridge') {
            window.location.href = '/web/bridge/login'

        }else if (currentUser.userIdentity === 'capital') {
            window.location.href = '/web/capital/login'

        }else if (currentUser.userIdentity === 'downstream') {
            window.location.href = '/web/downstream/login'
        }else {
            window.location.href = '/web/upstream/login'
        }

    }else {
        if (error && error.status === 400) {
            console.error('Http 400 请求发生错误!! ', error);

        }else if (error && error.status === 404) {
            console.error('Http 404 请求发生错误!! ', error);

        }else if (error && error.status === 500) {
            console.error('Http 500 请求发生错误!! ', error);

        }else {
            console.error('Http 请求发生错误!! ', error);
        }


        try {
            const showError = error.json()
            if (error && error.status === 400) {
                alert(showError.error.message)
            }

            return Observable.throw(error.json());
        } catch (err) {
            return Observable.throw(error._body);
        }

    }

};



const subscribeErrorHandler = (error: any) => {
    console.error('Observable 发生错误!! ', error);
};





const removeEmptyProperty = ( source : any) => {

    const sourceTemp = JSON.parse(JSON.stringify(source))

    function removeEmptyProperty2 (sourceObject : any) {
        if ( typeof sourceObject === 'object' && sourceObject && !Array.isArray(sourceObject)) {
            for (const prop in sourceObject) {
                if (sourceObject.hasOwnProperty(prop)) {

                    if ( typeof sourceObject[prop] === 'object' &&  sourceObject[prop] && !Array.isArray(sourceObject[prop])) {

                        if (Object.keys(sourceObject[prop]).length > 0 ) {
                            removeEmptyProperty2 (sourceObject[prop])
                        }

                        if (Object.keys(sourceObject[prop]).length === 0 ) {
                            // console.log('propxxxx:', prop, sourceObject[prop])
                            delete sourceObject[prop]
                        }

                    }else if ( Array.isArray(sourceObject[prop]) && sourceObject[prop].length === 0 ) {
                        delete sourceObject[prop]

                    }else if ( !sourceObject[prop] && sourceObject[prop] !== 0 ) {
                        delete sourceObject[prop]
                    }
                }
            }
        }
    }

    removeEmptyProperty2(sourceTemp)

    return sourceTemp
}



export {HttpResponse, observableErrorHandler, subscribeErrorHandler, removeEmptyProperty}
