import { Component, OnInit, Input, Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { UserService } from '../../../service/user/user.service';
import { subscribeErrorHandler } from '../../../service/errorHandler';
import { validationErrorMessageHandler } from '../../base-component/validators/validators';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    errMessage: string = '';

    constructor(
        private fb: FormBuilder,
        public userService: UserService,
        @Inject('UserIdentity') public userIdentity: string

    ) {
        // console.log(this.userIdentity)
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            'username' : ['', [Validators.required, Validators.minLength(8)]],
            'password' : ['', [Validators.required, Validators.minLength(8)]]
        });

        this.loginForm.valueChanges.subscribe(data => {
            this.loginFormErrors = validationErrorMessageHandler(this.loginForm, this.loginFormMessages)
        });
    }

    loginFormErrors: any = {};
    loginFormMessages: any = {

        'username' : {
            'required'  : '用户名必填',
            'minlength' : '用户名最少8位'
        },
        'password' : {
            'required'  : '密码必填',
            'minlength' : '密码最少8位'
        }
    };


    pwdChange() {
        this.errMessage = '';
    }


    login () {
        const user = {
            'username':  this.loginForm.get('username').value,
            'password':  this.loginForm.get('password').value
        };

        if (!this.loginForm.valid) {
            this.loginFormErrors = validationErrorMessageHandler(this.loginForm, this.loginFormMessages, true);
            return false;
        }

        this.userService.login(this.userIdentity, user).subscribe((res: any) => {
            if (res.success) {

                if (this.userIdentity === 'upstream') {
                    window.location.href = '/web/upstream/index'

                }else if (this.userIdentity === 'platform') {
                    window.location.href = '/web/platform/index'

                }else if (this.userIdentity === 'bridge') {
                    window.location.href = '/web/bridge/index'

                }else if (this.userIdentity === 'capital') {
                    window.location.href = '/web/capital/index'

                }else if (this.userIdentity === 'downstream') {
                    window.location.href = '/web/downstream/index'
                }

            }else {
                this.errMessage = res.error.message;
            }

        },
            subscribeErrorHandler
        )
    }
}
