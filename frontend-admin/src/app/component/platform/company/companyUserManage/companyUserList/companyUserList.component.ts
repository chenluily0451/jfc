import { Component , OnInit} from '@angular/core';

import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';


@Component({
    selector: 'companyUser-list',
    templateUrl: 'companyUserList.component.html'

})
export class CompanyUserListComponent implements OnInit {
    identity: string;
    employees: object;
    employeesLens: any;
    username : string = '';
    phone : string = '';
    totalCount: number = 0;
    curPage: number = 0;
    pageSize: number = 0;
    totalPage: number = 0;

    constructor (
        private companyService: CompanyService
    ) {}

    ngOnInit(): void {
        this.platformGetCompanies();
    }

    // //获取企业列表
    companies: any = {};
    platformGetCompanies () {
        this.companyService.getCompanyList('').subscribe(
            (result) => {
                this.companies = result;
            },
            subscribeErrorHandler
        );
    }
    //
    // //获取企业类型
    // companyType : {};
    // getcompanyTypeList () {
    //     this.companyService.dictionaryCompanyType().subscribe(
    //         (result) => {
    //             this.companyType = result;
    //             console.log(result)
    //         },
    //         subscribeErrorHandler
    //     );
    //
    // }


    pageChange () {
        // console.log('need todo')
    }



}
