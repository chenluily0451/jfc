import {Component, OnInit, ElementRef, Input, Output, OnChanges, SimpleChange} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { aliOss } from '../../../../service/stroage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { notifyOptions } from '../../../../service/notify';
import { NotificationsService } from 'angular2-notifications';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from '../../../../service/companyInfo/company.service';
import { BusinessService } from '../../../../service/business/business.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';
import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';
import { validationErrorMessageHandler, isNumber, isInt, matchCoadIndex, twoDecimal, oneDecimal} from '../../../base-component/validators/validators';


@Component({
    selector: 'business-application',
    host: {
        '(document:click)': 'onClick($event)',
    },
    templateUrl: './businessApplication.component.html'
})
export class BusinessApplicationComponent implements OnInit {
    aliOss : any = aliOss;

    businessApplicationForm : FormGroup;
    notifyOptions: any = notifyOptions;
    upstreamBusiness: any = {
        receiveCompanyId : '',
        provider: [],
        contractInfo: {},
        payInfo: {},
        trafficInfo: {},
        coalIndex: {
            coalPlace: {},
            NCV: {
                begin: '',
                end: ''
            },
            ADV: {
                begin: '',
                end: ''
            },
            ASH: {
                begin: '',
                end: ''
            },
            RV: {
                begin: '',
                end: ''
            },
            TM: {
                begin: '',
                end: ''
            },
            RS: {
                begin: '',
                end: ''
            },
            IM: {
                begin: '',
                end: ''
            },
            ADS: {
                begin: '',
                end: ''
            },
            FC: {
                begin: '',
                end: ''
            },
            GV: {
                begin: '',
                end: ''
            },
            YV: {
                begin: '',
                end: ''
            },
            AFT: {
                begin: '',
                end: ''
            },
            HGI: {
                begin: '',
                end: ''
            },
            PS: '',
            CRC: {
                begin: '',
                end: ''
            }
        }
    };


