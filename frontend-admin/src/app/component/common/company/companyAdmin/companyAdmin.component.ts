import { Component , OnInit , Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { validationErrorMessageHandler, checkCaptchaVerify } from '../../../base-component/validators/validators';

import { getApiPath } from '../../../../service/apiPath';
import { currentUser } from '../../../../service/stroage'
import { UserService } from '../../../../service/user/user.service';
import { UserSecurityService } from '../../../../service/userSecurity/userSecurity.service'
import { subscribeErrorHandler } from '../../../../service/errorHandler'

@Component({
    selector: 'app-company-admin',
    templateUrl: './companyAdmin.component.html'
})
export class CompanyAdminComponent {
    companyAdminForm: FormGroup;
    identity: string;
    errMessage: string;

    userName: string = currentUser.username;
    phone: string = currentUser.phone;

    imageSrcCaptcha: String = '';
    countDownTimer: number = 0;
    stepOne: boolean = true;
    stepTwo: boolean = false;
    codeMessage: string;
    userList: object;
    disablePhoneInput: boolean = false;
    companyAdminFormErrors: any = {};
    companyAdminFormMessages: any = {
        'code'   : {
            'required'  : '验证码必填.',
            'minlength' : '验证码最少6位'
        },
        'verifyCode' : {
            'required'  : '验证码必填.',
            'minlength' : '验证码最少6位'
        },
        'adminName' : {
            'required'  : '请选择管理员'
        }
    };
    constructor (
        private fb: FormBuilder,
        public userService: UserService,
        private user: UserSecurityService
    ) {}
    ngOnInit(): void {
        this.companyAdminForm = this.fb.group(
            {
                'code'            : ['', [Validators.required, Validators.minLength(6)]],
                'verifyCode'      : ['', [Validators.required, Validators.minLength(6)]],
                'adminName'       : ['', [Validators.required]]
            }
        );

        this.companyAdminForm.valueChanges.subscribe(data => this.companyAdminFormErrors = validationErrorMessageHandler(this.companyAdminForm, this.companyAdminFormMessages));

    // 获取用户身份
        this.identity = localStorage.getItem('userIdentity');
        this.imageSrcCaptcha = getApiPath(this.identity).getCaptchaImage + '?' + new Date().getTime().toString();

    // 获取用户列表

        this.user.getAllEmployeesWithOutAdmin().subscribe(
            (res) => {
                if (res.success) {
                    this.userList = res.data;

                }
            },
            subscribeErrorHandler
        );

    }



    // 点击图片更换验证码
    changeCaptchaImage() {
        if (!this.disablePhoneInput) {
            this.companyAdminForm.patchValue({
                verifyCode : ''
            });

            this.imageSrcCaptcha = getApiPath(this.identity).getCaptchaImage + '?' + new Date().getTime().toString();
        }
    }

    // 获取短信验证码
    getSmsCode(event: string) {
        // 获取短信验证码
        const code: any = {
            'imgCode': this.companyAdminForm.get('verifyCode').value
        };

        this.user.sendOldAdminPhoneSms(code.imgCode).subscribe(
            (res) => {
                if (res.success) {
                    this.codeMessage = '';
                    this.leftTime();
                }else {
                    this.codeMessage = res.error.message
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

                this.companyAdminForm.patchValue({
                    verifyCode : ''
                });
                this.imageSrcCaptcha = getApiPath(this.identity).getCaptchaImage + '?' + new Date().getTime().toString();
            }

        }, 1000 );
    }

    // 保存

    save() {
        const data = {
            'newAdminId': this.companyAdminForm.get('adminName').value,
            'smsCode': this.companyAdminForm.get('code').value
        };

        this.user.changeAdmin(data.newAdminId, data.smsCode).subscribe(
            (res) => {
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
    // 重新登录
    reLogin() {

        localStorage.clear();
        if (this.identity === 'upstream') {
            window.location.href = '/web/upstream/login'

        }else if (this.identity === 'platform') {
            window.location.href = '/web/platform/login'

        }else if (this.identity === 'bridge') {
            window.location.href = '/web/bridge/login'

        }else if (this.identity === 'capital') {
            window.location.href = '/web/capital/login'

        }else if (this.identity === 'downstream') {
            window.location.href = '/web/downstream/login'
        }
    }

}
