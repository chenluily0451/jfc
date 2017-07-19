import { Component , OnInit , Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Router } from '@angular/router';
import { CompanyService } from '../../../../service/companyInfo/company.service'
import { subscribeErrorHandler } from '../../../../service/errorHandler'
import { validationErrorMessageHandler } from '../../../base-component/validators/validators';

@Component({
    selector: 'app-staff-create',
    templateUrl: './staffCreate.component.html'
})
export class StaffCreateComponent implements OnInit {
    identity: string;
    employees: object;
    username : string;
    phone : string;
    errMessage: string;
    stepOne: boolean = true;
    stepTwo: boolean = false;
    staffCreateForm : FormGroup;
    staffCreateFormErrors: any = {
        'loginName' : '',
        'userName': '',
        'mobile' : '',
        'department' : '',
        'userType' : ''
    };
    staffCreateFormMessages: any = {
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
        'department' : {
            'required'  : '部门必填.',
            'maxlength' : '部门最多12个字'
        },
        'userType' : {
            'required'  : '请选择用户类型'
        }
    };

    constructor (
        private cs: CompanyService,
        private fb: FormBuilder,
        private router: Router
    ) {}
    ngOnInit(): void {

        // 获取用户身份

        this.identity = localStorage.getItem('userIdentity');

        const mobilePattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        this.staffCreateForm = this.fb.group(
            {
                'loginName' : ['', [Validators.required, Validators.maxLength(6)]],
                'mobile'    : ['', [Validators.required, Validators.pattern(mobilePattern)]],
                'userName'  : ['', [Validators.required, Validators.maxLength(12)]],
                'department': ['', [Validators.required, Validators.maxLength(12)]],
                'userType'  : ['', [Validators.required]]
            }
        );

        this.staffCreateForm.valueChanges.subscribe(data => this.staffCreateFormErrors = validationErrorMessageHandler(this.staffCreateForm, this.staffCreateFormMessages));
    }
    create() {
        const data = {
            loginName : this.staffCreateForm.get('loginName').value,
            userName : this.staffCreateForm.get('userName').value,
            phone : this.staffCreateForm.get('mobile').value,
            dept : this.staffCreateForm.get('department').value,
            userType : this.staffCreateForm.get('userType').value * 1
        };

        this.cs.createEmployee(data).subscribe(
            (res) => {
                if (res.success) {
                    this.stepOne = false;
                    this.stepTwo = true;
                    setTimeout(() => {this.router.navigate(['/staff'])}, 500)
                }else {
                    this.errMessage = res.error.message
                }
            },
            subscribeErrorHandler
        );
    }

}
