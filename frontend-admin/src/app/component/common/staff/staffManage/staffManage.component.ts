import { Component , OnInit , Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


import { getApiPath } from '../../../../service/apiPath';
import { CompanyService } from '../../../../service/companyInfo/company.service'
import { subscribeErrorHandler } from '../../../../service/errorHandler'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-staff-manage',
    templateUrl: './staffManage.component.html'
})
export class StaffManageComponent implements OnInit {
    identity: string;
    employees: object;
    employeesLens: any;
    loginName : string;
    phone : string;
    totalCount: number = 0;
    curPage: number = 0;
    pageSize: number = 0;
    totalPage: number = 0;

    page : any = {
        currentPageNo : 1,
        total : 1,
        pageSize : 10
    };

    constructor (
        private cs: CompanyService
    ) {}
    ngOnInit(): void {

        this.identity = localStorage.getItem('userIdentity');

        this.searchStaff();
    }

    // 员工列表请求

    searchStaff() {

        const query : any = {
            pageNum: this.page.currentPageNo
        };


        if (this.phone) { query.phoneNum = this.phone };
        if (this.loginName) { query.loginName = this.loginName };


        this.cs.getEmployees(query).subscribe(
            (res) => {

                this.employees = res.items;
                this.employeesLens = res.items.length;
                this.page.total = res.pagination.totalCount;
                this.page.currentPageNo = res.pagination.curPage;
            },
            subscribeErrorHandler
        );
    }


    // 停用功能

    disabledBtn(id: string) {

        this.cs.disabledAccount(id).subscribe(
            (res) => {
                if (res.success) {
                    this.searchStaff();
                }
            },
            subscribeErrorHandler
        )
    }

    // 启用功能
    openBtn(id: string) {

        this.cs.enabledAccount(id).subscribe(
            (res) => {
                if (res.success) {
                    this.searchStaff()
                }
            },
            subscribeErrorHandler
        )
    }

}
