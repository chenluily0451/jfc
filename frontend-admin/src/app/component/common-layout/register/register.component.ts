import { Component , OnInit , Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { validationErrorMessageHandler, matchPasswordWithConfirmPassword, checkMobileUnique, checkUsernameUnique, checkCaptchaVerify } from '../../base-component/validators/validators';


import { getApiPath } from '../../../service/apiPath';
import { UserService } from '../../../service/user/user.service';
import { subscribeErrorHandler } from '../../../service/errorHandler'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    regForm: FormGroup;
    checkValue: boolean = false;
    disablePhoneInput: boolean = false;
    countDownTimer: number = 0;

    stepOne: boolean = true;
    stepTwo: boolean = false;
    identityTxt: string = '';
    registerAgreementModal: boolean = false;
    secretAgreementModal: boolean = false;
    modalWrap: boolean = false;
    regFormErrors: any = {};
    regFormMessages: any = {
        'userName' : {
            'required'  : '姓名必填.'
        },
        'mobile' : {
            'required'  : '手机号必填.',
            'pattern': '手机号请输入正确的格式'
        },
        'code'   : {
            'required'  : '验证码必填.',
            'minlength' : '验证码最少6位'
        },
        'loginName'   : {
            'required'  : '用户名必填.',
            'minlength' : '用户名最少8位'
        },
        'password'   : {
            'required'  : '密码必填.',
            'minlength' : '密码最少8位',
            'pattern' : '请输入字母、数字或者英文符号',
            'mismatchedPasswords': '密码不一致'
        },
        'confirmPassword' : {
            'required'  : '确认密码必填.',
            'mismatchedPasswords': '密码不一致'
        },
        'verifyCode' : {
            'required'  : '验证码必填.',
            'minlength' : '验证码最少6位'
        }
    };
    errMessage: String = '';
    imageSrcCaptcha: String = '';

  constructor (
      private fb: FormBuilder,
      public userService: UserService,
      @Inject('UserIdentity') public userIdentity: string

     ) {}


    ngOnInit(): void {
        const mobilePattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        const passwordPattern =  /^[0-9a-zA-Z]+$/;
        this.regForm = this.fb.group(
            {
                'userName'        : ['', [Validators.required]],
                'mobile'          : ['', [Validators.required, Validators.pattern(mobilePattern)], [checkMobileUnique(this.userService, this.userIdentity)]],
                'code'            : ['', [Validators.required, Validators.minLength(6)]],
                'loginName'       : ['', [Validators.required, Validators.minLength(8)], [checkUsernameUnique(this.userService, this.userIdentity)]],
                'password'        : ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordPattern)]],
                'confirmPassword' : ['', [Validators.required]],
                'verifyCode'      : ['', [Validators.required, Validators.minLength(6)], [checkCaptchaVerify(this.userService, this.userIdentity)]]
            }, { validator: matchPasswordWithConfirmPassword('password', 'confirmPassword')}
        );

        this.regForm.valueChanges.subscribe(data => this.regFormErrors = validationErrorMessageHandler(this.regForm, this.regFormMessages));

        // 身份判断
        if (this.userIdentity === 'upstream') {
            this.identityTxt = '上游用户'

        }else if (this.userIdentity === 'platform') {
            this.identityTxt = '平台用户'

        }else if (this.userIdentity === 'bridge') {
            this.identityTxt = '核心用户'

        }else if (this.userIdentity === 'capital') {
            this.identityTxt = '资金方'

        }else if (this.userIdentity === 'downstream') {
            this.identityTxt = '下游用户'

        }else {
            this.identityTxt = ''
        }

        this.imageSrcCaptcha = getApiPath(this.userIdentity).getCaptchaImage


    }



    finishReg() {
        const newUser = {
            'userName'  : this.regForm.get('userName').value,
            'loginName' : this.regForm.get('loginName').value,
            'password'  : this.regForm.get('password').value,
            'phone'     : this.regForm.get('mobile').value,
            'smsCode'   : this.regForm.get('code').value
        };

        this.userService.register(this.userIdentity, newUser).subscribe( (res: any) => {

            if (res.success) {
                this.stepOne = false;
                this.stepTwo = true;
                this.errMessage = ''

            }else {
                this.errMessage = res.error.message;
                return false;
            }
        },
            subscribeErrorHandler
        );
    }

    // 点击图片更换验证码
    changeCaptchaImage() {

        if (!this.disablePhoneInput) {
            this.regForm.patchValue({
                verifyCode : ''
            });
            this.imageSrcCaptcha = getApiPath(this.userIdentity).getCaptchaImage + '?' + new Date().getTime().toString();
        }
    }

    // 获取短信验证码
    getSmsCode(event: any) {
        this.countDownTimer = 120;
        let intervalTimer;
        this.disablePhoneInput = true;

        intervalTimer = setInterval( () => {
            this.countDownTimer = this.countDownTimer - 1;

            if ( this.countDownTimer === 0) {
                clearInterval(intervalTimer);
                this.disablePhoneInput = false;

                this.regForm.patchValue({
                    verifyCode : ''
                });
                this.imageSrcCaptcha = getApiPath(this.userIdentity).getCaptchaImage + '?' + new Date().getTime().toString();
            }

        }, 1000 );

        // 获取短信验证码
        const sms = {
            'mobilePhone': this.regForm.get('mobile').value,
            'imgCode': this.regForm.get('verifyCode').value
        };
        this.userService.getSmsCode(this.userIdentity, sms.mobilePhone, sms.imgCode).subscribe(res => {console.log(res)}, subscribeErrorHandler);

    }

    checkedOption(event: any) {
        this.checkValue = !this.checkValue;
    }


    redirectLogin (event: any) {

        if (this.userIdentity === 'upstream') {
            window.location.href = '/web/upstream/login'

        }else if (this.userIdentity === 'platform') {
            window.location.href = '/web/platform/login'

        }else if (this.userIdentity === 'bridge') {
            window.location.href = '/web/bridge/login'

        }else if (this.userIdentity === 'capital') {
            window.location.href = '/web/capital/login'

        }else if (this.userIdentity === 'downstream') {
            window.location.href = '/web/downstream/login'
        }


    }

    // 协议展示
    showAgreement (agreement: string) {
        this.modalWrap = true;
        if (agreement === 'register') {
            this.registerAgreementModal = true
        }
        if (agreement === 'secret') {
            this.secretAgreementModal = true
        }
        if (agreement === 'modal') {
            this.secretAgreementModal = false;
            this.registerAgreementModal = false;
            this.modalWrap = false;
        }
    }

}
