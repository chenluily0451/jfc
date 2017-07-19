import {Component, OnInit, Output} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import { BusinessService } from '../../../../service/business/business.service';
import { FinancingService } from '../../../../service/financing/financing.service';
import { CompanyService } from '../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';
import {  getUserIdentity } from '../../../../service/stroage';
import { validationErrorMessageHandler, isNumber, isInt, matchCoadIndex, twoDecimal, oneDecimal, isFloat} from '../../../base-component/validators/validators';
import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';

import { notifyOptions } from '../../../../service/notify';


@Component({
    selector: 'financing-detail',
    templateUrl: './financingDetail.component.html'

})
export class FinancingDetailComponent {
    notifyOptions: any = notifyOptions;

    currentTab : string = 'loanDetailsInfo';
    financing: any = {
        capitalRaise: {
            invoicePic: [],
            goodTransferPic: [],
            auditList: []
        },
        debtList: []

    }
    business: any;
    lending: any = {
        businessId: ''
    }

    userIdentity: any = getUserIdentity;

    financingDetailForm : FormGroup;
    financingPayForm : FormGroup;
    submitData: any = {};

    constructor(
        private fb: FormBuilder,
        private financingService: FinancingService,
        private businessService: BusinessService,
        private companyService: CompanyService,
        private route: ActivatedRoute,
        private router: Router,
        private notifyService: NotificationsService,
        private modalService: NgbModal,
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.getPayMode();
        this.route.params.subscribe((params: Params): any => {
            if (params.bid) {
                this.getBusiness(params.bid);
            }
            if (params.fid) {
                this.getFinancing(params.fid);
                this.getLending(params.fid);
            }
        });

    }
    createForm() {
        this.financingDetailForm = this.fb.group({
            opinion: '',
            infoCollectChannel: '',
            dataDeviation: ''
        });

        this.financingPayForm = this.fb.group({
            payAmount: ['', [ Validators.required, isFloat({min: 1, max: 9999999999})]],
            payDate: ['', [ Validators.required]],
            payCompanyName: '',
            payMode: ['', [ Validators.required]],
            payAccount: '',
            payCompanyBankName: '',
            recvCompanyName: '',
            recvBankAddr: '',
            recvAccount: '',
            // recvAmount: ['', [ Validators.required, isFloat({min: 1, max: 9999999999})]],
            recvBankName: ''
        });
        this.financingPayForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.financingPayForm, this.validationMessages));


    }
    formErrors: any = {};

    validationMessages: any = {
        'payAmount': {
            'required': '请填写',
            'number': '请填写付款金额'
        },
        'payDate': {
            'required': '请选择付款日期'
        },
        'payMode': {
            'required': '请选择付款方式'
        }

    };

    choosePayBankProvince(event: any) {
        this.submitData.payCompanyBankProvince = event.province;
        this.submitData.payCompanyBankCity = event.city;
        this.submitData.payCompanyBankDistrict = event.district;
    }

    chooseRecvBankProvince(event: any) {
        this.submitData.recvBankProvince = event.province;
        this.submitData.recvBankCity     = event.city;
        this.submitData.recvBankDistrict = event.district;
    }

    uploadFinished (event: any, fieldName1 : string) {

        // 提交保存数据用
        this.submitData[fieldName1] = ({
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        });

    }
    deleteFile (fieldName1 : string) {
        this.submitData[fieldName1] = null
    }

    payMode: any;
    getPayMode() {
        this.companyService.dictionaryPayMode().subscribe(
            (result) => {
                this.payMode = result;
            }
        )
    }

    getBusiness (id : string) {
        this.businessService.getBusinessDetail( id ).subscribe(
            (result) => {
                this.business = result;
            },
            subscribeErrorHandler
        );
    }

    getFinancing (id : string) {
        this.financingService.getFinancingDetail(id).subscribe(
            (result) => {
                this.financing = result;
            },
            subscribeErrorHandler
        )
    }

    getLending (id : string) {
        // if (this.financing.capitalRaise.status > 5) {
            this.financingService.capitalFinancingLendingDetail(id).subscribe(
                (result) => {
                    this.lending = result;
                },
                subscribeErrorHandler
            )
        // }

    }

    platformAuditFinancing(audit: number) {
        const postData: any = {
            checkResult: audit,
            opinion: this.financingDetailForm.get('opinion').value,
            infoCollectChannel: this.financingDetailForm.get('infoCollectChannel').value,
            dataDeviation: this.financingDetailForm.get('dataDeviation').value
        }
        this.financingService.platformAuditFinancing( this.financing.capitalRaise._id, postData).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您提交成功'
                );
                setTimeout(() => {
                    this.router.navigate(['/financing']);
                }, 3000)
            }
        )
    }
    capitalAuditFinancing(audit: number) {
        const postData: any = {
            checkResult: audit,
            opinion: this.financingDetailForm.get('opinion').value,
            infoCollectChannel: this.financingDetailForm.get('infoCollectChannel').value,
            dataDeviation: this.financingDetailForm.get('dataDeviation').value
        }
        this.financingService.capitalAuditFinancing( this.financing.capitalRaise._id, postData).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您提交成功'
                );
                setTimeout(() => {
                    this.router.navigate(['/financing']);
                }, 3000)
            }
        )
    }
    ifUpload: boolean = false
    capitalFinancingLending(successModal: any) {

        this.submitData.businessId = this.business.financingProtocol.businessId;
        this.submitData.capitalRaiseId = this.financing.capitalRaise._id;
        this.submitData.payAmount = Number(this.financingPayForm.get('payAmount').value);
        this.submitData.payDate = postDateFormatter(this.financingPayForm.get('payDate').value);
        this.submitData.payCompanyName = this.financingPayForm.get('payCompanyName').value;
        this.submitData.payMode = Number(this.financingPayForm.get('payMode').value);
        this.submitData.payAccount = this.financingPayForm.get('payAccount').value;
        this.submitData.payCompanyBankName = this.financingPayForm.get('payCompanyBankName').value;
        this.submitData.recvCompanyName = this.financingPayForm.get('recvCompanyName').value;
        this.submitData.recvBankAddr = this.financingPayForm.get('recvBankAddr').value;
        this.submitData.recvAccount = this.financingPayForm.get('recvAccount').value;
        // this.submitData.recvAmount = Number(this.financingPayForm.get('recvAmount').value);
        this.submitData.recvBankName = this.financingPayForm.get('recvBankName').value;

        let submit: boolean = false;
        if (!this.submitData.payCertificatePic) {
            submit = false;
            this.ifUpload = true;
        }else {
            submit = true;
        }
        if (submit) {
            this.financingService.capitalFinancingLending( this.submitData).subscribe(
                (result) => {
                    this.modalService.open(successModal)
                }
            )
        }

    }


    upstreamConfirmFinancing() {
        this.financingService.upstreamConfirmFinancing( this.financing.capitalRaise._id ).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您提交成功'
                );
                setTimeout(() => {
                    this.router.navigate(['/business']);
                }, 3000)
            }
        )
    }
    // upstreamConfirmFinancing() {
    //     this.financingService.upstreamConfirmFinancing( this.financing.capitalRaise._id ).subscribe(
    //         (result) => {
    //             console.log('Submit result: ', result);
    //             this.notifyService.success(
    //                 '成功', '恭喜您提交成功'
    //             );
    //             setTimeout(() => {
    //                 this.router.navigate(['/business']);
    //             }, 3000)
    //         }
    //     )
    // }


    changeTab(tab : string): void {
        this.currentTab = tab;
    }

}
