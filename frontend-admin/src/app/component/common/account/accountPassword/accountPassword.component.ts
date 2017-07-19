import { Component , OnInit} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';

import { currentUser , getUserIdentity } from '../../../../service/stroage'
import { getApiPath } from '../../../../service/apiPath';
import { UserSecurityService } from '../../../../service/userSecurity/userSecurity.service'
import { subscribeErrorHandler } from '../../../../service/errorHandler';
import { validationErrorMessageHandler, matchPasswordWithConfirmPassword, checkOldPassword } from '../../../base-component/validators/validators';


@Component({
    selector: 'account-password',
    templateUrl: 'accountPassword.component.html'
})
export class AccountPasswordComponent implements OnInit {
    modifyPasswordForm : FormGroup;

    errMessage: string;
    imageSrcCaptcha: String = '';
    countDownTimer: number = 0;
    stepOne: boolean = true;
    stepTwo: boolean = false;
    modifyPasswordMessage: string;
    disablePhoneInput: boolean = false;

    modifyPasswordFormErrors: any = {};
    modifyPasswordFormMessages: any = {

        'verifyCode' : {
            'required'  : '图片验证码必填.',
            'minlength' : '图片验证码最少6位'
        },
        'code'   : {
            'required'  : '短信验证码必填.',
            'minlength' : '短信验证码最少6位'
        },
        'oldPassword'   : {
            'required'  : '原密码必填.',
            'minlength' : '原密码最少8位'

        },
        'newPassword'   : {
            'required'  : '新密码必填.',
            'minlength' : '新密码最少8位',
            'pattern' : '请输入字母、数字或者英文符号'
        },
        'confirmPassword'   : {
        }
    };
    constructor(
        private fb: FormBuilder,
        private user: UserSecurityService
    ) {}

    ngOnInit(): void {
        const passwordPattern =  /^[0-9a-zA-Z]+$/;
        this.modifyPasswordForm = this.fb.group(
            {
                'code'            : ['', [Validators.required, Validators.minLength(6)]],
                'verifyCode'      : ['', [Validators.required, Validators.minLength(6)]],
                'oldPassword'      : ['', [Validators.required, Validators.minLength(8)], [checkOldPassword(this.user)]],
                'newPassword'      : ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordPattern)]],
                'confirmPassword'      : ['']
            }, { validator: matchPasswordWithConfirmPassword('newPassword', 'confirmPassword')}
        );


        this.modifyPasswordForm.valueChanges.subscribe(data => this.modifyPasswordFormErrors = validationErrorMessageHandler(this.modifyPasswordForm, this.modifyPasswordFormMessages));

        // 获取用户身份
        this.imageSrcCaptcha = getApiPath(getUserIdentity).getCaptchaImage + '?' + new Date().getTime().toString()
    }



    // 点击图片更换验证码
    changeCaptchaImage() {
        if (!this.disablePhoneInput) {
            this.modifyPasswordForm.patchValue({
                verifyCode : ''
            });

            this.imageSrcCaptcha = getApiPath(getUserIdentity).getCaptchaImage + '?' + new Date().getTime().toString();
        }
    }

    // 获取短信验证码

    getSmsCode(event: string) {
        // 获取短信验证码
        const code: any = {
            'imgCode': this.modifyPasswordForm.get('verifyCode').value
        };

        this.user.sendPasswordSms(code.imgCode).subscribe(
            (res) => {
                if (res.success) {
                    this.modifyPasswordMessage = '';
                    this.leftTime();
                }else {
                    this.modifyPasswordMessage = res.error.message
                }
            },
            subscribeErrorHandler
        );
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

                this.modifyPasswordForm.patchValue({
                    verifyCode : ''
                });
                this.imageSrcCaptcha = getApiPath(getUserIdentity).getCaptchaImage + '?' + new Date().getTime().toString();
            }

        }, 1000 );
    }

    save() {
        const data = {
            'oldPassword': this.modifyPasswordForm.get('oldPassword').value,
            'newPassword': this.modifyPasswordForm.get('newPassword').value,
            'smsCode': this.modifyPasswordForm.get('code').value
        };

        this.user.changePassword(data.oldPassword, data.newPassword, data.smsCode).subscribe(
            (res) => {
                if (res.success) {
                    this.stepOne = false;
                    this.stepTwo = true;
                    this.errMessage = '';
                    setTimeout(function() {
                        localStorage.clear();
                        window.location.href = '/web/' + currentUser.userIdentity + '/login'
                    }, 1500)

                }else {
                    this.errMessage = res.error.message;
                    return false;
                }
            },
            subscribeErrorHandler
        );
    }
}
