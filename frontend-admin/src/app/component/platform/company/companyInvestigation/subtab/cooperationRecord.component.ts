import { Component , OnInit, Input} from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { validationErrorMessageHandler } from '../../../../base-component/validators/validators'

import { notifyOptions } from '../../../../../service/notify';
import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';

import { startDateFormatter, postDateFormatter } from '../../../../base-component/datePicker/dateFormater';



@Component({
    selector: 'cooperation-record',
    templateUrl: 'cooperationRecord.component.html'

})

export class CooperationRecordComponent implements OnInit {
    cooperationRecordForm: FormGroup;
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
        this.getDictionaryTrafficMode();
    }

    formErrors: any = {};

    validationMessages: any = {
        'time' : {
            'required'  : '请输入企业全称',
            'number' : '请输入数字'
        }
    }

    createForm() {
        if (typeof this.companyInvestigation.cooperationSurvey === 'undefined') {
            this.companyInvestigation.cooperationSurvey = {}
        }

        this.cooperationRecordForm = this.fb.group({
            time: startDateFormatter(this.companyInvestigation.cooperationSurvey.time),
            name: this.companyInvestigation.cooperationSurvey.name,
            quantity: this.companyInvestigation.cooperationSurvey.quantity || null,
            bail: this.companyInvestigation.cooperationSurvey.bail || null,
            completion: this.companyInvestigation.cooperationSurvey.completion || null,
            traffic: this.companyInvestigation.cooperationSurvey.traffic || (this.companyInvestigation.cooperationSurvey.traffic === 0 ? 0 : ''),
            settled: this.companyInvestigation.cooperationSurvey.settled,
            disputed: this.companyInvestigation.cooperationSurvey.disputed
        });
        this.cooperationRecordForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.cooperationRecordForm, this.validationMessages));

    }

    cooperationDate: any = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
    }

    trafficMode: any;
    getDictionaryTrafficMode() {
        this.companyService.dictionaryTrafficMode().subscribe(
            (result) => {
                this.trafficMode = result
            },
            subscribeErrorHandler
        )
    }

    saveCooperationSurvey() {

        const postData = {
            time :  postDateFormatter(this.cooperationRecordForm.value.time),
            name: this.cooperationRecordForm.value.name,
            traffic : this.cooperationRecordForm.value.traffic,
            completion : this.cooperationRecordForm.value.completion,
            bail : this.cooperationRecordForm.value.bail,
            quantity : this.cooperationRecordForm.value.quantity,
            settled: this.cooperationRecordForm.value.settled,
            disputed: this.cooperationRecordForm.value.disputed
        };
        if (this.cooperationRecordForm.get('traffic').value !== '') {
            postData.traffic = Number(this.cooperationRecordForm.get('traffic').value)
        }else {
            postData.traffic = null
        }
        if (this.cooperationRecordForm.get('completion').value !== null) {
            postData.completion = Number(this.cooperationRecordForm.get('completion').value)
        }
        if (this.cooperationRecordForm.get('bail').value !== null) {
            postData.bail = Number(this.cooperationRecordForm.get('bail').value)
        }
        if (this.cooperationRecordForm.get('quantity').value !== null) {
            postData.quantity = Number(this.cooperationRecordForm.get('quantity').value)
        }
        this.companyService.saveCooperationSurvey(this.company._id, postData).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
            },
            subscribeErrorHandler
        )
    }


}
