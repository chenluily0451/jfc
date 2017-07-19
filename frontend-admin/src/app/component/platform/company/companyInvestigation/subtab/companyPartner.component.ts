import { Component , OnInit, Input} from '@angular/core';
import {FormArray, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { notifyOptions } from '../../../../../service/notify';
import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';

import { validationErrorMessageHandler, mobilePattern, idCardpattern } from '../../../../base-component/validators/validators'
import { startDateFormatter, postDateFormatter } from '../../../../base-component/datePicker/dateFormater';

@Component({
    selector: 'company-partner',
    templateUrl: 'companyPartner.component.html'
})
export class CompanyPartnerComponent implements OnInit {

    addPartnerForm : FormGroup;

    @Input() company : any = {};
    @Input() companyInvestigation : any = {};

    notifyOptions: any = notifyOptions;

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private notifyService: NotificationsService
    ) { }

    holders: any = [];

    ngOnInit(): void {
        this.createForm();
    }


    formErrors: any = {
        shareHolderNew : {}
    };

    validationMessages: any = {
        'executiveDirector'     : {
            'required'  : '请输入姓名'
        },
        'supervisors' : {
            'required'  : '请输入姓名',
            'maxlength' : '1-50个字段以内'
        },
        'manager' : {
            'required'  : '请输入姓名',
            'maxlength' : '1-50个字段以内'
        },
        'auditOpinion' : {
            'required'  : '请输入审查意见',
            'maxlength' : '1-50个字段以内'
        },
        'shareHolderNew' : {
            'name' : {
                'required'  : '必填',
                'maxlength' : '1-50个字段以内'
            },
            'ratio' : {
                'required'  : '必填',
                'maxlength' : '1-50个字段以内'
            },
            'subscribedAmount' : {
                'required'  : '必填',
                'maxlength' : '1-50个字段以内'
            },
            'subscribedAmountDate' : {
                'required'  : '必填',
                'ngbDate' : '请选择日期'
            },
            'actualSubscribedAmount' : {
                'required'  : '必填',
                'maxlength' : '1-50个字段以内'
            }

        }
    }

    createForm() {

        if (typeof this.companyInvestigation.shareHolderSurvey === 'undefined') {
            this.companyInvestigation.shareHolderSurvey = {}
        }

        this.holders = this.companyInvestigation.shareHolderSurvey.shareHolderList || [];

        this.addPartnerForm = this.fb.group({
            executiveDirector : [ this.companyInvestigation.shareHolderSurvey.executiveDirector, [ Validators.required ]],
            supervisors       : [ this.companyInvestigation.shareHolderSurvey.supervisors, [ Validators.required ]],
            manager           : [ this.companyInvestigation.shareHolderSurvey.manager, [ Validators.required ]],
            auditOpinion      : [ this.companyInvestigation.shareHolderSurvey.auditOpinion, []],

            shareHolderNew : this.fb.group({
                name                   : [ '', [ Validators.required ]],
                ratio                  : [ '', [ Validators.required ]],
                subscribedAmount       : [ '', [ Validators.required ]],
                subscribedAmountDate   : [ '', []],
                actualSubscribedAmount : [ '', [ Validators.required ]],
                type                   : [ '', []],
                remark                 : [ '', []]
            })
        });

        this.addPartnerForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.addPartnerForm, this.validationMessages));
    }

    get shareHolderList(): FormArray {
        return this.addPartnerForm.get('shareHolderList') as FormArray;
    };

    isShowShareholderForm: boolean = false;
    showShareholderForm () {
        this.isShowShareholderForm = !this.isShowShareholderForm;
    }




    addPartner() {

        const newShareholder = {

            name                   : this.addPartnerForm.get('shareHolderNew.name').value,
            ratio                  : this.addPartnerForm.get('shareHolderNew.ratio').value * 1,
            subscribedAmountDate   : postDateFormatter(this.addPartnerForm.get('shareHolderNew.subscribedAmountDate').value),
            subscribedAmount       : this.addPartnerForm.get('shareHolderNew.subscribedAmount').value * 10000,
            actualSubscribedAmount : this.addPartnerForm.get('shareHolderNew.actualSubscribedAmount').value * 10000,
            type                   : this.addPartnerForm.get('shareHolderNew.type').value,
            remark                 : this.addPartnerForm.get('shareHolderNew.remark').value
        }

        this.holders.push(newShareholder);

        this.isShowShareholderForm = false;
        // this.addPartnerForm.reset();
        this.addPartnerForm.get('shareHolderNew').reset();

    }

    deletePartner(currentHolder: any) {
        const index = this.holders.indexOf(currentHolder);
        this.holders.splice(index, 1);
    }

    saveShareHolderSurvey() {
        const postData = {
            'executiveDirector' : this.addPartnerForm.value.executiveDirector,
            'supervisors' : this.addPartnerForm.value.supervisors,
            'manager' : this.addPartnerForm.value.manager,
            'auditOpinion' : this.addPartnerForm.value.auditOpinion,
            'shareHolderList' : this.holders
        };
        this.companyService.saveShareHolderSurvey(this.company._id, postData).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
            },
            subscribeErrorHandler
        )

    }
}
