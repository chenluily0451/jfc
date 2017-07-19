import { Component, OnInit} from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


import { validationErrorMessageHandler, isNumber, isInt, matchCoadIndex, twoDecimal, oneDecimal} from '../../../base-component/validators/validators';
import { subscribeErrorHandler } from '../../../../service/errorHandler';

import { BusinessService } from '../../../../service/business/business.service';
import { CreditorRightService } from '../../../../service/creditorRight/creditorRight.service';
import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';
import { aliOss } from '../../../../service/stroage';


@Component({
  selector: 'add-creditor-rights',
  templateUrl: './addCreditorRights.component.html'
})
export class AddCreditorRightsComponent  implements OnInit {
    aliOss : any = aliOss;

    quantityForm: FormGroup;
    qualityForm: FormGroup;
    bondValuationForm: FormGroup;
    errMessage: string = '';

    quantityFormErrorMessage: string;
    qualityFormErrorMessage: string;
    quantityDocument: any = []; // 货物数量单据
    quantityDocumentLen: number = 0;
    qualityDocument: any = []; // 货物质量单据
    qualityDocumentLen: number = 0;
    quantityEditStatus: boolean;
    quantityEditStatusIndex: number;
    qualityEditStatus: boolean;
    qualityEditStatusIndex: number;
    quantityInput: boolean = false;
    qualityInput: boolean = false;
    deleteDocument: any;
    deleteDocumentIndex: number;
    modalRef: NgbModalRef;
    modalRef1: NgbModalRef;
    submitError: string;
    totalQuantityAmount: number = 0.00;
    quantityReceiptsBeginDate: any;
    qualityReceiptsBeginDate: any;
    currentCheck: boolean;

