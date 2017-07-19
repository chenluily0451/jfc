import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import { validationErrorMessageHandler, mobilePattern, idCardpattern, isNumber, twoDecimal } from '../../../base-component/validators/validators'

import { CompanyService } from '../../../../service/companyInfo/company.service';
import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';
import { subscribeErrorHandler } from '../../../../service/errorHandler'

import { notifyOptions } from '../../../../service/notify';





@Component({
    selector: 'company-info-add',
    templateUrl: './companyInfoAdd.component.html'

})
export class CompanyInfoAddComponent implements OnInit {
    maxDate : any = {year: 2099, month: 12, day: 31};

    companyInfoAddForm : FormGroup;

    companyType: any = []; //获取企业类型字典

    @Input() company: any;
    @Output() save: any = new EventEmitter ();


    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private modalService: NgbModal
    ) { }

    ngOnInit(): void {
        this.getCompanyTypeList();
        this.createForm();
    }

    getCompanyTypeList () {
        this.companyService.dictionaryCompanyType().subscribe(
            (result) => {
                this.companyType = result;
            },
            subscribeErrorHandler
        );
    }


    createForm() {

        if (typeof this.company.license === 'undefined') {
            this.company.license = {}
        }
        if (typeof this.company.legalPerson === 'undefined') {
            this.company.legalPerson = {}
        }
        if (typeof this.company.authPerson === 'undefined') {
            this.company.authPerson = {}
        }

        if (this.company.province ) { this.newCompanyInfo.province = this.company.province; }
        if (this.company.city ) { this.newCompanyInfo.city = this.company.city; }
        if (this.company.district ) { this.newCompanyInfo.district = this.company.district; }


        if (typeof this.company.license.operationLicensePic !== 'undefined') {
            this.newCompanyInfo.license.operationLicensePic = this.company.license.operationLicensePic
        }
        if (typeof this.company.license.organLicensePic !== 'undefined') {
            this.newCompanyInfo.license.organLicensePic = this.company.license.organLicensePic
        }
        if (typeof this.company.license.unionLicensePic !== 'undefined') {
            this.newCompanyInfo.license.unionLicensePic = this.company.license.unionLicensePic
        }
        if (typeof this.company.license.bankLicensePic !== 'undefined') {
            this.newCompanyInfo.license.bankLicensePic = this.company.license.bankLicensePic
        }


        if (typeof this.company.legalPerson.legalPersonIdFrontSidePic !== 'undefined') {
            this.newCompanyInfo.legalPerson.legalPersonIdFrontSidePic = this.company.legalPerson.legalPersonIdFrontSidePic
        }
        if (typeof this.company.legalPerson.legalPersonIdReverseSidePic !== 'undefined') {
            this.newCompanyInfo.legalPerson.legalPersonIdReverseSidePic = this.company.legalPerson.legalPersonIdReverseSidePic
        }


        if (typeof this.company.authPerson.authPersonIdFrontSidePic !== 'undefined') {
            this.newCompanyInfo.authPerson.authPersonIdFrontSidePic = this.company.authPerson.authPersonIdFrontSidePic
        }
        if (typeof this.company.authPerson.authPersonIdReverseSidePic !== 'undefined') {
            this.newCompanyInfo.authPerson.authPersonIdReverseSidePic = this.company.authPerson.authPersonIdReverseSidePic
        }

        if (typeof this.company.authPerson.authDocumentPic !== 'undefined') {
            this.newCompanyInfo.authPerson.authDocumentPic = this.company.authPerson.authDocumentPic
        }


        this.companyInfoAddForm = this.fb.group( {
            companyName: [ this.company.companyName, [ Validators.required ]],
            registerCapital: [ this.company.registerCapital || '', [ Validators.required, isNumber({min: 0.01, max: 100000000000}), twoDecimal()]],
            companyType: [this.company.companyType || (this.company.companyType === 0 ? 0 : ''), [ Validators.required]],

            scope:  this.company.scope,
            founded: [ startDateFormatter(this.company.founded), [ Validators.required]],

            registerAddress: [this.company.registerAddress, [ Validators.required ]],

            unionLicenseCode: [ this.company.license.unionLicenseCode, [ Validators.required, Validators.maxLength(18)]],
            registerOrgan: [ this.company.license.registerOrgan, [ Validators.required]],
            // lastCheck: [startDateFormatter(this.company.license.lastCheck), [ Validators.required]],
            operationType: [this.company.license.operationType || '', [ Validators.required]],
            operationBegin: startDateFormatter(this.company.license.operationBegin),
            operationEnd: startDateFormatter(this.company.license.operationEnd),

            legalPersonName: [this.company.legalPerson.legalPersonName, [ Validators.required, Validators.maxLength(10) ]],
            legalPersonId: [this.company.legalPerson.legalPersonId, [ Validators.required, Validators.pattern(idCardpattern) ]],
            legalPersonPhone: [this.company.legalPerson.legalPersonPhone, [ Validators.required, Validators.pattern(mobilePattern) ]],

            authPersonName: [this.company.authPerson.authPersonName, [ Validators.maxLength(10) ]],
            authPersonId: [this.company.authPerson.authPersonId, [ Validators.pattern(idCardpattern)  ]],
            authPersonPhone: [this.company.authPerson.authPersonPhone, [ Validators.pattern(mobilePattern) ]]

        });

        this.companyInfoAddForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.companyInfoAddForm, this.validationMessages));

    }


    formErrors: any = { };

    validationMessages: any = {
        'companyName': {
            'required': '请输入企业全称',
            'maxlength': '1-50个字段以内'
        },
        'registerAddress': {
            'required': '注册地址',
            'maxlength': '1-50个字段以内'
        },
        'companyType': {
            'required': '请输入企业类型'
        },
        'registerCapital': {
            'required': '请输入注册资本',
            'number' : '请输入千亿以内的值',
            'twoDecimal': '最多两位小数'
        },
        'founded': {
            'required': '请输入成立时间'
        },
        'province': {
            'required': '请输入省'
        },
        'city': {
            'required': '请输入市'
        },
        'district': {
            'required': '请输入区'
        },

        'operationType': {
            'required': '请输入营业期限'
        },
        'operationBegin': '',
        'operationEnd': '',
        // 'lastCheck': {
        //     'required': '请输入最近年检'
        // },
        'registerOrgan': {
            'required': '请输入登记机关'
        },
        'unionLicenseCode': {
            'required': '请输入注册号(统一社会信用代码)',
            'maxlength': '请输入18个字以内'
        },
        'operationLicensePic': '',
        'organLicensePic': '',
        'unionLicensePic': '',
        'bankLicensePic': '',
        'legalPersonName': {
            'required': '请输入法人代表',
            'maxlength': '1-10个字段以内'
        },
        'legalPersonId': {
            'required': '请输入法人代表身份证号',
            'maxlength': '1-20个字段以内',
            'pattern' : '请输入正确的身份证号码'
        },
        'legalPersonPhone': {
            'required': '请输入法人手机',
            'pattern': '请输入正确的手机号码'
        },
        'legalPersonIdFrontSidePic': '',
        'legalPersonIdReverseSidePic': '',

        'authPersonName': {
            'maxlength': '1-10个字段以内'
        },
        'authPersonId': {
            'maxlength': '1-20个字段以内',
            'pattern' : '请输入正确的身份证号码'
        },
        'authPersonPhone': {
            'pattern': '请输入正确的手机号码'
        },
        'authDocumentPic': '',
        'authPersonIdFrontSidePic': '',
        'authPersonIdReverseSidePic': ''

    };

    newCompanyInfo: any = {
        companyName: '',
        companyType: null,
        registerCapital: null,
        scope: '',
        founded: null,
        province: '',
        city: '',
        district: '',
        registerAddress: '',

        license: {
            operationType: null,
            operationBegin: null,
            operationEnd: null,
            // lastCheck: null,
            registerOrgan: '',
            unionLicenseCode: '',
            operationLicensePic: null,
            organLicensePic: null,
            unionLicensePic: null,
            bankLicensePic: null
        },
        legalPerson: {
            legalPersonName: '',
            legalPersonId: '',
            legalPersonPhone: '',
            legalPersonIdFrontSidePic: null,
            legalPersonIdReverseSidePic: null
        },
        authPerson: {
            authPersonName: '',
            authPersonId: '',
            authPersonPhone: '',
            authDocumentPic: null,
            authPersonIdFrontSidePic: null,
            authPersonIdReverseSidePic: null
        }
    };


    companyInfoPostFormatter() {

        const form = this.companyInfoAddForm;

        this.newCompanyInfo.founded = postDateFormatter(form.value.founded);
        // this.newCompanyInfo.license.lastCheck = postDateFormatter(form.value.lastCheck);
        this.newCompanyInfo.license.operationBegin = postDateFormatter(form.value.operationBegin);
        this.newCompanyInfo.license.operationEnd = postDateFormatter(form.value.operationEnd);


        this.newCompanyInfo.companyName = form.value.companyName;
        if (form.value.companyType !== '') {
            this.newCompanyInfo.companyType = form.value.companyType * 1;
        }
        if (form.value.registerCapital !== '') {
            this.newCompanyInfo.registerCapital = form.value.registerCapital * 1;
        }

        this.newCompanyInfo.scope = form.value.scope;

        this.newCompanyInfo.registerAddress = form.value.registerAddress;

        if (form.value.operationType !== '') {
            this.newCompanyInfo.license.operationType = form.value.operationType * 1;
        }

        this.newCompanyInfo.license.registerOrgan = form.value.registerOrgan;
        this.newCompanyInfo.license.unionLicenseCode = form.value.unionLicenseCode;




        this.newCompanyInfo.legalPerson.legalPersonName = form.value.legalPersonName;
        this.newCompanyInfo.legalPerson.legalPersonId = form.value.legalPersonId;
        this.newCompanyInfo.legalPerson.legalPersonPhone = form.value.legalPersonPhone;



        this.newCompanyInfo.authPerson.authPersonName = form.value.authPersonName;
        this.newCompanyInfo.authPerson.authPersonId = form.value.authPersonId;
        this.newCompanyInfo.authPerson.authPersonPhone = form.value.authPersonPhone;




    }





    //    保存
    saveUpstreamCompanyInfo() {

        this.companyInfoPostFormatter();

        this.companyService.saveUpstreamCompanyInfo( this.newCompanyInfo).subscribe(
            (result) => {
                this.save.emit()

            },
            subscribeErrorHandler
        );

    }


    //    提交
    submitAll: any = false;
    auditUpstreamCompanyInfo(successModal: any) {

        this.formErrors = validationErrorMessageHandler(this.companyInfoAddForm, this.validationMessages, true)
        this.companyInfoPostFormatter();
        let submit: boolean = true;
        for (const key in this.formErrors) {
            if (!this.formErrors[key] === false) {
                submit = false
                this.submitAll = true
            }
        }

        if (!this.newCompanyInfo.license.operationLicensePic ||
            !this.newCompanyInfo.license.organLicensePic ||
            !this.newCompanyInfo.license.unionLicensePic ||
            !this.newCompanyInfo.license.bankLicensePic ||
            !this.newCompanyInfo.legalPerson.legalPersonIdFrontSidePic ||
            !this.newCompanyInfo.legalPerson.legalPersonIdReverseSidePic

        ) {
            submit = true;
            this.submitAll = true
        }
        if (submit) {
            this.companyService.auditUpstreamCompanyInfo(this.newCompanyInfo).subscribe(
                (result) => {
                    this.modalService.open(successModal);
                    this.save.emit()
                },
                subscribeErrorHandler
            );
        }

    }


    uploadFinished (event: any, fieldName1 : string, fieldName2 : string) {

        // 提交保存数据用
        this.newCompanyInfo[fieldName1][fieldName2] = {
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        }

    }


    deleteFile (fieldName1 : string, fieldName2 : string) {
        this.newCompanyInfo[fieldName1][fieldName2] = null
    }



    chooseProvince(event: any) {

        this.newCompanyInfo.province = event.province;
        this.newCompanyInfo.city = event.city;
        this.newCompanyInfo.district = event.district;

    }


}




