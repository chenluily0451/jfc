import {Component, OnInit} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';

import { getUserIdentity } from '../../../../service/stroage';
import { FinancingService } from '../../../../service/financing/financing.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';

import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';
import { validationErrorMessageHandler, isNumber, isInt, matchCoadIndex, twoDecimal, oneDecimal} from '../../../base-component/validators/validators';



@Component({
    selector: 'repayment-manage',
    templateUrl: './repaymentManage.component.html'
})
export class RepaymentManageComponent implements OnInit {

    userIdentity: string = getUserIdentity;

    repaymentManageForm: FormGroup;
    repaymentList: any = {
        items: []
    };

    page : any = {
        currentPageNo : 1,
        total : 1
    };
    constructor(
        private fb: FormBuilder,
        private financingService: FinancingService
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.getBridgeRepayment();
    }

    createForm() {
        this.repaymentManageForm = this.fb.group({
            beginDate: null,
            endDate: null,
            status: ''
        });

    }

    getBridgeRepayment() {

        const query : any = {
            pager: {
                pageNum : this.page.currentPageNo,
                pageSize : 10
            }
        };

        if (this.repaymentManageForm.get('status').value) { query.status = Number(this.repaymentManageForm.get('status').value) }
        if (this.repaymentManageForm.get('beginDate').value) { query.beginDate = postDateFormatter(this.repaymentManageForm.get('beginDate').value) }
        if (this.repaymentManageForm.get('endDate').value) { query.endDate = postDateFormatter(this.repaymentManageForm.get('endDate').value) }

        this.financingService.getRepaymentList(query).subscribe(
            (result) => {
                this.repaymentList = result
            },
            subscribeErrorHandler
        )
    }
}
