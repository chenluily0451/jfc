import {Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChange} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';


import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { BusinessService } from '../../../../../service/business/business.service';
import { FinancingService } from '../../../../../service/financing/financing.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';
import { getUserIdentity } from '../../../../../service/stroage';
import { startDateFormatter, postDateFormatter } from '../../../../base-component/datePicker/dateFormater';
import { validationErrorMessageHandler, isNumber, isInt, matchCoadIndex, twoDecimal, oneDecimal} from '../../../../base-component/validators/validators';





@Component({
    selector: 'repayment-info',
    templateUrl: './repaymentInfo.component.html'

})
export class RepaymentInfoComponent implements OnInit {

    userIdentity: any = getUserIdentity


    @Input() business: any;

    repaymentListForm : FormGroup;
    repaymentList: any = {
        items: []
    };

    page : any = {
        currentPageNo : 1,
        total : 1
    };

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private businessService: BusinessService,
        private financingService: FinancingService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.getBridgeRepayment();
    }

    createForm() {
        this.repaymentListForm = this.fb.group({
            beginDate: null,
            endDate: null,
            status: ''
        });
        this.repaymentListForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.repaymentListForm, this.validationMessages));

    }


    formErrors: any = {};

    validationMessages: any = { };


    getBridgeRepayment() {

        const query : any = {
            pager: {
                pageNum : this.page.currentPageNo,
                pageSize : 10000
            },
            businessId: this.business._id
        };

        if (this.repaymentListForm.get('status').value) { query.status = Number(this.repaymentListForm.get('status').value) }
        if (this.repaymentListForm.get('beginDate').value) { query.beginDate = postDateFormatter(this.repaymentListForm.get('beginDate').value) }
        if (this.repaymentListForm.get('endDate').value) { query.endDate = postDateFormatter(this.repaymentListForm.get('endDate').value) }

        this.financingService.getRepaymentList( query).subscribe(
            (result) => {
                this.repaymentList = result
            },
            subscribeErrorHandler
        )
    }
}
