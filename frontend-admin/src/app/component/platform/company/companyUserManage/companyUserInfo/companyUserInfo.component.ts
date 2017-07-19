import { Component , OnInit} from '@angular/core';
import { Validators , FormGroup , FormBuilder} from '@angular/forms';




@Component({
    selector: 'companyUser-Info',
    templateUrl: 'companyUserInfo.component.html'

})

export class CompanyUserInfoComponent implements OnInit{
    companyUserAddForm : FormGroup;

    constructor(private fb: FormBuilder){ }


    // model = new User('','ddd','ddd',1800000,'','');

    ngOnInit(): void {
        this.createForm();
    }

    createForm(){
        this.companyUserAddForm = this.fb.group({
            'companyType': ['', [
                Validators.required,
                Validators.maxLength(50),
            ]],
            'userName': ['', [
                Validators.required,
                Validators.maxLength(50),
            ]],
            'userPhone':['',[
                Validators.required,
            ]],
            'userPlatName':['',[
                Validators.required,
                Validators.maxLength(50),
            ]],
            'belongsCompany':['',[
                Validators.required,
                Validators.maxLength(50),
            ]]
        });
        this.companyUserAddForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }

    formErrors = {
        'companyType' : '',
        'userName':'',
        'userPhone':'',
        'userPlatName':'',
        'belongsCompany':'',

    };

    validationMessages = {
        'companyType':{
            'required':'请选择所属企业类型',
        },
        'userName':{
            'required':'请输入1-8个字段以内的姓名',
        },
        'userPhone':{
            'required':'请输入手机号',
            'pattern' :'请输入正确的手机号码'
        },
        'userPlatName':{
            'required':'请输入用户名',
        },
        'belongsCompany':{
            'required':'请选择所属企业',
        }
    };

    onValueChanged(data?:any){
        if (!this.companyUserAddForm) { return; }
        const form = this.companyUserAddForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                for (const key in control.errors) {

                    if (control.errors.hasOwnProperty(key)){
                        this.formErrors[field] = this.validationMessages[field][key];
                    }

                }

            }
        }


    }


}
