import {FormGroup, AbstractControl, AsyncValidatorFn, ValidatorFn, Validators} from '@angular/forms';
import { subscribeErrorHandler } from '../../../service/errorHandler'

export const mobilePattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
export const mobilePattern2 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;


export const idCardpattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

// Validations Error Handler
export function validationErrorMessageHandler (form: FormGroup, errorMessage: Object, ignoreDirty : boolean = false) {

    const errorMessageContainer: Object = {};

    function getErrorMessage (formGroupSource: any, errorMessageInput: any, finalErrorMessage: any ) {
        for (const field in formGroupSource.controls) {
            if (formGroupSource.controls.hasOwnProperty(field)) {

                const control = formGroupSource.get(field);

                if (control.controls) {
                    finalErrorMessage[field] = {};
                    if (typeof errorMessageInput[field] === 'undefined') {
                        errorMessageInput[field] = {}
                    }
                    getErrorMessage(control, errorMessageInput[field], finalErrorMessage[field])

                } else {
                    finalErrorMessage[field] = '';

                    if (ignoreDirty) {
                        if (control && !control.valid) {
                            // console.log('control: ', field, control, control.errors)
                            for (const key in control.errors) {
                                if (control.errors.hasOwnProperty(key)) {

                                    if (typeof errorMessageInput[field] === 'undefined') {
                                        errorMessageInput[field] = {}
                                    }

                                    if (typeof errorMessageInput[field][key] === 'undefined') {
                                        errorMessageInput[field][key] = field + '.' + key + ' 字段没有定义错误信息'
                                    }
                                    finalErrorMessage[field] = errorMessageInput[field][key] + ' ';
                                    // finalErrorMessage[field] += errorMessageDisplay[field][key] + ' ';
                                }
                            }
                        }
                    }else {
                        if (control && control.dirty && !control.valid) {
                            // console.log('control: ', field, control, control.errors)
                            for (const key in control.errors) {
                                if (control.errors.hasOwnProperty(key)) {

                                    if (typeof errorMessageInput[field] === 'undefined') {
                                        errorMessageInput[field] = {}
                                    }

                                    if (typeof errorMessageInput[field][key] === 'undefined') {
                                        errorMessageInput[field][key] = field + '.' + key + ' 字段没有定义错误信息'
                                    }
                                    finalErrorMessage[field] = errorMessageInput[field][key] + ' ';
                                    // finalErrorMessage[field] += errorMessageDisplay[field][key] + ' ';
                                }
                            }
                        }
                    }

                }

            }
        }
    }

    getErrorMessage(form, errorMessage, errorMessageContainer)
    // console.log('message: ', errorMessageContainer)

    return errorMessageContainer;
}





export function isFloat(param: any = {}): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} => {

        const val: number = control.value;

        if (val ) {
            if (/^[0-9]+(.[0-9]{1,2})?$/.test(val.toString())) {

                if (!isNaN(param.min) && !isNaN(param.max)) {
                    return val < param.min || val > param.max ? {'number': true} : null;

                } else if (!isNaN(param.min)) {
                    return val < param.min ? {'number': true} : null;

                } else if (!isNaN(param.max)) {
                    return val > param.max ? {'number': true} : null;
                }

            } else {

                if (isNaN(val) || /\D/.test(val.toString())) {
                    return { 'number': true };

                } else if (!isNaN(param.min) && !isNaN(param.max)) {
                    return val < param.min || val > param.max ? {'number': true} : null;

                } else if (!isNaN(param.min)) {
                    return val < param.min ? {'number': true} : null;

                } else if (!isNaN(param.max)) {
                    return val > param.max ? {'number': true} : null;
                }
            }
        }

        return null;

    };
}

export function isNumber(param: any = {}): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} => {

        const val: number = control.value;

        if (val ) {

            if (isNaN(val)) {

                console.log('非数字', val);
                return { 'number': true };

            } else if (!isNaN(param.min) && !isNaN(param.max)) {
                return val < param.min || val > param.max ? {'number': true} : null;

            } else if (!isNaN(param.min)) {
                return val < param.min ? {'number': true} : null;

            } else if (!isNaN(param.max)) {
                return val > param.max ? {'number': true} : null;
            }
        }

        return null;

    };
}

// 验证是否是整数

export function isInt(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} => {

        const val: number = control.value;

        if (val ) {

            if (isNaN(val) || /^[1-9]\d*$/.test(val.toString())) {
                return null;
            }else {
                console.log('不是正整数');
                return { 'int': true };
            }
        }

        return null;

    };
}

// 最多两位小数

