import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../../service/companyInfo/company.service'
import { subscribeErrorHandler } from '../../../service/errorHandler'

@Component({
    selector: 'company-home',
    templateUrl: 'company.component.html'
})
export class CompanyComponent implements OnInit {

    status : number = -1;

    company : any = {
        companyStatus: 0,
        license : {},
        legalPerson : {},
        authPerson : {}
    };
    showAddCompany : boolean = false;

    goToAdd() {
        this.showAddCompany = true;
    }


    constructor(
        private companyService : CompanyService
    ) {}

    ngOnInit() {
        this.getCompany();
    }

    getCompany() {
        this.companyService.getUpstreamCompanyInfo().subscribe(
            (result) => {

                if (typeof result.companyStatus === 'undefined') {
                    result.companyStatus = 0;
                    result.license = {};
                    result.legalPerson = {};
                    result.authPerson = {};
                }else {
                    this.status = result.companyStatus;
                }
                this.company = result;

            },
            subscribeErrorHandler
        )
    }

    previewCompanyInfo() {
        this.showAddCompany = false;
        this.getCompany();
    }

}
