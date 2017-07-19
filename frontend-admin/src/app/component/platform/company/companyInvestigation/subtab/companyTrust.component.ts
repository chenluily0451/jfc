import { Component , OnInit, Input} from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { validationErrorMessageHandler } from '../../../../base-component/validators/validators'

import { notifyOptions } from '../../../../../service/notify';
import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';




@Component({
    selector: 'company-trust',
    templateUrl: 'companyTrust.component.html'

})

export class CompanyTrustComponent implements OnInit {
    notifyOptions: any = notifyOptions;

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private notifyService: NotificationsService
    ) { }

    ngOnInit(): void {
        // this.createForm();
    }


}
