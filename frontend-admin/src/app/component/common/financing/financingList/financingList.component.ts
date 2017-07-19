import {Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChange} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';


import { getUserIdentity } from '../../../../service/stroage';
import { FinancingService } from '../../../../service/financing/financing.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';

import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';
import { validationErrorMessageHandler, isNumber, isInt, matchCoadIndex, twoDecimal, oneDecimal} from '../../../base-component/validators/validators';


@Component({
    selector: 'financing-list',
    templateUrl: './financingList.component.html'
})
export class FinancingListComponent implements OnInit {

    userIdentity: string = getUserIdentity;

    loanListForm : FormGroup;

    financingStatusList: any = [];

    page : any = {
        currentPageNo : 1,
        total : 1
    }
    financingList: any = {
        items: []
    }
    constructor(
        private fb: FormBuilder,
        private financingService: FinancingService
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.getFinancingList();
        this.financingStatusList = this.financingService.financingStatus
    }

    createForm() {
        this.loanListForm = this.fb.group({
            businessId: ['', [ Validators.maxLength(50)]],
            upstreamCompanyName: ['', [ Validators.maxLength(50)]],
            beginDate: null,
            endDate: null,
            status: ''
        });
        this.loanListForm.valueChanges.subscribe(data => this.formErrors = validationErrorMessageHandler(this.loanListForm, this.validationMessages));

    }


    formErrors: any = {};

    validationMessages: any = {
        'businessId': {
            'maxlength': '请输入1-50个字段以内的名称'
        },
        'upstreamCompanyName': {
            'maxlength': '请输入1-50个字段以内的名称'
        }
    };

    //getFinancingList
    getFinancingList() {

        const query : any = {
            pager: {
                pageNum : this.page.currentPageNo,
                pageSize : 10
            }
        };

        if (this.loanListForm.get('status').value) { query.status = Number(this.loanListForm.get('status').value) }
        if (this.loanListForm.get('upstreamCompanyName').value) { query.upstreamCompanyName = this.loanListForm.get('upstreamCompanyName').value }
        if (this.loanListForm.get('businessId').value) { query.businessId = this.loanListForm.get('businessId').value }
        if (this.loanListForm.get('beginDate').value) { query.beginDate = postDateFormatter(this.loanListForm.get('beginDate').value) }
        if (this.loanListForm.get('endDate').value) { query.endDate = postDateFormatter(this.loanListForm.get('endDate').value) }

        this.financingService.getFinancingList(query).subscribe(
            (result) => {
                this.financingList = result
            },
            subscribeErrorHandler
        )
    }



}