export function twoDecimal(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} => {

        const val: number = control.value;

        if (val ) {

            if (isNaN(val) || /^\d+(\.\d{0,2})?$/.test(val.toString())) {
                return null;
            }else {
                console.log('最多两位小数');
                return { 'twoDecimal': true };
            }
        }

        return null;

    };
}

// 最多一位小数

export function oneDecimal(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} => {

        const val: number = control.value;

        if (val ) {

            if (isNaN(val) || /^(\d+(\.\d)?)$/.test(val.toString())) {
                return null;
            }else {
                console.log('最多一位小数');
                return { 'oneDecimal': true };
            }
        }

        return null;

    };
}



// 判断后置大于前置



export function matchCoadIndex() {
    const coal =  [
              {start : 'NCVBegin', end: 'NCVEnd'},
              {start : 'ADVBegin', end: 'ADVEnd'},
              {start : 'ASHBegin', end: 'ASHEnd'},
              {start : 'RVBegin', end: 'RVEnd'},
              {start : 'TMBegin', end: 'TMEnd'},
              {start : 'RSBegin', end: 'RSEnd'},
              {start : 'IMBegin', end: 'IMEnd'},
              {start : 'ADSBegin', end: 'ADSEnd'},
              {start : 'FCBegin', end: 'FCEnd'},
              {start : 'GVBegin', end: 'GVEnd'},
              {start : 'YVBegin', end: 'YVEnd'},
              {start : 'AFTBegin', end: 'AFTEnd'},
              {start : 'HGIBegin', end: 'HGIEnd'},
              {start : 'CRCBegin', end: 'CRCEnd'}

          ]
    return (group: FormGroup): { [key: string]: any } => {

        let flag : boolean = false;
        const result = {};

        for (let i = 0; i < coal.length; i++) {
            const value1 = group.controls[coal[i].start];
            const value2 = group.controls[coal[i].end];

            if (+value1.value > +value2.value) {
                flag = true
                result[coal[i].end] = true;
            }

        }

        if (flag) {
            return result
        }else {
            return null
        }

    }
}


// FORM GROUP VALIDATORS

// 匹配密码与确认密码是否相符
export function matchPasswordWithConfirmPassword(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    const password = group.controls[passwordKey];
    const confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  };
}



// 验证手机号唯一
export function checkMobileUnique(checkMobileService: any, userIdentity: any): AsyncValidatorFn {

    return (control: AbstractControl): Promise<any> => {
        return new Promise((resolve, reject) => {
            checkMobileService.verifyMobile(userIdentity, control.value).subscribe( data => {
                if (data.success === true) {
                    console.log('手机号尚未注册');
                    resolve(null);

                } else {
                    console.log('手机号已经注册');
                    resolve({'mobileUnique' : true});
                }
            },
                subscribeErrorHandler
            );
        });
    }
}




// 验证用户名唯一
export function checkUsernameUnique(checkUsernameService: any, userIdentity: any ): AsyncValidatorFn {

    return (control: AbstractControl): Promise<any> => {
        return new Promise((resolve, reject) => {
            checkUsernameService.loginNameVerify(userIdentity, control.value).subscribe( data => {
                if (data.success === true) {
                    console.log('用户名尚未注册');
                    resolve(null);

                } else {
                    console.log('用户名已经注册');
                    resolve({'loginNameUnique' : true});
                }
            },
                subscribeErrorHandler
            )
        });
    }
}



// 图形验证码确认
export function checkCaptchaVerify(checkCaptchaService: any, userIdentity: any): AsyncValidatorFn {

    return (control: AbstractControl): Promise<any> => {
        return new Promise((resolve, reject) => {
            checkCaptchaService.verifyCaptcha(userIdentity, control.value).subscribe( (res) => {
                if (res.success === true && res.data === true ) {
                    console.log('图形验证码正确');
                    resolve(null);

                } else {
                    console.log('图形验证码错误');
                    resolve({'checkImgVerify' : true});
                }
            },
                subscribeErrorHandler
            );
        });
    }
}




// 修改密码时原密码校验
export function checkOldPassword(checkPasswordService: any): AsyncValidatorFn {

    return (control: AbstractControl): Promise<any> => {
        return new Promise((resolve, reject) => {
            checkPasswordService.validateOldPwd(control.value).subscribe( (res) => {
                if (res.success === true && res.data === true ) {
                    console.log('原密码正确');
                    resolve(null);

                } else {
                    console.log('原密码错误');
                    resolve({'validateOldPwd' : true});
                }
            },
                subscribeErrorHandler
            );
        });
    }
};

