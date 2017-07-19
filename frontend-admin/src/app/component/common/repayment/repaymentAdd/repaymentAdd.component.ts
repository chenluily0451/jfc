import {Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChange} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import { CompanyService } from '../../../../service/companyInfo/company.service';
import { BusinessService } from '../../../../service/business/business.service';
import { FinancingService } from '../../../../service/financing/financing.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';
import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';
import { validationErrorMessageHandler, isNumber, isFloat } from '../../../base-component/validators/validators'
import { repaymentsList } from '../../../../service/stroage';




@Component({
    selector: 'repayment-add',
    templateUrl: './repaymentAdd.component.html'
})
export class RepaymentAddComponent implements OnInit {

    repayAddForm : FormGroup;

    submitData: any = {
        recvInfo: {},
        payInfo: {}
    };
    business: any = {};
    financing: any = {};
    repaymentsListObj: any = [];

    submitNewRepayment: boolean = false;

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private businessService: BusinessService,
        private financingService: FinancingService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.getPayMode();
        // this.getOutputValue();
        this.repaymentsListObj = repaymentsList;

        this.route.params.subscribe((params: Params): any => {
            if (params.bid) {
                this.getBusiness(params.bid);
            }
        });

    }

    createForm() {

        this.repayAddForm = this.fb.group({
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
        this.repayAddForm.valueChanges
            .subscribe(
                data => this.formErrors = validationErrorMessageHandler(this.repayAddForm, this.validationMessages)
            );
    }

    formErrors: any = {};
    validationMessages: any = {
        'payAmount': {
            'required': '请填写',
            'number': '请填写还款金额'
        },
        'payDate': {
            'required': '请选择还款日期'
        },
        'payCompanyName': {
            'required': '请填写还款公司名称'
        },
        'payMode': {
            'required': '请选择还款方式'
        },
        'payAccount': {
            'required': '请填写开户行'
        },
        'payCompanyBankName': {
            'required': '请填写支付公司银行开户名'
        },
        'recvCompanyName': {
            'required': '请填写收款公司名'
        },
        'recvBankAddr': {
            'required': '请填写收款银行名称'
        },
        'recvAccount': {
            'required': '请填写收款账号'
        },

        'recvBankName': {
            'required': '请填写'
        }

    };

    uploadFinished (event: any, fieldName1 : string, fieldName2 : string) {

        // 提交保存数据用
        this.submitData[fieldName1][fieldName2] = ({
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        });

    }
    deleteFile (fieldName1 : string, fieldName2 : string) {
        this.submitData[fieldName1][fieldName2] = null
    }

    choosePayBankProvince(event: any) {
        this.submitData.payInfo.payCompanyBankProvince = event.province;
        this.submitData.payInfo.payCompanyBankCity = event.city;
        this.submitData.payInfo.payCompanyBankDistrict = event.district;
    }

    chooseRecvBankProvince(event: any) {
        this.submitData.recvInfo.recvBankProvince = event.province;
        this.submitData.recvInfo.recvBankCity     = event.city;
        this.submitData.recvInfo.recvBankDistrict = event.district;
    }
    payMode: any;
    getPayMode() {
        this.companyService.dictionaryPayMode().subscribe(
            (result) => {
                this.payMode = result;
            }
        )
    }
    // getFinancing (id : string) {
    //     this.financingService.getFinancingDetail(id).subscribe(
    //         (result) => {
    //             this.financing = result;
    //             console.log('financing', result)
    //         },
    //         subscribeErrorHandler
    //     )
    // }
    getBusiness (id : string) {
        this.businessService.getBusinessDetail( id ).subscribe(
            (result) => {
                this.business = result;
            },
            subscribeErrorHandler
        );
    }
    getDate() {
        this.submitData.businessId = this.business._id;
        this.submitData.capitalCompanyId = this.business.downstreamBusiness.capitalCompanyId;
        if (this.repaymentsListObj) {
            this.submitData.capitalRaiseIds = this.repaymentsListObj.map( repayment => repayment._id)
        }
        const form = this.repayAddForm;
        this.submitData.payInfo.payAmount =  Number(form.get('payAmount').value);
        this.submitData.payInfo.payDate =  postDateFormatter(form.get('payDate').value);
        this.submitData.payInfo.payCompanyName =  form.get('payCompanyName').value;
        this.submitData.payInfo.payMode =  Number(form.get('payMode').value);
        this.submitData.payInfo.payAccount =  form.get('payAccount').value;
        this.submitData.payInfo.payCompanyBankName =  form.get('payCompanyBankName').value;
        this.submitData.recvInfo.recvCompanyName =  form.get('recvCompanyName').value;
        this.submitData.recvInfo.recvBankAddr =  form.get('recvBankAddr').value;
        this.submitData.recvInfo.recvAccount =  form.get('recvAccount').value;
        // this.submitData.recvInfo.recvAmount =  Number(form.get('recvAmount').value);
        this.submitData.recvInfo.recvBankName =  form.get('recvBankName').value
    };
    ifUpload: boolean = false
    bridgeSubmitNewRepayment(successModal: any) {
        this.getDate();
        let submit: boolean = false;
        if (!this.submitData.payInfo.payCertificatePic) {
            submit = false;
            this.ifUpload = true;
        }else {
            submit = true;
        }
        if (submit) {
            this.financingService.bridgeSubmitNewRepayment(this.submitData).subscribe(
                (result) => {
                    this.modalService.open(successModal);
                },
                subscribeErrorHandler
            )
        }
    }




}
