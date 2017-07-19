import { Component , OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { notifyOptions } from '../../../../../service/notify';
import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';

@Component({
    selector: 'company-qualifications',
    templateUrl: './companyQualifications.component.html'

})
export class CompanyQualificationsComponent implements OnInit, OnChanges {

    @Input() company : any;
    @Input() companyInvestigation : any;

    companyQualificationsForm : FormGroup;

    notifyOptions: any = notifyOptions;

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private notifyService: NotificationsService
    ) {}




    ngOnInit(): void {
        this.createForm();
    }


    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

        for (const property in changes) {

            if (changes.hasOwnProperty(property)) {

                const changedObject = changes[property];
                if (property === 'companyInvestigation' && changedObject.currentValue && changedObject.isFirstChange) {

                    if (changedObject.currentValue.licenseSurvey) {
                        this.createForm();

                        this.companyQualificationsForm.setValue({
                            operationLicensePicChecked: changedObject.currentValue.licenseSurvey.operationLicensePicChecked,
                            organLicensePicChecked: changedObject.currentValue.licenseSurvey.organLicensePicChecked,
                            unionLicensePicChecked: changedObject.currentValue.licenseSurvey.unionLicensePicChecked,
                            bankLicensePicChecked : changedObject.currentValue.licenseSurvey.bankLicensePicChecked,
                            legalPersonIdFrontSidePicChecked  : changedObject.currentValue.licenseSurvey.legalPersonIdFrontSidePicChecked,
                            legalPersonIdReverseSidePicChecked: changedObject.currentValue.licenseSurvey.legalPersonIdReverseSidePicChecked,
                            authPersonIdFrontSidePicChecked   : changedObject.currentValue.licenseSurvey.authPersonIdFrontSidePicChecked,
                            authPersonIdReverseSidePicChecked : changedObject.currentValue.licenseSurvey.authPersonIdReverseSidePicChecked,
                            authDocumentPicChecked  : changedObject.currentValue.licenseSurvey.authDocumentPicChecked,
                            licenseAuditOpinion     : changedObject.currentValue.licenseSurvey.licenseAuditOpinion,
                            otherLicenseAuditOpinion: changedObject.currentValue.licenseSurvey.otherLicenseAuditOpinion
                        });
                    }
                }
            }
        }
    }

    createForm() {
        this.companyQualificationsForm = this.fb.group({
            operationLicensePicChecked        : false,
            organLicensePicChecked            : false,
            unionLicensePicChecked            : false,
            bankLicensePicChecked             : false,
            legalPersonIdFrontSidePicChecked  : false,
            legalPersonIdReverseSidePicChecked: false,
            authPersonIdFrontSidePicChecked   : false,
            authPersonIdReverseSidePicChecked : false,
            authDocumentPicChecked            : false,
            licenseAuditOpinion               : '',
            otherLicenseAuditOpinion          : ''

        });

    }

    saveLicenseSurveyDocument() {

        this.companyService.saveLicenseSurveyDocument(this.company._id, this.companyQualificationsForm.value).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
            },
            subscribeErrorHandler
        )

    }



}
