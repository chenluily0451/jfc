import {Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChange} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';


import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { BusinessService } from '../../../../../service/business/business.service';
import { FinancingService } from '../../../../../service/financing/financing.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';

import { startDateFormatter, postDateFormatter } from '../../../../base-component/datePicker/dateFormater';
import { getUserIdentity, repaymentsList } from '../../../../../service/stroage';
import { validationErrorMessageHandler, isNumber, isInt, matchCoadIndex, twoDecimal, oneDecimal} from '../../../../base-component/validators/validators';




@Component({
    selector: 'financing-info',
    templateUrl: './financingInfo.component.html'

})
export class FinancingInfoComponent {

    @Input() business: any;

    financingQueryForm : FormGroup;

    financingList: any = [];

    financingStatusList: any = [];

    page : any = {
        currentPageNo : 1,
        total : 1
    };
    userIdentity: any = getUserIdentity

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private businessService: BusinessService,
        private financingService: FinancingService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.searchFinancingQuery();
        this.financingStatusList = this.financingService.financingStatus
    }

    createForm() {
        this.financingQueryForm = this.fb.group({
            beginDate: null,
            endDate: null,
            status: ''
        });
        this.financingQueryForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.financingQueryForm, this.validationMessages));

    }


    formErrors: any = {};
    validationMessages: any = { };

    // 修改选中状态
    changeStatus (i: number) {
        this.financingList[i].checked = !this.financingList[i].checked
    }
    errorMessage: any;
    repaymentAdd() {
        repaymentsList.length = 0;

        this.financingList.map(function(financing: any) {
            if (financing.checked === true) {
                repaymentsList.push(financing)
            }
        });
        if (repaymentsList.length > 0) {
            this.errorMessage = '';
            this.router.navigate(['/repaymentAdd', this.business._id]);
        }else {
            this.errorMessage = '请勾选融资'
        }
    }
    searchFinancingQuery() {

        const query : any = {
            pager: {
                pageNum : this.page.currentPageNo,
                pageSize : 10000
            },
            businessId : this.business._id
        };

        if (this.financingQueryForm.get('status').value) { query.status = Number(this.financingQueryForm.get('status').value) }
        if (this.financingQueryForm.get('beginDate').value) { query.beginDate = postDateFormatter(this.financingQueryForm.get('beginDate').value) }
        if (this.financingQueryForm.get('endDate').value) { query.endDate = postDateFormatter(this.financingQueryForm.get('endDate').value) }

        this.financingService.getFinancingList(query).subscribe(
            (result) => {
                this.financingList = result.items
            },
            subscribeErrorHandler
        )
    }

}
