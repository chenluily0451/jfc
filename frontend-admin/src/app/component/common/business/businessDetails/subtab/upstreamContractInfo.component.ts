import {Component, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { aliOss, getUserIdentity } from '../../../../../service/stroage';
import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { BusinessService } from '../../../../../service/business/business.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';



@Component({
    selector: 'upstream-info',
    templateUrl: './upstreamContractInfo.component.html'

})
export class UpstreamContractInfoComponent implements OnInit, OnChanges {


    @Input() business: any ;
    @Input() coal: any ;

    aliOss : any = aliOss;

    constructor(
        private route: ActivatedRoute
    ) { }



    ngOnInit(): void {
        // this.route.params.subscribe((params: Params): any => {
        //     if (params.id) {
        //         this.getBusiness(params.id);
        //     }
        // });
        // console.log('input', this.business)
    }


    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

        for (const property in changes) {
            if (changes.hasOwnProperty(property)) {

                const changedObject = changes[property];
                // console.log(property, changedObject)

                if (property === 'business' && changedObject.currentValue && changedObject.isFirstChange) {
                    // console.log('business info : ', changedObject.currentValue)
                }
            }
        }
    }

}
