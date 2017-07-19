import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CompanyService } from '../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';


@Component({
    selector: 'company-investigation',
    templateUrl: 'companyInvestigation.component.html'

})
export class CompanyInvestigationComponent implements OnInit {


    constructor(
        private companyService: CompanyService,
        private route: ActivatedRoute
        // private location: Location
    ) {}

    company: any = {
        license : {},
        legalPerson : {},
        authPerson : {}
    };
    companyInvestigation: any = {
        fieldInvestigationSurvey: {
            operationProvince: '',
            operationCity: '',
            operationDistrict: ''
        }
    };

    ngOnInit(): void {
        this.route.params.switchMap((params: Params): any => {
            return this.companyService.getCompanyDetail( params.id);
        }).subscribe(
            (result) => {
                this.company = result;
                this.getCompanyInvestigation();
            },
            subscribeErrorHandler
        );
    }

    getCompanyInvestigation() {
        this.companyService.getCompanyInvestigation(this.company._id).subscribe(
            (result) => {
                this.companyInvestigation = result;
                if (!this.companyInvestigation.fieldInvestigationSurvey) {
                    this.companyInvestigation.fieldInvestigationSurvey = {
                        operationProvince: '',
                        operationCity: '',
                        operationDistrict: ''
                    }
                }
            }
        )
    }


    currentTab : string = 'companyQualifications';

    changeTab(tab : string): void {
        this.currentTab = tab;
        this.getCompanyInvestigation();
    }

}
