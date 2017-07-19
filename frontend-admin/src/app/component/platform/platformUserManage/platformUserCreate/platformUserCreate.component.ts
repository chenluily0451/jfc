import { Component , OnInit , Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


import { getApiPath } from '../../../../service/apiPath';
import { CompanyService } from '../../../../service/companyInfo/company.service'
import { subscribeErrorHandler } from '../../../../service/errorHandler'
import { validationErrorMessageHandler } from '../../../base-component/validators/validators';

@Component({
    selector: 'platformUser-create',
    templateUrl: 'platformUserCreate.component.html'
})
export class PlatformUserCreateComponent implements OnInit {
    identity: string;
    employees: object;
    username : string;
    phone : string;
    errMessage: string;
    stepOne: boolean = true;
    stepTwo: boolean = false;
    platformCreateUsersForm : FormGroup;
    platformCreateUsersFormErrors: any = {
        'loginName' : '',
        'userName': '',
        'mobile' : '',
        'userType' : ''
    };
    platformCreateUsersFormMessages: any = {
        'loginName' : {
            'required'  : '姓名必填.',
            'maxlength' : '姓名最多6个字'
        },
        'mobile' : {
            'required'  : '手机号必填.',
            'pattern': '手机号请输入正确的格式'
        },
        'userName'   : {
            'required'  : '用户名必填.',
            'maxlength' : '用户名最多12个字'
        },
        'userType' : {
            'required'  : '请选择用户类型'
        }
    };

    constructor (
        private cs: CompanyService,
        private fb: FormBuilder
    ) {}
    ngOnInit(): void {

        // 获取用户身份

        this.identity = localStorage.getItem('userIdentity');

        const mobilePattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        this.platformCreateUsersForm = this.fb.group(
            {
                'loginName' : ['', [Validators.required, Validators.maxLength(6)]],
                'mobile'    : ['', [Validators.required, Validators.pattern(mobilePattern)]],
                'userName'  : ['', [Validators.required, Validators.maxLength(12)]],
                'userType'  : ['', [Validators.required]]
            }
        );

        this.platformCreateUsersForm.valueChanges.subscribe(data => this.platformCreateUsersFormErrors = validationErrorMessageHandler(this.platformCreateUsersForm, this.platformCreateUsersFormMessages));
    }
    create() {
        const data = {
            loginName : this.platformCreateUsersForm.get('loginName').value,
            userName : this.platformCreateUsersForm.get('userName').value,
            phone : this.platformCreateUsersForm.get('mobile').value,
            dept : '',
            userType : this.platformCreateUsersForm.get('userType').value * 1
        };

        this.cs.createEmployee(data).subscribe(
            (res) => {
                if (res.success) {
                    this.stepOne = false;
                    this.stepTwo = true;
                }else {
                    this.errMessage = res.error.message
                }
            },
            subscribeErrorHandler
        );
    }

}
