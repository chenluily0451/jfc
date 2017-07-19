import { Component , OnInit , Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { validationErrorMessageHandler } from '../../../base-component/validators/validators';
import { getApiPath } from '../../../../service/apiPath';
import { CompanyService } from '../../../../service/companyInfo/company.service'
import { subscribeErrorHandler } from '../../../../service/errorHandler'
import { UserSecurityService } from '../../../../service/userSecurity/userSecurity.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-staff-edit',
    templateUrl: './staffEdit.component.html'
})
export class StaffEditComponent implements OnInit {

    staffEditForm : FormGroup;
    errMessage: string;
    loginName: string;
    mobile: string;
    department: string;
    userType: number;
    userName: string;
    stepOne: boolean = true;
    stepTwo: boolean = false;
    stepThree: boolean = false;
    id: string;
    identity: string ;
    staffEditFormErrors: any = {
        'loginName': '',
        'mobile' : '',
        'department' : '',
        'userType' : ''
    };
    staffEditFormMessages: any = {
        'loginName'   : {
            'required'  : '姓名必填.',
            'maxlength' : '姓名最多12个字'
        },
        'mobile' : {
            'required'  : '手机号必填.',
            'pattern': '手机号请输入正确的格式'
        },
        'department' : {
            'required'  : '部门必填.',
            'maxlength' : '部门最多12个字'
        },
        'userType' : {
            'required'  : '请选择用户类型.'
        }
    };

    constructor(
        private fb: FormBuilder,
        private userSecurity: UserSecurityService,
        private companyService: CompanyService,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private router: Router
    ) {}

    ngOnInit(): void {
        const userId = this.route.snapshot.params.userId;
        const mobilePattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        // 获取用户身份

        this.identity = localStorage.getItem('userIdentity');
        this.staffEditForm = this.fb.group(
            {
                'loginName' : ['', [Validators.required, Validators.maxLength(12)]],
                'mobile'     : ['', [Validators.required,  Validators.pattern(mobilePattern)]],
                'department': ['', [Validators.required, Validators.maxLength(12)]],
                'userType'  : ['', [Validators.required]]
            }
        )
        this.staffEditForm.valueChanges.subscribe(data => this.staffEditFormErrors = validationErrorMessageHandler(this.staffEditForm, this.staffEditFormMessages));

        // 加载用户信息


        this.companyService.getEmployeesInfo(userId).subscribe(
            (res) => {
                if (res.success) {
                    this.loginName = res.data.loginName;
                    this.userName = res.data.userName;
                    this.mobile = res.data.phone;
                    this.department = res.data.dept;
                    this.userType = res.data.role;
                    this.id = res.data._id
                }
            },
            subscribeErrorHandler
        )
    }

    save() {
        const id = this.id ;
        const data = {
            loginName: this.staffEditForm.get('loginName').value,
            phone: this.staffEditForm.get('mobile').value,
            dept: this.staffEditForm.get('department').value,
            userType: +this.staffEditForm.get('userType').value,
            userName: this.userName
        }
        this.companyService.editEmployees(id, data).subscribe(
            (res) => {
                if (res.success) {
                    this.stepOne = false;
                    this.stepTwo = true;
                    setTimeout(() => {this.router.navigate(['/staff'])}, 500)
                }else {
                    this.errMessage = res.error.message;
                }
            },
            subscribeErrorHandler
        )
    }

    reset(content: any) {
        this.modalService.open(content);
    }
    resetPasswordSms(content: any) {
        const id = this.id ;
        this.companyService.resetEmployeePwd(id).subscribe(
            (res) => {
                if (res.success) {
                    this.stepOne = false;
                    this.stepTwo = false;
                    this.stepThree = true;
                    setTimeout(() => {this.router.navigate(['/staff'])}, 500)
                }else {
                    this.errMessage = res.error.message;
                }
            },
            subscribeErrorHandler
        )
    }

}
