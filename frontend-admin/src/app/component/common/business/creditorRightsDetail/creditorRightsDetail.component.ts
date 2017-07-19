import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CreditorRightService } from '../../../../service/creditorRight/creditorRight.service';
import { BusinessService } from '../../../../service/business/business.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';

import { aliOss } from '../../../../service/stroage';

@Component({
    selector: 'creditor-rights-detail',
    templateUrl: './creditorRightsDetail.component.html'
})
export class CreditorRightsDetailComponent implements OnInit {
    aliOss : any = aliOss;

    creditorRightsObj: any = {}
    businessObj: any = {}

    constructor(
        private businessService: BusinessService,
        private creditorRightService: CreditorRightService,
        private route: ActivatedRoute
    ) { }
    ngOnInit() {
        this.route.params.subscribe((params: Params): any => {
            if (params.bid) {
                this.businessService.getBusinessDetail( params.bid ).subscribe(
                    (result) => {
                        this.businessObj = result;
                    },
                    subscribeErrorHandler
                );
            }
            if (params.cid) {
                this.creditorRightService.getCreditorRightDetail(params.cid).subscribe(
                    (result) => {
                        this.creditorRightsObj = result ;
                        for (let i = 0; i < result.quality.length; i++) {
                            this.creditorRightsObj.quality[i].foldedStatus = false;
                        }
                    },
                    subscribeErrorHandler
                );
            }


        });


    }

    foldedToggle(i: number) {
        this.creditorRightsObj.quality[i].foldedStatus = !this.creditorRightsObj.quality[i].foldedStatus
    }
}
