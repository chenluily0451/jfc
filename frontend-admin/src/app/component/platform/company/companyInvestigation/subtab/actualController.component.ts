import { Component , OnInit, Input} from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { validationErrorMessageHandler } from '../../../../base-component/validators/validators'

import { notifyOptions } from '../../../../../service/notify';
import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';


@Component({
    selector: 'actual-controller',
    templateUrl: 'actualController.component.html'

})
export class ActualControllerComponent implements OnInit {

    actualControllerForm: FormGroup;
    @Input() company : any = {};
    @Input() companyInvestigation : any = {};
    notifyOptions: any = notifyOptions;

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private notifyService: NotificationsService
    ) { }


    ngOnInit(): void {
        this.createForm();
        this.getDictionarySexType();
    }
    formErrors: any = {};
    validationMessages: any = {
        'phone': {
            'pattern': '请输入正确的手机号码'
        },
        'age': {
            'pattern': '请输入正确的数字'
        }
    };
    createForm() {

        if (typeof this.companyInvestigation.controlPersonSurvey === 'undefined') {
            this.companyInvestigation.controlPersonSurvey = {}
        }


        this.actualControllerForm = this.fb.group({
            name           : this.companyInvestigation.controlPersonSurvey.name,
            age            : this.companyInvestigation.controlPersonSurvey.age || null,
            sex            : this.companyInvestigation.controlPersonSurvey.sex || (this.companyInvestigation.controlPersonSurvey.sex === 0 ? 0 : ''),
            phone          : this.companyInvestigation.controlPersonSurvey.phone,
            residence      : this.companyInvestigation.controlPersonSurvey.residence,
            family         : this.companyInvestigation.controlPersonSurvey.family,
            ownedCapital   : this.companyInvestigation.controlPersonSurvey.ownedCapital || null,
            major          : this.companyInvestigation.controlPersonSurvey.major,
            minor          : this.companyInvestigation.controlPersonSurvey.minor,
            relatedCompany : this.companyInvestigation.controlPersonSurvey.relatedCompany,
            badInfo        : this.companyInvestigation.controlPersonSurvey.badInfo,
            otherInfo      : this.companyInvestigation.controlPersonSurvey.otherInfo
        });
        this.actualControllerForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.actualControllerForm, this.validationMessages));

    }

    sexType: any;
    getDictionarySexType() {
       this.companyService.dictionarySexType().subscribe(
           (result) => {
               this.sexType = result;
           },
           subscribeErrorHandler
       )
    }

    saveControlPerson() {
        if (this.actualControllerForm.get('sex').value !== '') {
            this.actualControllerForm.value.sex = Number(this.actualControllerForm.get('sex').value)
        }else {
            this.actualControllerForm.value.sex = null
        }
        if (this.actualControllerForm.get('age').value !== null) {
            this.actualControllerForm.value.age = Number(this.actualControllerForm.get('age').value)
        }
        if (this.actualControllerForm.get('ownedCapital').value !== null) {
            this.actualControllerForm.value.ownedCapital = Number(this.actualControllerForm.value.ownedCapital);
        }

        this.companyService.saveControlPerson(this.company._id, this.actualControllerForm.value).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
            },
            subscribeErrorHandler
        )

    }

}
