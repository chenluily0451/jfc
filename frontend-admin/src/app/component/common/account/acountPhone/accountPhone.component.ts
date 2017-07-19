import { Component , OnInit} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';

import { getApiPath } from '../../../../service/apiPath';
import { currentUser , getUserIdentity } from '../../../../service/stroage'
import { UserService } from '../../../../service/user/user.service'
import { UserSecurityService } from '../../../../service/userSecurity/userSecurity.service'
import { Router } from '@angular/router';

import { validationErrorMessageHandler, checkCaptchaVerify, mobilePattern } from '../../../base-component/validators/validators';
import { subscribeErrorHandler } from '../../../../service/errorHandler'


@Component({
    selector: 'account-phone',
    templateUrl: 'accountPhone.component.html'
})
export class AccountPhoneComponent implements OnInit {
    stepOneForm : FormGroup;
    stepTwoForm : FormGroup;
    currentUser : any = currentUser;
    disablePhoneInput: boolean = false;
    errMessage: string;
    getNewPhoneMessage: string;

    stepOne: boolean = true;
    stepTwo: boolean = false;
    stepThree: boolean = false;

    imageSrcCaptcha: String = '';
    countDownTimer: number = 0;

    stepOneFormErrors: any = {
        'code': '',
        'verifyCode' : ''
    };
    stepOneFormMessages: any = {
        'code'   : {
            'required'  : '验证码必填.',
            'minlength' : '验证码最少6位'
        },
        'verifyCode' : {
            'required'  : '验证码必填.',
            'minlength' : '验证码最少6位'
        }
    };
    stepTwoFormErrors: any = {
        'mobile': '',
        'code': '',
        'verifyCode' : ''
    };
    stepTwoFormMessages: any = {

        'mobile' : {
            'required'  : '手机号必填.',
            'pattern': '手机号请输入正确的格式'
        },
        'code'   : {
            'required'  : '短信验证码必填.',
            'minlength' : '短信验证码最少6位'
        },
        'verifyCode' : {
            'required'  : '图形验证码必填.',
            'minlength' : '图形验证码最少6位'
        }
    };
    constructor(
        private fb: FormBuilder,
        private userSecurity: UserSecurityService,
        private user: UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // 获取用户身份

        this.imageSrcCaptcha = getApiPath(getUserIdentity).getCaptchaImage + '?' + new Date().getTime().toString();

        this.stepOneForm = this.fb.group(
            {
                'code'            : ['', [Validators.required, Validators.minLength(6)]],
                'verifyCode'      : ['', [Validators.required, Validators.minLength(6)], [checkCaptchaVerify(this.user, currentUser.userIdentity)]]
            }
        );

        this.stepTwoForm = this.fb.group(
            {
                'mobile'          : ['', [Validators.required, Validators.pattern(mobilePattern)]],
                'code'            : ['', [Validators.required, Validators.minLength(6)]],
                'verifyCode'      : ['', [Validators.required, Validators.minLength(6)], [checkCaptchaVerify(this.user, currentUser.userIdentity)]]
            }
        );

        this.stepOneForm.valueChanges.subscribe(data => this.stepOneFormErrors = validationErrorMessageHandler(this.stepOneForm, this.stepOneFormMessages));
        this.stepTwoForm.valueChanges.subscribe(data => this.stepTwoFormErrors = validationErrorMessageHandler(this.stepTwoForm, this.stepTwoFormMessages));


    }




    // 点击图片更换验证码
    changeCaptchaImage() {
        if (!this.disablePhoneInput) {
            this.stepOneForm.patchValue({
                verifyCode : ''
            });
            this.imageSrcCaptcha = getApiPath(getUserIdentity).getCaptchaImage + '?' + new Date().getTime().toString();
        }
    }


    // 获取短信验证码
    getSmsCode(event: string) {
        // 获取短信验证码
        const sms: any = {
            'imgCode': this.stepOneForm.get('verifyCode').value
        };
        const newSms: any = {
            'mobile': this.stepTwoForm.get('mobile').value,
            'imgCode': this.stepTwoForm.get('verifyCode').value
        };
        if (event === 'old') {
            this.userSecurity.getOldPhoneSms(sms.imgCode).subscribe(
                (res) => {
                    if (res.success) {
                        this.leftTime();
                    }
                },
                subscribeErrorHandler
            );

        }else if (event === 'new') {
            this.userSecurity.getNewPhoneSms(newSms.imgCode, newSms.mobile).subscribe(
                (res) => {
                    if (res.success) {
                        this.getNewPhoneMessage = '';
                        this.leftTime();
                    }else {
                        this.getNewPhoneMessage = res.error.message
                    }
                },
                subscribeErrorHandler
            );
        }else {
            return ;
        }
    }


    // 倒计时
    leftTime() {
        this.countDownTimer = 120;
        let intervalTimer;
        this.disablePhoneInput = true;

        intervalTimer = setInterval( () => {
            if (this.countDownTimer !== 0) {
                this.countDownTimer = this.countDownTimer - 1;
            }else if ( this.countDownTimer === 0) {
                clearInterval(intervalTimer);
                this.disablePhoneInput = false;

                this.stepOneForm.patchValue({
                    verifyCode : ''
                });
                this.imageSrcCaptcha = getApiPath(getUserIdentity).getCaptchaImage + '?' + new Date().getTime().toString();
            }

        }, 1000 );
    }


    // 下一步
    nextStep() {
        const data = {
            'smsCode':   this.stepOneForm.get('code').value
        };
        this.userSecurity.validateOldPhoneSms(data.smsCode).subscribe(
            (res) => {
                if (res.success) {
                    this.stepOne = false;
                    this.stepTwo = true;
                    this.countDownTimer = 0;
                    this.imageSrcCaptcha = getApiPath(getUserIdentity).getCaptchaImage + '?' + new Date().getTime().toString();
                    this.errMessage = '';
                }else {

                    this.errMessage = res.error.message;
                    return false;
                }
            },
            subscribeErrorHandler
        );
    }

    // 更新成功
    updateComplete() {
        const data = {
            'smsCode':   this.stepTwoForm.get('code').value,
            'newPhone':  this.stepTwoForm.get('mobile').value
        };
        this.userSecurity.updatePhone(data.smsCode, data.newPhone).subscribe(
            (res) => {
                if (res.success) {
                    this.stepOne = false;
                    this.stepTwo = false;
                    this.stepThree = true;
                    currentUser.phone = this.stepTwoForm.get('mobile').value;
                    setTimeout(() => {this.router.navigate(['/accountHome'])}, 500)

                }else {
                    this.errMessage = res.error.message;
                    return false;
                }
            },
            subscribeErrorHandler
        );
    }
}

