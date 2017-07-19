import {Component, OnInit, Input} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { startDateFormatter, postDateFormatter } from '../../../../base-component/datePicker/dateFormater';
import { CreditorRightService } from '../../../../../service/creditorRight/creditorRight.service';

import { subscribeErrorHandler } from '../../../../../service/errorHandler';
import { getUserIdentity, financingCreditorRightsList } from '../../../../../service/stroage';



@Component({
    selector: 'creditor-right-list',
    templateUrl: './creditorRightList.component.html'
})
export class CreditorRightListComponent implements OnInit {

    @Input() business: any;
    @Input() coal: any ;

    creditorRightQueryForm : FormGroup;

    userIdentity: any = getUserIdentity;

    debtData: any = [];
    errorMessage: string;
    page : any = {
        currentPageNo : 1,
        total : 1
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private creditorRightService: CreditorRightService
    ) { }


    ngOnInit() {
        this.createForm();

        this.route.params.subscribe((params: Params): any => {
            if (params.id) {
                this.searchCreditorRightQuery()
            }
        });

    }

    createForm() {
        this.creditorRightQueryForm = this.fb.group({
            status: '',
            capitalRaiseId: '',
            beginDate: '',
            endDate: ''
        })
    }

    // 获取该业务下的所有债权
    searchCreditorRightQuery() {

        const query : any = {
            pager: {
                pageNum : 1,
                pageSize : 10000
            },
            businessId : this.business._id
        };

        if (this.creditorRightQueryForm.get('status').value) { query.status = Number(this.creditorRightQueryForm.get('status').value) }
        if (this.creditorRightQueryForm.get('capitalRaiseId').value) { query.status = Number(this.creditorRightQueryForm.get('capitalRaiseId').value) }
        if (this.creditorRightQueryForm.get('beginDate').value) { query.beginDate = postDateFormatter(this.creditorRightQueryForm.get('beginDate').value) }
        if (this.creditorRightQueryForm.get('endDate').value) { query.endDate = postDateFormatter(this.creditorRightQueryForm.get('endDate').value) }


        this.creditorRightService.getCreditorRightList(query).subscribe(
            (res) => {
                this.debtData = []
                for (let i = 0; i < res.items.length; i++ ) {
                    res.items[i].checked = false;
                    this.debtData.push(res.items[i])
                }
                // console.log(this.debtData, 'debtData')
            },
            subscribeErrorHandler
        )

    }


    // 修改选中状态
    changeStatus (i: number) {
        this.debtData[i].checked = !this.debtData[i].checked
    }

    // 发起新融资


    financingAdd() {
        financingCreditorRightsList.length = 0;

        this.debtData.map(function(creditorRight: any) {
            if (creditorRight.checked === true) {
                financingCreditorRightsList.push(creditorRight)
            }
        });
        if (financingCreditorRightsList.length > 0) {
            this.errorMessage = '';
            this.router.navigate(['/financingAdd', this.business._id]);
        }else {
            this.errorMessage = '请勾选债权'
        }
    }
}