    business: any = {};

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private businessService: BusinessService,
        private creditorRightService: CreditorRightService,
        private modalService: NgbModal

    ) {}
    ngOnInit() {
        this.formInit();
        this.bondValuationFormInit();
        this.calculationAmount();

        this.route.params.subscribe((params: Params): any => {
            if (params.bid) {
                this.getBusiness(params.bid);
            }
            if (params.cid) {
                this.creditorRightService.getCreditorRightDetail(params.cid).subscribe(
                    (result) => {
                        this.modifySetValue(result)
                    },
                    subscribeErrorHandler
                );
            }
        });
    }

    modifySetValue(result: any) {

        this.bondValuationForm.patchValue({
            'evaluationAmount': result.evaluationAmount,
            'totalQuantity': result.totalQuantity
        })
        this.quantityDocument = result.quantity;
        this.quantityDocumentLen = result.quantity.length;

        this.qualityDocument = result.quality;
        this.qualityDocumentLen = result.quality.length;

        for (let i = 0 ; i < this.qualityDocumentLen; i++) {
            this.qualityDocument[i].NCVBegin = this.qualityDocument[i].coalIndex.NCV.begin;
            this.qualityDocument[i].NCVEnd = this.qualityDocument[i].coalIndex.NCV.end;
            this.qualityDocument[i].ADSBegin = this.qualityDocument[i].coalIndex.ADS.begin;
            this.qualityDocument[i].ADSEnd = this.qualityDocument[i].coalIndex.ADS.end;
            this.qualityDocument[i].ADVBegin = this.qualityDocument[i].coalIndex.ADV.begin;
            this.qualityDocument[i].ADVEnd = this.qualityDocument[i].coalIndex.ADV.end;
            this.qualityDocument[i].AFTBegin = this.qualityDocument[i].coalIndex.AFT.begin;
            this.qualityDocument[i].AFTEnd = this.qualityDocument[i].coalIndex.AFT.end;
            this.qualityDocument[i].ASHBegin = this.qualityDocument[i].coalIndex.ASH.begin;
            this.qualityDocument[i].ASHEnd = this.qualityDocument[i].coalIndex.ASH.end;
            this.qualityDocument[i].CRCBegin = this.qualityDocument[i].coalIndex.CRC.begin;
            this.qualityDocument[i].CRCEnd = this.qualityDocument[i].coalIndex.CRC.end;
            this.qualityDocument[i].FCBegin = this.qualityDocument[i].coalIndex.FC.begin;
            this.qualityDocument[i].FCEnd = this.qualityDocument[i].coalIndex.FC.end;
            this.qualityDocument[i].GVBegin = this.qualityDocument[i].coalIndex.GV.begin;
            this.qualityDocument[i].GVEnd = this.qualityDocument[i].coalIndex.GV.end;
            this.qualityDocument[i].HGIBegin = this.qualityDocument[i].coalIndex.HGI.begin;
            this.qualityDocument[i].HGIEnd = this.qualityDocument[i].coalIndex.HGI.end;
            this.qualityDocument[i].IMBegin = this.qualityDocument[i].coalIndex.IM.begin;
            this.qualityDocument[i].IMEnd = this.qualityDocument[i].coalIndex.IM.end;
            this.qualityDocument[i].PS = this.qualityDocument[i].coalIndex.PS;
            this.qualityDocument[i].RSBegin = this.qualityDocument[i].coalIndex.RS.begin;
            this.qualityDocument[i].RSEnd = this.qualityDocument[i].coalIndex.RS.end;
            this.qualityDocument[i].RVBegin = this.qualityDocument[i].coalIndex.RV.begin;
            this.qualityDocument[i].RVEnd = this.qualityDocument[i].coalIndex.RV.end;
            this.qualityDocument[i].TMBegin = this.qualityDocument[i].coalIndex.TM.begin;
            this.qualityDocument[i].TMEnd = this.qualityDocument[i].coalIndex.TM.end;
            this.qualityDocument[i].YVBegin = this.qualityDocument[i].coalIndex.YV.begin;
            this.qualityDocument[i].YVEnd = this.qualityDocument[i].coalIndex.YV.end;
        }

    }

    getBusiness (id : string) {
        this.businessService.getBusinessDetail( id ).subscribe(
            (result) => {
                this.business = result;
            },
            subscribeErrorHandler
        );
    }

    formInit() {

        const numberLetterValidater =  /^[0-9a-zA-Z]+$/;
        const number =  /^\d+(\.\d{0,2})?$/;

        this.quantityForm = this.fb.group({
            'receiptsBeginDate' : ['', [Validators.required]],
            'receiptsEndDate' : ['', [Validators.required]],
            'carAmount' : ['', [Validators.required, Validators.maxLength(8), Validators.pattern(number)]],
            'receiptAmount' : ['', [Validators.required, Validators.maxLength(8), isNumber({min: 0.01, max: 9999999}), twoDecimal() ]],
            'receiptFile' : this.fb.array([])
        });

        this.qualityForm = this.fb.group(
            {
            'receiptsBeginDate' : ['', [Validators.required]],
            'receiptsEndDate' : ['', [Validators.required]],
            'calculateAmount' : ['', [Validators.maxLength(8), Validators.pattern(number)]],
            'checkAmount' : ['', [Validators.maxLength(8), Validators.pattern(number)]],
            'coalReportPresetWay' : ['', [Validators.required]],
            'isFromDownstreamObtain' : [false, [Validators.required]],
            'receiptFile' : this.fb.array([]),
            'NCVBegin': ['', [Validators.required, isNumber({min: 1, max: 7500}), isInt()]],
            'NCVEnd'  : ['', [Validators.required, isNumber({min: 1, max: 7500}), isInt()]],
            'ADVBegin': ['', [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            'ADVEnd'  : ['', [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            'ASHBegin': ['', [isNumber({min: 0.1, max: 50}), oneDecimal()]],
            'ASHEnd'  : ['', [isNumber({min: 0.1, max: 50}), oneDecimal()]],
            'RVBegin' : ['', [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            'RVEnd'   : ['', [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            'TMBegin': ['', [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            'TMEnd'  : ['', [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            'RSBegin': ['', [isNumber({min: 0.01, max: 10}), twoDecimal()]],
            'RSEnd'  : ['', [isNumber({min: 0.01, max: 10}), twoDecimal()]],
            'IMBegin': ['', [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            'IMEnd'  : ['', [isNumber({min: 0.01, max: 50}), twoDecimal()]],
            'ADSBegin': ['', [isNumber({min: 0.01, max: 10}), twoDecimal()]],
            'ADSEnd'  : ['', [isNumber({min: 0.01, max: 10}), twoDecimal()]],
            'FCBegin': ['', [isNumber({min: 1, max: 100}), isInt()]],
            'FCEnd'  : ['', [isNumber({min: 1, max: 100}), isInt()]],
            'GVBegin': ['', [isNumber({min: 1, max: 100}), isInt()]],
            'GVEnd'  : ['', [isNumber({min: 1, max: 100}), isInt()]],
            'YVBegin': ['', [isNumber({min: 1, max: 100}), isInt()]],
            'YVEnd'  : ['', [isNumber({min: 1, max: 100}), isInt()]],
            'AFTBegin': ['', [isNumber({min: 900, max: 1800}), isInt()]],
            'AFTEnd'  : ['', [isNumber({min: 900, max: 1800}), isInt()]],
            'HGIBegin': ['', [isNumber({min: 1, max: 99}), isInt()]],
            'HGIEnd'  : ['', [isNumber({min: 1, max: 99}), isInt()]],
            'PS': ['', [Validators.maxLength(10)]],
            'CRCBegin': ['', [isNumber({min: 1, max: 100}), isInt()]],
            'CRCEnd'  : ['', [isNumber({min: 1, max: 100}), isInt()]]
            },
            { validator: matchCoadIndex()}
        );
        this.quantityForm.valueChanges.subscribe(data => {
            this.quantityFormErrors = validationErrorMessageHandler(this.quantityForm, this.quantityFormMessages)

        });
        this.qualityForm.valueChanges.subscribe(data => {
            this.qualityFormErrors = validationErrorMessageHandler(this.qualityForm, this.qualityFormMessages)

        });

    }
    bondValuationFormInit() {
        const number =  /^\d+(\.\d{0,2})?$/;
        this.bondValuationForm = this.fb.group({
            'evaluationAmount' : ['', [Validators.required, Validators.maxLength(20), Validators.pattern(number)]],
            'totalQuantity' : [0.00, [Validators.required, Validators.maxLength(20), Validators.pattern(number)]]
        });
        this.bondValuationForm.valueChanges.subscribe(data => {
            this.bondValuationFormErrors = validationErrorMessageHandler(this.bondValuationForm, this.bondValuationFormMessage)

        });
    }
    quantityFormErrors: any = {};
    qualityFormErrors: any = {};
    bondValuationFormErrors: any = {};
    bondValuationFormMessage: any = {

        'evaluationAmount' : {
            'required'  : '债权估值必填',
            'maxlength' : '债权估值最多20 位',
            'pattern': '债权估值只能是数字'
        },
        'totalQuantity' : {
            'required'  : '债权总吨数必填',
            'maxlength' : '债权总吨数最多20 位',
            'pattern': '债权总吨数只能是数字'
        }
    };
    quantityFormMessages: any = {

        'receiptsBeginDate' : {
            'required'  : '单据开始日期必填',
            'ngbDate': '单据开始日期必填'
        },
        'receiptsEndDate' : {
            'required'  : '单据结束日期必填',
            'ngbDate': '单据结束日期必填'
        },
        'carAmount' : {
            'required'  : '车/船数量必填',
            'maxlength' : '车/船数量最多8位',
            'pattern': '车/船数量只能是数字'
        },
        'receiptAmount' : {
            'required'  : '单据数量必填',
            'maxlength' : '单据数量最多8位',
            'twoDecimal': '单据数量最多两位小数',
            'number' : '单据数量请输入正确的数字'
        }
    };
    qualityFormMessages: any = {

        'receiptsBeginDate' : {
            'required'  : '单据开始日期必填',
            'ngbDate': '单据开始日期必填'
        },
        'receiptsEndDate' : {
            'required'  : '单据结束日期必填',
            'ngbDate': '单据结束日期必填'
        },
        'calculateAmount' : {
            'maxlength' : '计量数量验收数量最多8位',
            'pattern': '计量数量只能是数字且最多位两位小数'
        },
        'coalReportPresetWay' : {
            'required'  : '煤炭报告呈现形式必填'
        },
        'checkAmount': {
            'maxlength' : '验收数量最多8位',
            'pattern': '验收数量只能是数字且最多位两位小数'
        },
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
        }

    };

    get quantityImageList() : FormArray {
        return this.quantityForm.get('receiptFile') as FormArray
    }
    get qualityImageList() : FormArray {
        return this.qualityForm.get('receiptFile') as FormArray
    }

    // 上传

    uploadFinished (event: any , target: any) {
        // 提交保存数据用
        if (target === 'quantity') {
            const tempFormGroup = this.fb.group({
                'filePath'    : event.value.fileName,
                'fileName'    : event.value.realname,
                'fileExtName' : event.value.realname.split('.').pop()
            });

            this.quantityImageList.push(tempFormGroup)

        } else if (target === 'quality') {
            const tempFormGroup = this.fb.group({
                'filePath'    : event.value.fileName,
                'fileName'    : event.value.realname,
                'fileExtName' : event.value.realname.split('.').pop()
            });

            this.qualityImageList.push(tempFormGroup)

        }

    }

    // 删除

    deleteFile(i: any , target: any) {

        if (target === 'quantity') {
            this.quantityImageList.removeAt(i)
        } else if (target === 'quality') {
            this.qualityImageList.removeAt(i)
        }
    }

    // 单据显示控制

    receiptControl(type: string, action: string) {

        if (type === 'quantityInput' && action === 'open' ) {
            this.quantityInput = true;
        }
        if (type === 'quantityInput' && action === 'close' ) {
            this.quantityInput = false;
        }
        if (type === 'qualityInput' && action === 'open' ) {
            this.qualityInput = true;
        }
        if (type === 'qualityInput' && action === 'close' ) {
            this.qualityInput = false;
        }
        this.formInit();
        this.quantityReceiptsBeginDate = '';
        this.qualityReceiptsBeginDate = '';


    }

    // 计算债权总吨数
    calculationAmount() {

        for (let i = 0; i < this.quantityDocument.length ; i++) {

            this.totalQuantityAmount = this.totalQuantityAmount + this.quantityDocument[i].receiptAmount * 1;

        }

        this.bondValuationForm.patchValue({
            'totalQuantity' : this.totalQuantityAmount.toFixed(2)
        });
        this.totalQuantityAmount = 0.00;
    }

    // 添加货物数量单据

    quantityModalSubmit(quantityTableContent: any) {
        const obj: object = {};
        if (this.quantityForm.get('receiptFile').value.length === 0 ) {
            this.quantityFormErrorMessage = '上传单据图片';
            return false;
        }else {
            this.quantityFormErrorMessage = '';
        }
        for (const field in this.quantityForm.controls) {

            if (field === 'receiptsBeginDate' || field === 'receiptsEndDate') {
                obj[field] = postDateFormatter(this.quantityForm.get(field).value)
            }else {

                if (field === 'receiptFile') {
                    obj[field] = this.quantityForm.get(field).value
                }else {
                    obj[field] = this.quantityForm.get(field).value * 1
                }
            }

        }
        if (this.quantityEditStatus) {
            this.quantityDocument.splice(this.quantityEditStatusIndex, 1, obj)
            this.quantityEditStatus = false;
        }else {
            this.quantityDocument.push(obj);
            this.calculationAmount()
        }

        this.quantityDocumentLen = this.quantityDocument.length;
        this.formInit();
        this.quantityInput = false;
    }

    // 添加货物质量单据

    qualityModalSubmit() {
        const obj: object = {};
        if (this.qualityForm.get('receiptFile').value.length === 0 ) {
            this.qualityFormErrorMessage = '上传单据图片';
            return false;
        }else {
            this.qualityFormErrorMessage = '';
        }

        for (const field in this.qualityForm.controls) {

            if (field === 'receiptsBeginDate' || field === 'receiptsEndDate') {
                obj[field] = postDateFormatter(this.qualityForm.get(field).value)
            }else {

                if (field === 'receiptFile' || field === 'PS' || field === 'coalReportPresetWay') {
                    obj[field] = this.qualityForm.get(field).value
                }else if (field === 'isFromDownstreamObtain') {
                    obj[field] = this.qualityForm.get(field).value
                }else {
                    obj[field] = this.qualityForm.get(field).value * 1
                }
            }

        }
        if (this.qualityEditStatus) {
            this.qualityDocument.splice(this.qualityEditStatusIndex, 1, obj);
            this.qualityEditStatus = false;
        }else {
            this.qualityDocument.push(obj);
        }

        this.qualityDocumentLen = this.qualityDocument.length;
        this.formInit();
        this.qualityInput = false;
    }


    // 编辑货物数量单据

    quantityDocumentEdit(i: number) {
        this.quantityEditStatus = true;
        this.quantityEditStatusIndex = i;
        this.quantityInput = true;

       const tempPictureFb = this.quantityDocument[i].receiptFile.map(picture => this.fb.group(picture));
        // 初始化
        this.quantityForm.patchValue({
            receiptsEndDate: startDateFormatter(this.quantityDocument[i].receiptsEndDate),
            receiptAmount: this.quantityDocument[i].receiptAmount,
            carAmount: this.quantityDocument[i].carAmount
        });

        this.quantityReceiptsBeginDate = startDateFormatter(this.quantityDocument[i].receiptsBeginDate);
        this.quantityForm.setControl('receiptFile', this.fb.array(tempPictureFb));

    }

    // 编辑货物质量单据

    qualityDocumentEdit(i: number) {

        this.qualityEditStatus = true;
        this.qualityEditStatusIndex = i;
        this.qualityInput = true;

        const obj: object = {};
        const tempPictureFb = this.qualityDocument[i].receiptFile.map(picture => this.fb.group(picture));

        // 初始化

        for (const field in this.qualityForm.controls) {

            if (this.qualityForm.controls.hasOwnProperty(field)) {

                if ( field === 'receiptsEndDate' ) {
                    obj[field] = startDateFormatter(this.qualityDocument[i][field])
                }else if (field === 'receiptsBeginDate') {
                    this.qualityReceiptsBeginDate = startDateFormatter(this.qualityDocument[i].receiptsBeginDate);
                    obj[field] = startDateFormatter(this.qualityDocument[i][field])
                }else {
                    obj[field] = this.qualityDocument[i][field];
                }

            }

        }

        this.qualityForm.patchValue(obj);
        this.qualityForm.setControl('receiptFile', this.fb.array(tempPictureFb));

    }

    // 删除确认弹框

    open(content: any, document: any , i: number) {

        this.modalRef = this.modalService.open(content);

        if (document === 'quantity') {

            this.deleteDocument = 'quantity';
            this.deleteDocumentIndex = i;
            this.quantityInput = false;

        }else if (document === 'quality') {

            this.deleteDocument = 'quality';
            this.deleteDocumentIndex = i;
            this.qualityInput = false;
        }
    }

    // 删除单据列表

    documentDelete(document: any, i: number) {
        if (document === 'quality') {
            this.qualityDocument.splice(i, 1);
            this.qualityDocumentLen = this.qualityDocument.length;
        }else if (document === 'quantity') {
            this.quantityDocument.splice(i, 1);
            this.quantityDocumentLen = this.quantityDocument.length;
        };

        this.calculationAmount();
        this.modalRef.dismiss();
    }

    // 提交数据
    submitAll(successModal: any) {

        if (!this.bondValuationForm.valid) {
            this.submitError = '请填写正确的债权信息！';
            return false;
        }else {
            this.submitError = '';
        }

        if (this.quantityDocumentLen === 0 || this.qualityDocumentLen === 0) {
            this.submitError = '请添加单据！';
            return false;
        } else {
            this.submitError = ''
        }
        const qualityDocumentObj = [];
        for (let i = 0; i < this.qualityDocument.length; i++) {

            const qualityIndex = {
                'calculateAmount' : this.qualityDocument[i].calculateAmount,
                'checkAmount' : this.qualityDocument[i].checkAmount,
                'receiptFile' : this.qualityDocument[i].receiptFile,
                'receiptsBeginDate' : this.qualityDocument[i].receiptsBeginDate,
                'receiptsEndDate' : this.qualityDocument[i].receiptsEndDate,
                'coalReportPresetWay': this.qualityDocument[i].coalReportPresetWay,
                'isFromDownstreamObtain': this.qualityDocument[i].isFromDownstreamObtain,
                'coalIndex': {
                    'ADS' : {'begin': this.qualityDocument[i].ADSBegin, 'end' : this.qualityDocument[i].ADSEnd},
                    'ADV' : {'begin': this.qualityDocument[i].ADVBegin, 'end' : this.qualityDocument[i].ADVEnd},
                    'AFT' : {'begin': this.qualityDocument[i].AFTBegin, 'end' : this.qualityDocument[i].AFTEnd},
                    'ASH': {'begin': this.qualityDocument[i].ASHBegin, 'end' : this.qualityDocument[i].ASHEnd},
                    'CRC': {'begin': this.qualityDocument[i].CRCBegin, 'end' : this.qualityDocument[i].CRCEnd},
                    'FC' : {'begin': this.qualityDocument[i].FCBegin, 'end' : this.qualityDocument[i].FCEnd},
                    'GV' : {'begin': this.qualityDocument[i].GVBegin, 'end' : this.qualityDocument[i].GVEnd},
                    'HGI': {'begin': this.qualityDocument[i].HGIBegin, 'end' : this.qualityDocument[i].HGIEnd},
                    'IM': {'begin': this.qualityDocument[i].IMBegin, 'end' : this.qualityDocument[i].IMEnd},
                    'NCV': {'begin': this.qualityDocument[i].NCVBegin, 'end' : this.qualityDocument[i].NCVEnd},
                    'PS': this.qualityDocument[i].PS,
                    'RS': {'begin': this.qualityDocument[i].RSBegin, 'end' : this.qualityDocument[i].RSEnd},
                    'RV': {'begin': this.qualityDocument[i].RVBegin, 'end' : this.qualityDocument[i].RVEnd},
                    'TM' : {'begin': this.qualityDocument[i].TMBegin, 'end' : this.qualityDocument[i].TMEnd},
                    'YV': {'begin': this.qualityDocument[i].YVBegin, 'end' : this.qualityDocument[i].YVEnd}
                }

            };
            qualityDocumentObj.push(qualityIndex)
        }

        const obj = {
            'evaluationAmount': +this.bondValuationForm.get('evaluationAmount').value,
            'totalQuantity': +this.bondValuationForm.get('totalQuantity').value,
            'businessId': this.business._id,
            'status' : this.business.status,
            'quantity' : this.quantityDocument,
            'quality' : qualityDocumentObj
        };

        this.creditorRightService.saveNewCreditorRight(obj).subscribe(
            (result) => {
                if (result) {
                    this.modalRef1 = this.modalService.open(successModal, {backdrop : 'static'});
                }
            },
            subscribeErrorHandler
        );
    }

}