    submitData: any = {
        receiveCompanyId: '',
        provider: [],
        coalIndex: {
            coalType: '',
            coalPlace: {
                province: '',
                city: ''
            },
            NCV: {
                begin: '',
                end: ''
            },
            ADV: {
                begin: '',
                end: ''
            },
            ASH: {
                begin: '',
                end: ''
            },
            RV: {
                begin: '',
                end: ''
            },
            TM: {
                begin: '',
                end: ''
            },
            RS: {
                begin: '',
                end: ''
            },
            IM: {
                begin: '',
                end: ''
            },
            ADS: {
                begin: '',
                end: ''
            },
            FC: {
                begin: '',
                end: ''
            },
            GV: {
                begin: '',
                end: ''
            },
            YV: {
                begin: '',
                end: ''
            },
            AFT: {
                begin: '',
                end: ''
            },
            HGI: {
                begin: '',
                end: ''
            },
            PS: '',
            CRC: {
                begin: '',
                end: ''
            }
        },

        trafficInfo: {
            trafficMode: '',
            sendStation: '',
            receiveStation: '',
            freightPayer: '',
            freightPrice: '',
            otherMiscFee: '',
            deliveryBegin: null,
            deliveryEnd: null
        },

        payInfo: {
            contractUnitPrice: '',
            hasDeposit: false,
            depositAmount: '',
            payMode: '',
            contractAmount: '',
            payCertificatePic: null,
            openAccountBank: '',
            bankAccountNo: ''
        },
        contractInfo: {
            contractFile: [],
            otherContractFile: []
        }

    };


    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private businessService: BusinessService,
        private route: ActivatedRoute,
        private router: Router,
        private notifyService: NotificationsService,
        private modalService: NgbModal,
        private eref: ElementRef
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params): any => {

             if (params.id) {
                 this.businessService.getBusinessDetail( params.id).subscribe(
                     (resultBusiness) => {
                         this.upstreamBusiness = resultBusiness.upstreamBusiness;
                         if (!resultBusiness.upstreamBusiness.coalIndex) {
                             this.upstreamBusiness.coalIndex = {
                                 coalPlace: {
                                     province: '',
                                     city: ''
                                 }
                             }
                         }
                         if (!resultBusiness.upstreamBusiness.trafficInfo) {
                             this.upstreamBusiness.trafficInfo = {
                                 trafficMode: ''
                             }
                         }
                         if (!resultBusiness.upstreamBusiness.payInfo) {
                             this.upstreamBusiness.payInfo = {
                                 payCertificatePic: ''
                             }
                         }
                         if (!resultBusiness.upstreamBusiness.contractInfo) {
                             this.upstreamBusiness.contractInfo = {
                                 contractFile: '',
                                 otherContractFile: ''
                             }
                         }


                         this.createForm();

                         if (resultBusiness._id) {
                             this.submitData.businessId = resultBusiness._id;
                         }
                     },
                     subscribeErrorHandler
                 );
             }
        });
        this.createForm();
        this.getDictionaryTrafficMode();
        this.getDictionaryPayMode();
        this.getBridgeCompanies();
    }


    createForm() {

        if (this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.coalPlace && this.upstreamBusiness.coalIndex.coalPlace.province) {
            this.submitData.coalIndex.coalPlace.province = this.upstreamBusiness.coalIndex.coalPlace.province
        }

        if (this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.coalPlace && this.upstreamBusiness.coalIndex.coalPlace.city) {
            this.submitData.coalIndex.coalPlace.city = this.upstreamBusiness.coalIndex.coalPlace.city
        }

        if (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.payCertificatePic) {
            this.submitData.payInfo.payCertificatePic = this.upstreamBusiness.payInfo.payCertificatePic
        }
        if (this.upstreamBusiness.contractInfo && this.upstreamBusiness.contractInfo.contractFile) {
            this.submitData.contractInfo.contractFile = this.upstreamBusiness.contractInfo.contractFile
        }
        if (this.upstreamBusiness.contractInfo && this.upstreamBusiness.contractInfo.otherContractFile) {
            this.submitData.contractInfo.otherContractFile = this.upstreamBusiness.contractInfo.otherContractFile
        }
        if (this.upstreamBusiness.provider && this.upstreamBusiness.provider[1]) {
            this.addProvider = true;
        }
        if (this.upstreamBusiness.provider && this.upstreamBusiness.provider[2]) {
            this.addLastProvider = true;
        }

        this.businessApplicationForm = this.fb.group({
            receiveCompanyId: this.upstreamBusiness.receiveCompanyId || '',
            providerOne: (this.upstreamBusiness.provider && this.upstreamBusiness.provider[0]) ? this.upstreamBusiness.provider[0] : '',
            providerTwo: (this.upstreamBusiness.provider && this.upstreamBusiness.provider[1]) ? this.upstreamBusiness.provider[1] : '',
            providerThree: (this.upstreamBusiness.provider && this.upstreamBusiness.provider[2]) ? this.upstreamBusiness.provider[2] : '',

            coalType: [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.coalType) ? this.upstreamBusiness.coalIndex.coalType : '', [Validators.required, Validators.maxLength(10)]],
            deliveryBegin: [ this.upstreamBusiness.trafficInfo.deliveryBegin ? startDateFormatter(this.upstreamBusiness.trafficInfo.deliveryBegin) : '' ],
            deliveryEnd: [this.upstreamBusiness.trafficInfo.deliveryEnd ? startDateFormatter(this.upstreamBusiness.trafficInfo.deliveryEnd) : ''],


            NCVBegin: [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.NCV ? this.upstreamBusiness.coalIndex.NCV.begin : ''), [Validators.required, isNumber({min: 1, max: 7500}), isInt()]],
            NCVEnd  : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.NCV ? this.upstreamBusiness.coalIndex.NCV.end : ''), [Validators.required, isNumber({min: 1, max: 7500}), isInt()]],
            ADVBegin: [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.ADV ? this.upstreamBusiness.coalIndex.ADV.begin : ''), [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            ADVEnd  : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.ADV ? this.upstreamBusiness.coalIndex.ADV.end : ''), [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            ASHBegin: [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.ASH ? this.upstreamBusiness.coalIndex.ASH.begin : ''), [isNumber({min: 0.1, max: 50}), oneDecimal()]],
            ASHEnd  : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.ASH ? this.upstreamBusiness.coalIndex.ASH.end : ''), [isNumber({min: 0.1, max: 50}), oneDecimal()]],
            RVBegin : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.RV ? this.upstreamBusiness.coalIndex.RV.begin : ''), [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            RVEnd   : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.RV ? this.upstreamBusiness.coalIndex.RV.end : ''), [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            TMBegin : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.TM ? this.upstreamBusiness.coalIndex.TM.begin : ''), [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            TMEnd   : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.TM ? this.upstreamBusiness.coalIndex.TM.end : ''), [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            RSBegin : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.RS ? this.upstreamBusiness.coalIndex.RS.begin : ''), [isNumber({min: 0.01, max: 10}), twoDecimal()]],
            RSEnd   : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.RS ? this.upstreamBusiness.coalIndex.RS.end : ''), [isNumber({min: 0.01, max: 10}), twoDecimal()]],
            IMBegin : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.IM ? this.upstreamBusiness.coalIndex.IM.begin : ''), [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            IMEnd   : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.IM ? this.upstreamBusiness.coalIndex.IM.end : ''), [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            ADSBegin: [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.ADS ? this.upstreamBusiness.coalIndex.ADS.begin : ''), [isNumber({min: 0.01, max: 10}), twoDecimal()]],
            ADSEnd  : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.ADS ? this.upstreamBusiness.coalIndex.ADS.end : ''), [isNumber({min: 0.01, max: 10}), twoDecimal()]],
            FCBegin : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.FC ? this.upstreamBusiness.coalIndex.FC.begin : ''), [isNumber({min: 1, max: 100}), isInt()]],
            FCEnd   : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.FC ? this.upstreamBusiness.coalIndex.FC.end : ''), [isNumber({min: 1, max: 100}), isInt()]],
            GVBegin : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.GV ? this.upstreamBusiness.coalIndex.GV.begin : ''), [isNumber({min: 1, max: 100}), isInt()]],
            GVEnd   : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.GV ? this.upstreamBusiness.coalIndex.GV.end : ''), [isNumber({min: 1, max: 100}), isInt()]],
            YVBegin : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.YV ? this.upstreamBusiness.coalIndex.YV.begin : ''), [isNumber({min: 1, max: 100}), isInt()]],
            YVEnd   : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.YV ? this.upstreamBusiness.coalIndex.YV.end : ''), [isNumber({min: 1, max: 100}), isInt()]],
            AFTBegin: [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.AFT ? this.upstreamBusiness.coalIndex.AFT.begin : ''), [isNumber({min: 900, max: 1800}), isInt()]],
            AFTEnd  : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.AFT ? this.upstreamBusiness.coalIndex.AFT.end : ''), [isNumber({min: 900, max: 1800}), isInt()]],
            HGIBegin: [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.HGI ? this.upstreamBusiness.coalIndex.HGI.begin : ''), [isNumber({min: 1, max: 99}), isInt()]],
            HGIEnd  : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.HGI ? this.upstreamBusiness.coalIndex.HGI.end : ''), [isNumber({min: 1, max: 99}), isInt()]],
            PS      : [ this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.PS, [Validators.maxLength(10)]],
            CRCBegin: [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.CRC ? this.upstreamBusiness.coalIndex.CRC.begin : ''), [isNumber({min: 1, max: 100}), isInt()]],
            CRCEnd  : [(this.upstreamBusiness.coalIndex && this.upstreamBusiness.coalIndex.CRC ? this.upstreamBusiness.coalIndex.CRC.end : ''), [isNumber({min: 1, max: 100}), isInt()]],

            trafficMode: (this.upstreamBusiness.trafficInfo && this.upstreamBusiness.trafficInfo.trafficMode ) ? this.upstreamBusiness.trafficInfo.trafficMode : (this.upstreamBusiness.trafficInfo.trafficMode === 0 ? 0 : ''),
            sendStation   : (this.upstreamBusiness.trafficInfo && this.upstreamBusiness.trafficInfo.sendStation) ? this.upstreamBusiness.trafficInfo.sendStation : '',
            receiveStation: (this.upstreamBusiness.trafficInfo && this.upstreamBusiness.trafficInfo.receiveStation) ? this.upstreamBusiness.trafficInfo.receiveStation : '',
            freightPayer: (this.upstreamBusiness.trafficInfo && this.upstreamBusiness.trafficInfo.freightPayer) ? this.upstreamBusiness.trafficInfo.freightPayer : '',
            freightPrice: (this.upstreamBusiness.trafficInfo && this.upstreamBusiness.trafficInfo.freightPrice) ? this.upstreamBusiness.trafficInfo.freightPrice : '',
            otherMiscFee: (this.upstreamBusiness.trafficInfo && this.upstreamBusiness.trafficInfo.otherMiscFee) ? this.upstreamBusiness.trafficInfo.otherMiscFee : '',

            contractAmount   : (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.contractAmount) ? this.upstreamBusiness.payInfo.contractAmount : '',
            contractUnitPrice: (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.contractUnitPrice) ? this.upstreamBusiness.payInfo.contractUnitPrice : '',
            openAccountBank  : (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.openAccountBank) ? this.upstreamBusiness.payInfo.openAccountBank : '',
            bankAccountNo    : (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.bankAccountNo) ? this.upstreamBusiness.payInfo.bankAccountNo : '',
            hasDeposit       : (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.hasDeposit) ? this.upstreamBusiness.payInfo.hasDeposit : false,
            depositAmount    : (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.depositAmount) ? this.upstreamBusiness.payInfo.depositAmount : '',
            payMode          : (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.payMode) ? this.upstreamBusiness.payInfo.payMode : (this.upstreamBusiness.payInfo.payMode === 0 ? 0 : '')
            // paymentAmount    : (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.paymentAmount) ? this.upstreamBusiness.payInfo.paymentAmount : '',
            // payNode          : (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.payNode) ? this.upstreamBusiness.payInfo.payNode : '',
            // provisionAssess  : (this.upstreamBusiness.payInfo && this.upstreamBusiness.payInfo.provisionAssess) ? this.upstreamBusiness.payInfo.provisionAssess : ''
        },
            { validator: matchCoadIndex()}
        );
        this.businessApplicationForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.businessApplicationForm, this.validationMessages));

    }

    formErrors: any = {};
    validationMessages: any = {
        'NCVBegin': {
            'required': '请输入1-7500之间的整数',
            'number' : '请输入1-7500之间的整数',
            'int' : '请输入整数'
        },
        'NCVEnd': {
            'required': '请输入1-7500之间的整数',
            'number' : '请输入1-7500之间的整数',
            'int' : '请输入整数'
        },
        'ADVBegin':  {
            'number' : '请输入0.01-50之间的值',
            'twoDecimal': '最多两位小数'
        },
        'ADVEnd'  :  {
            'number' : '请输入0.01-50之间的值',
            'twoDecimal': '最多两位小数'
        },
        'ASHBegin':  {
            'number' : '请输入0.1-50之间的值',
            'oneDecimal': '最多一位小数'
        },
        'ASHEnd'  :  {
            'number' : '请输入0.1-50之间的值',
            'oneDecimal': '最多一位小数'
        },
        'RVBegin' :  {
            'number' : '请输入0.01-50之间的值',
            'twoDecimal': '最多两位小数'
        },
        'RVEnd'   :  {
            'number' : '请输入0.01-50之间的值',
            'twoDecimal': '最多两位小数'
        },
        'TMBegin':  {
            'number' : '请输入0.01-50之间的值',
            'twoDecimal': '最多两位小数'
        },
        'TMEnd'  :  {
            'number' : '请输入0.01-50之间的值',
            'twoDecimal': '最多两位小数'
        },
        'RSBegin':  {
            'number' : '请输入0.01-10之间的值',
            'twoDecimal': '最多两位小数'
        },
        'RSEnd'  :  {
            'number' : '请输入0.01-10之间的值',
            'twoDecimal': '最多两位小数'
        },
        'IMBegin':  {
            'number' : '请输入0.01-50之间的值',
            'twoDecimal': '最多两位小数'
        },
        'IMEnd'  :  {
            'number' : '请输入0.01-50之间的值',
            'twoDecimal': '最多两位小数'
        },
        'ADSBegin':  {
            'number' : '请输入0.01-10之间的值',
            'twoDecimal': '最多两位小数'
        },
        'ADSEnd'  :  {
            'number' : '请输入0.01-10之间的值',
            'twoDecimal': '最多两位小数'
        },
        'FCBegin':  {
            'number' : '请输入1-100之间的整数',
            'int' : '请输入整数'
        },
        'FCEnd'  :  {
            'number' : '请输入1-100之间的整数',
            'int' : '请输入整数'
        },
        'GVBegin':  {
            'number' : '请输入1-100之间的整数',
            'int' : '请输入整数'
        },
        'GVEnd'  :  {
            'number' : '请输入1-100之间的整数',
            'int' : '请输入整数'
        },
        'YVBegin':  {
            'number' : '请输入1-100之间的整数',
            'int' : '请输入整数'
        },
        'YVEnd'  :  {
            'number' : '请输入1-100之间的整数',
            'int' : '请输入整数'
        },
        'AFTBegin':  {
            'number' : '请输入900-1800之间的整数',
            'int' : '请输入整数'
        },
        'AFTEnd'  :  {
            'number' : '请输入900-1800之间的整数',
            'int' : '请输入整数'
        },
        'HGIBegin':  {
            'required': '请输入1-99之间的整数',
            'number' : '请输入1-99之间的整数',
            'int' : '请输入整数'
        },
        'HGIEnd'  :  {
            'number' : '请输入1-99之间的整数',
            'int' : '请输入整数'
        },
        'PS':  {
            'maxlength': '最多输入10个字'
        },
        'CRCBegin':  {
            'required': '请输入1-100之间的整数',
            'number' : '请输入1-100之间的整数',
            'int' : '请输入整数'
        },
        'CRCEnd'  : {
            'number' : '请输入1-100之间的整数',
            'int' : '请输入整数'
        },
        // 'providerOne': {
        //     'required': '请输入至少一方煤炭供货方'
        // },
        'receiveCompanyId': {
            'required': '请选择收货单位'
        },
        'coalType': {
            'required': '请填写煤种',
            'maxlength': '请填写1-10个字段以内'
        },
        'trafficMode': {
            'required': '请选择运输方式'
        },
        'sendStation': {
            'required': '请输入发运站'
        },
        'receiveStation': {
            'required': '请输入交货站'
        },
        'freightPayer': {
            'required': '请输入运费承担方'
        },
        'freightPrice': {
            'required': '请输入运费'
        },
        'contractAmount': {
            'required': '请输入合同量'
        },
        'contractUnitPrice': {
            'required': '请输入合同单价'
        },
        'openAccountBank': {
            'required': '请输入开户行'
        },
        'bankAccountNo': {
            'required': '请输入账户'
        },
        'hasDeposit': {
            'required': '请选择有无保证金'
        },
        'depositAmount': {
            'required': '请输入保证金金额'
        },
        'payMode': {
            'required': '请选择付款方式'
        },
        'deliveryBegin': {
            'ngbDate': ''
        },
        'deliveryEnd': {
            'ngbDate': ''
        }
    };
    dynamicId: any;
    openDatepicker(id: any){
        this.dynamicId = id;
        //console.log("Datepicker Reference",id);
    }
    onClick(event: any) {
        //console.log(event);
        if (this.dynamicId === undefined) {
            console.log("Dynamic id ===============");
        }else if (!this.eref.nativeElement.contains(event.target)) {
            const self = this;
            setTimeout(function(){
                self.dynamicId.close();
            }, 10);
        }
    }

    //添加煤炭供货方
    addProvider: boolean = false;
    addLastProvider: boolean = false;
    addProviderTwo() {
        if (this.addProvider) {
            this.addLastProvider = true;
        }else {
            this.addProvider = true;
        }
    }
    deleteProviderTwo() {
        this.addProvider = false;
        this.businessApplicationForm.patchValue({ providerTwo : ''})
    }
    deleteProviderThree() {
        this.addLastProvider = false;
        this.businessApplicationForm.patchValue({ providerThree : ''})
    }


    //获取运输方式
    trafficMode: any;
    getDictionaryTrafficMode() {
        this.companyService.dictionaryTrafficMode().subscribe(
            (result) => {
                this.trafficMode = result
            },
            subscribeErrorHandler
        )
    }


    //获取付款方式
    payMode: any;
    getDictionaryPayMode() {
        this.companyService.dictionaryPayMode().subscribe(
            (result) => {
                this.payMode = result
            },
            subscribeErrorHandler
        )
    }

    //获取收货单位(核心企业)
    bridgeCompanies: any;
    getBridgeCompanies() {
        this.businessService.getCompaniesBySystemName('bridge').subscribe(
            (result) => {
                this.bridgeCompanies = result;
            },
            subscribeErrorHandler
        )
    }

    chooseProvince(event: any) {
        this.submitData.coalIndex.coalPlace.province = event.province;
        this.submitData.coalIndex.coalPlace.city = event.city;
    }


    getSubmitData() {

        const form = this.businessApplicationForm.value;

        if (form.receiveCompanyId === '') {
            this.submitData.receiveCompanyId = null;
        }else {
            this.submitData.receiveCompanyId = form.receiveCompanyId;
        }


        this.submitData.provider = [];
        if (form.providerOne) {
            this.submitData.provider.push(form.providerOne);
        }
        if (form.providerTwo) {
            this.submitData.provider.push(form.providerTwo);
        }
        if (form.providerThree) {
            this.submitData.provider.push(form.providerThree);
        }
        this.submitData.coalIndex.coalType = form.coalType;

        if (form.NCVBegin !== '') {
            this.submitData.coalIndex.NCV.begin = Number(form.NCVBegin);
        }
        if (form.NCVEnd !== '') {
            this.submitData.coalIndex.NCV.end = Number(form.NCVEnd);
        }
        if (form.ADVBegin !== '') {
            this.submitData.coalIndex.ADV.begin = Number(form.ADVBegin);
        }
        if (form.ADVEnd !== '') {
            this.submitData.coalIndex.ADV.end = Number(form.ADVEnd);
        }
        if (form.ASHBegin !== '') {
            this.submitData.coalIndex.ASH.begin = Number(form.ASHBegin);
        }
        if (form.ASHEnd !== '') {
            this.submitData.coalIndex.ASH.end = Number(form.ASHEnd);
        }
        if (form.RVBegin !== '') {
            this.submitData.coalIndex.RV.begin = Number(form.RVBegin);
        }
        if (form.RVEnd !== '') {
            this.submitData.coalIndex.RV.end = Number(form.RVEnd);
        }
        if (form.TMBegin !== '') {
            this.submitData.coalIndex.TM.begin = Number(form.TMBegin);
        }
        if (form.TMEnd !== '') {
            this.submitData.coalIndex.TM.end = Number(form.TMEnd);
        }
        if (form.RSBegin !== '') {
            this.submitData.coalIndex.RS.begin = Number(form.RSBegin);
        }
        if (form.RSEnd !== '') {
            this.submitData.coalIndex.RS.end = Number(form.RSEnd);
        }
        if (form.IMBegin !== '') {
            this.submitData.coalIndex.IM.begin = Number(form.IMBegin);
        }
        if (form.IMEnd !== '') {
            this.submitData.coalIndex.IM.end = Number(form.IMEnd);
        }
        if (form.ADSBegin !== '') {
            this.submitData.coalIndex.ADS.begin = Number(form.ADSBegin);
        }
        if (form.ADSEnd !== '') {
            this.submitData.coalIndex.ADS.end = Number(form.ADSEnd);
        }
        if (form.FCBegin !== '') {
            this.submitData.coalIndex.FC.begin = Number(form.FCBegin);
        }
        if (form.FCEnd !== '') {
            this.submitData.coalIndex.FC.end = Number(form.FCEnd);
        }
        if (form.GVBegin !== '') {
            this.submitData.coalIndex.GV.begin = Number(form.GVBegin);
        }
        if (form.GVEnd !== '') {
            this.submitData.coalIndex.GV.end = Number(form.GVEnd);
        }
        if (form.YVBegin !== '') {
            this.submitData.coalIndex.YV.begin = Number(form.YVBegin);
        }
        if (form.YVEnd !== '') {
            this.submitData.coalIndex.YV.end = Number(form.YVEnd);
        }
        if (form.AFTBegin !== '') {
            this.submitData.coalIndex.AFT.begin = Number(form.AFTBegin);
        }
        if (form.AFTEnd !== '') {
            this.submitData.coalIndex.AFT.end = Number(form.AFTEnd);
        }
        if (form.HGIBegin !== '') {
            this.submitData.coalIndex.HGI.begin = Number(form.HGIBegin);
        }
        if (form.HGIEnd !== '') {
            this.submitData.coalIndex.HGI.end = Number(form.HGIEnd);
        }
        if (form.CRCBegin !== '') {
            this.submitData.coalIndex.CRC.begin = Number(form.CRCBegin);
        }
        if (form.CRCEnd !== '') {
            this.submitData.coalIndex.CRC.end = Number(form.CRCEnd);
        }
        this.submitData.coalIndex.PS  = form.PS;

        if (form.trafficMode !== '') {
            this.submitData.trafficInfo.trafficMode = form.trafficMode * 1;
        }

        this.submitData.trafficInfo.sendStation = form.sendStation;
        this.submitData.trafficInfo.receiveStation = form.receiveStation;
        this.submitData.trafficInfo.freightPayer = form.freightPayer;
        if (form.freightPrice !== '') {
            this.submitData.trafficInfo.freightPrice = form.freightPrice * 1;
        }
        if (form.otherMiscFee !== '') {
            this.submitData.trafficInfo.otherMiscFee = form.otherMiscFee * 1;
        }

        this.submitData.trafficInfo.deliveryBegin = postDateFormatter(form.deliveryBegin);
        this.submitData.trafficInfo.deliveryEnd = postDateFormatter(form.deliveryEnd);
        if (form.contractUnitPrice !== '') {
            this.submitData.payInfo.contractUnitPrice = form.contractUnitPrice * 1;
        }

        this.submitData.payInfo.hasDeposit = form.hasDeposit;
        if (form.depositAmount !== '') {
            this.submitData.payInfo.depositAmount = form.depositAmount * 1;
        }
        if (form.payMode !== '') {
            this.submitData.payInfo.payMode = form.payMode * 1;
        }

        // if (form.paymentAmount !== '') {
        //     this.submitData.payInfo.paymentAmount = form.paymentAmount * 1;
        // }

        // this.submitData.payInfo.payNode = form.payNode;
        // this.submitData.payInfo.provisionAssess = form.provisionAssess;
        if (form.contractAmount !== '') {
            this.submitData.payInfo.contractAmount = form.contractAmount * 1;
        }

        this.submitData.payInfo.openAccountBank = form.openAccountBank;
        this.submitData.payInfo.bankAccountNo = form.bankAccountNo;

    };

    uploadFinished (event: any, fieldName1 : string, fieldName2 : string) {

        // 提交保存数据用
        this.submitData[fieldName1][fieldName2] = ({
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        });
    }

    uploadMoreFinished (event: any, fieldName1 : string, fieldName2 : string) {

        // 提交保存数据用
        this.submitData[fieldName1][fieldName2].push({
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        });

    }

    deleteImg(value: any, fieldName1 : string, fieldName2 : string) {
        this.submitData[fieldName1][fieldName2].map( (file: any, index: any ) => {
            if (file.filePath === value.value.filePath) {
                this.submitData[fieldName1][fieldName2].splice(index, 1)
            }
        })
    }
    deleteFile (fieldName1 : string, fieldName2 : string) {
        this.submitData[fieldName1][fieldName2] = null
    }

    deleteOtherContractFile(value: any, fieldName1 : string, fieldName2 : string) {
        this.submitData[fieldName1][fieldName2].map( (file: any, index: any ) => {
            if (file.filePath === value.filePath) {
                this.submitData[fieldName1][fieldName2].splice(index, 1)
            }
        })
    }

    upstreamSaveBusiness(successModal: any) {
        this.formErrors = validationErrorMessageHandler(this.businessApplicationForm, this.validationMessages)
        this.getSubmitData();
        let save: boolean = false;
        for (const key in this.formErrors) {
            if (!this.formErrors[key] && this.businessApplicationForm.errors === null) {
                save = true
            }else {
                save = false;
            }
        }
        if (save) {
            this.businessService.upstreamSaveBusiness(this.submitData).subscribe(
                (result) => {
                    this.modalService.open(successModal)

                },
                subscribeErrorHandler
            )
        }

    }
    submitAll: boolean = false;
    upstreamSubmitBusiness(successModal: any) {
        this.formErrors = validationErrorMessageHandler(this.businessApplicationForm, this.validationMessages, true)
        console.log(this.formErrors)
        // if ((this.submitData.deliveryBegin && !this.submitData.deliveryEnd) || (!this.submitData.deliveryBegin && this.submitData.deliveryEnd)) {
        //     this.businessApplicationForm.setErrors(this.validationMessages, { [ delivery: boolean ]: true})
        // }
        this.getSubmitData();
        let submit: boolean = true;
        for (const key in this.formErrors) {
            if (!this.formErrors[key] === false) {
                submit = false
                this.submitAll = true
            }
        }

        if (this.submitData.contractInfo.contractFile.length === 0) {
            submit = false;
            this.submitAll = true
        }
        if (this.submitData.payInfo.hasDeposit && !this.submitData.payInfo.payCertificatePic) {
            submit = false;
            this.submitAll = true
        }
        if (submit) {
            this.businessService.upstreamSubmitBusiness(this.submitData).subscribe(
                (result) => {
                    this.modalService.open(successModal)

                },

                subscribeErrorHandler
            )
        }

    }


}
