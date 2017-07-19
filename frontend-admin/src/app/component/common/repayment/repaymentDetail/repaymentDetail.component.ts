import {Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChange} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



import { CompanyService } from '../../../../service/companyInfo/company.service';
import { BusinessService } from '../../../../service/business/business.service';
import { FinancingService } from '../../../../service/financing/financing.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';
import { notifyOptions } from '../../../../service/notify';
import { aliOss, repaymentsList, getUserIdentity } from '../../../../service/stroage';



@Component({
    selector: 'repayment-detail',
    templateUrl: 'repaymentDetail.component.html'
})
export class RepaymentDetailComponent implements OnInit {

    repayment: any = {
        payInfo: {
            payCertificatePic: {}
        },
        recvInfo: {}
    }
    aliOss : any = aliOss;
    notifyOptions: any = notifyOptions;

    userIdentity: any = getUserIdentity
    constructor(
        private companyService: CompanyService,
        private businessService: BusinessService,
        private financingService: FinancingService,
        private route: ActivatedRoute,
        private router: Router,
        private notifyService: NotificationsService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params): any => {
            if (params.rid) {
                this.getRepaymentDetail(params.rid);
            }
        });

    }

    getRepaymentDetail (repaymentId : string) {
        this.financingService.getRepaymentDetail( repaymentId ).subscribe(
            (result) => {
                this.repayment = result;
            },
            subscribeErrorHandler
        );
    }

    confirm() {
        this.financingService.capitalConfirmFinancingRepayment(this.repayment._id).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
                setTimeout(() => {
                    this.router.navigate(['/repayment']);
                }, 3000)
            },
            subscribeErrorHandler
        )
    }




}
