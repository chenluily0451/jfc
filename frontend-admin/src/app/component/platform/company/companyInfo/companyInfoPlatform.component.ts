import { Component , OnInit} from '@angular/core';
import { Validators , FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';
import { notifyOptions } from '../../../../service/notify';

import 'rxjs/add/operator/switchMap';

import { subscribeErrorHandler } from '../../../../service/errorHandler';
import { CompanyService } from '../../../../service/companyInfo/company.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';





@Component({
    selector: 'company-info-platform',
    templateUrl: 'companyInfoPlatform.component.html'
})
export class CompanyInfoPlatformComponent implements OnInit {
    companyInfoAuditForm : FormGroup;

    companyInfo : any = {
        license : {},
        legalPerson : {},
        authPerson : {}
    };

    notifyOptions: any = notifyOptions;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private companyService: CompanyService,
        private notifyService: NotificationsService,
        private modalService: NgbModal
    ) { }


    ngOnInit(): void {
        this.route.params.switchMap((params: Params): any => {
            return this.companyService.getCompanyDetail( params.id)
        }).subscribe(
            (result) => {
                this.companyInfo = result
            },
            subscribeErrorHandler
        );

        this.createForm();
    }

    createForm() {
        this.companyInfoAuditForm = this.fb.group({
            'auditComment': ['', [ Validators.required ]]
        });

    }

    successLink: any;
    platformAuditCompany( audit: number, successModal: any ) {
        if (audit === 10) {
            this.successLink = '/company/companyInvestigation';
        }else {
            this.successLink = '/company'
        }

        this.companyService.platformCompanyAudit(audit, this.companyInfo._id, this.companyInfoAuditForm.value.auditComment).subscribe(
            (result) => {
                this.modalService.open(successModal);
            }
        )
    }

}
