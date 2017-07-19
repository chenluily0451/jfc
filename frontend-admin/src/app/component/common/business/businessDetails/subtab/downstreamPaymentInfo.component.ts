import {Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChange} from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { BusinessService } from '../../../../../service/business/business.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';
import { aliOss, getUserIdentity, financingCreditorRightsList } from '../../../../../service/stroage';

import { validationErrorMessageHandler, isNumber, isInt, matchCoadIndex, twoDecimal, oneDecimal, isFloat} from '../../../../base-component/validators/validators';
import { startDateFormatter, postDateFormatter } from '../../../../base-component/datePicker/dateFormater';

import { notifyOptions } from '../../../../../service/notify';




@Component({
    selector: 'downstream-payment',
    templateUrl: './downstreamPaymentInfo.component.html'

})
export class DownstreamPaymentInfoComponent {
    aliOss : any = aliOss;
    notifyOptions: any = notifyOptions;

    @Input() business: any;

    newDownstreamRepaymentForm: FormGroup
    submitData: any = {};

    userIdentity: any = getUserIdentity;

    downstreamRepaymentList : any = []
    currentDownstreamRepayment : any = {}

    isShowDetail : boolean = false
    isShowAdd : boolean = false


    constructor(
        private fb: FormBuilder,
        private router: Router,
        private companyService: CompanyService,
        private businessService: BusinessService,
        private notifyService: NotificationsService
    ) { }

    ngOnInit(): void {
        this.createForm()
        this.getPayMode()
        this.searchDownstreamRepaymentQuery();
    }


    searchDownstreamRepaymentQuery() {

        const query : any = {
            pager: {
                pageNum : 1,
                pageSize : 10000
            },
            businessId : this.business._id
        };


        this.businessService.getDownstreamRepaymentList(query).subscribe(
            (result) => {
                this.downstreamRepaymentList = result.items;
            },
            subscribeErrorHandler
        )

    }

    createForm() {

        this.newDownstreamRepaymentForm = this.fb.group({

            payDate            : ['', [Validators.required]],
            payCompanyName     : '',
            payCompanyBankName : '',
            payMode            : ['', [Validators.required]],
            payAccount         : '',
            payAmount          : ['', [Validators.required, isFloat({min : 1, max : 9999999999})]],

            recvCompanyName    : '',
            recvBankName       : '',
            recvBankAddr       : '',
            recvAccount        : ''
            // recvAmount         : ['', [Validators.required, isFloat({min : 1, max : 9999999999})] ]

        });

        this.newDownstreamRepaymentForm.valueChanges.subscribe(data => this.formErrors = validationErrorMessageHandler(this.newDownstreamRepaymentForm, this.validationMessages));
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

    ifUpload: boolean = false
    createNewDownstreamRepayment() {

        this.submitData.businessId = this.business._id;
        this.submitData.payAmount = Number(this.newDownstreamRepaymentForm.get('payAmount').value);
        this.submitData.payDate = postDateFormatter(this.newDownstreamRepaymentForm.get('payDate').value);
        this.submitData.payMode = Number(this.newDownstreamRepaymentForm.get('payMode').value);
        this.submitData.payAccount = this.newDownstreamRepaymentForm.get('payAccount').value;
        this.submitData.payCompanyName = this.newDownstreamRepaymentForm.get('payCompanyName').value;
        this.submitData.payCompanyBankName = this.newDownstreamRepaymentForm.get('payCompanyBankName').value;


        this.submitData.recvCompanyName = this.newDownstreamRepaymentForm.get('recvCompanyName').value;
        this.submitData.recvBankName = this.newDownstreamRepaymentForm.get('recvBankName').value;
        this.submitData.recvBankAddr = this.newDownstreamRepaymentForm.get('recvBankAddr').value;
        this.submitData.recvAccount = this.newDownstreamRepaymentForm.get('recvAccount').value;
        // this.submitData.recvAmount = Number(this.newDownstreamRepaymentForm.get('recvAmount').value);

        let submit: boolean = false;
        if (!this.submitData.payCertificatePic) {
            submit = false;
            this.ifUpload = true;
        }else {
            submit = true;
        }

        if (submit) {
            this.businessService.bridgePostDownstreamRepayment( this.submitData).subscribe(
                (result) => {
                    this.notifyService.success(
                        '成功', '恭喜您提交成功'
                    );
                    this.isShowAdd = false
                    this.searchDownstreamRepaymentQuery()
                }
            )
        }
    }


    showDetail (event: any, downstreamRepayment: any) {
        // event.stopPropagation();
        event.preventDefault();
        this.isShowDetail = true
        this.currentDownstreamRepayment = downstreamRepayment
    }

    showAddForm () {
        this.isShowAdd = true
    }
}
