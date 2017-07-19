import { Component , OnInit} from '@angular/core';
import { Validators , FormGroup , FormBuilder, FormsModule} from '@angular/forms';
import { subscribeErrorHandler } from '../../../../service/errorHandler'
import { CompanyService } from '../../../../service/companyInfo/company.service';

@Component({
    selector: 'platformUser-list',
    templateUrl: 'platformUserList.component.html'

})

export class PlatformUserListComponent implements OnInit {
    platUserListForm : FormGroup;
    identity: string;
    employees: object;
    employeesLens: any;
    userName : string;
    phone : string;


    page : any = {
        currentPageNo : 1,
        total : 1,
        pageSize : 10
    };


    loginName : string;
    disabled : boolean;
    constructor(private fb: FormBuilder,  private cs: CompanyService) { }

    ngOnInit(): void {
        this.searchStaff();
    }

    // 员工列表请求

    searchStaff() {

        const query : any = {
            pageNum: this.page.currentPageNo
        };


        if (this.userName) { query.userName = this.userName };
        if (this.phone) { query.phoneNum = this.phone };
        if (this.loginName) { query.loginName = this.loginName };
        if (this.disabled) { query.disabled = this.disabled };


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
