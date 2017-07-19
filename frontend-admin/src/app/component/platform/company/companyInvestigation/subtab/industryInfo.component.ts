import { Component , OnInit, Input} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { validationErrorMessageHandler, isFloat } from '../../../../base-component/validators/validators'

import { notifyOptions } from '../../../../../service/notify';
import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';


@Component({
    selector: 'industry-info',
    templateUrl: 'industryInfo.component.html'
})
export class IndustryInfoComponent implements OnInit {

    @Input() company : any = {};
    @Input() companyInvestigation : any = {};

    industryInfoForm : FormGroup;

    notifyOptions: any = notifyOptions;

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private notifyService: NotificationsService
    ) { }

    ngOnInit(): void {
        this.createForm();
    }

    formErrors: any = {};

    validationMessages: any = {
        'registerCapital' : {
            'required'  : '请输入企业全称',
            'number' : '请输入数字'
        }
    }

    createForm() {

        if (typeof this.companyInvestigation.businessRegisterSurvey === 'undefined') {
            this.companyInvestigation.businessRegisterSurvey = {}
        }

        this.industryInfoForm = this.fb.group({
            registerAuditOpinion: [this.companyInvestigation.businessRegisterSurvey.registerAuditOpinion, [ ]],
            scopeAuditOpinion: this.companyInvestigation.businessRegisterSurvey.scopeAuditOpinion,
            registerCapital: [this.companyInvestigation.businessRegisterSurvey.registerCapital || null, [ isFloat({min: 1, max: 9999999999}) ]],
            registerCapitalAuditOpinion: this.companyInvestigation.businessRegisterSurvey.registerCapitalAuditOpinion
        });

        this.industryInfoForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.industryInfoForm, this.validationMessages));


    }


    saveBusinessRegisterSurvey() {
        if (this.industryInfoForm.value.registerCapital !== '') {
            this.industryInfoForm.value.registerCapital = Number(this.industryInfoForm.value.registerCapital);
        }
        this.companyService.saveBusinessRegisterSurvey(this.company._id, this.industryInfoForm.value).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
            },
            subscribeErrorHandler
        )
    }

    percentage: any = '';

    getPercentage() {
        this.percentage = ( (this.industryInfoForm.get('registerCapital').value / this.company.registerCapital) * 100).toFixed(2);
    }




}
