import { Component, OnInit} from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import { BusinessService } from '../../../../service/business/business.service';
import { UserService } from '../../../../service/user/user.service';
import { FinancingService } from '../../../../service/financing/financing.service';

import { subscribeErrorHandler } from '../../../../service/errorHandler';

import {financingCreditorRightsList } from '../../../../service/stroage';
import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';
import { validationErrorMessageHandler , twoDecimal , isNumber } from '../../../base-component/validators/validators';
import { aliOss } from '../../../../service/stroage';

@Component({
  selector: 'add-financing',
  templateUrl: './addFinancing.component.html'
})
export class AddFinancingComponent  implements OnInit {

    financingForm: FormGroup;
    financingFormErrors: any = {};
    financingFormMessages: any = {
        'actualVal' : {
            'required'  : '请填写债权实际货值',
            'twoDecimal': '债权实际货值最多包含两位小数',
            'number' : '债权实际货值输入有误'
        },
        'financingAmount' : {
            'required'  : '请填写融资金额',
            'twoDecimal': '融资金额最多包含两位小数',
            'number' : '融资金额输入有误'
        },
        'obtained' : {
            'required'  : '请选择单据是否获取'
        },
        'invoiceNumber' : {
            'required' : ' 挨打的所'
        },
        'invoiceCost' : {
            'twoDecimal': '发票金额最多包含两位小数',
            'number': '发票金额输入有误'
        }
    };
    errorMessage : string ;
    financingCreditorRightsListObj: any ;
    financingCreditorRightsListIds: any = [];
    modalRef1: NgbModalRef;
    businessObj: any = {};
    financingDetail: any = {};
    capitalStatus: number;
    financingId: number;
    aliOss : any = aliOss;
    invoiceArray: any = [''];

    constructor (
        private fb: FormBuilder,
        public userService: UserService,
        public fs: FinancingService,
        private businessService: BusinessService,
        private modalService: NgbModal,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {

        this.formInit();
        this.route.params.subscribe((params: Params): any => {

            if (params.bid) {

                // 提交
                this.getBusiness(params.bid);
                this.financingCreditorRightsListObj = financingCreditorRightsList;
                for (let i = 0 ; i < this.financingCreditorRightsListObj.length; i++ ) {
                    this.financingCreditorRightsListIds.push(this.financingCreditorRightsListObj[i]._id)
                }
            }

            if (params.fid) {

                // 修改
                this.fs.getFinancingDetail(params.fid).subscribe(
                    (result) => {

                        if (result.capitalRaise.status === 2 || result.capitalRaise.status === 4) {
                            this.capitalStatus = 2;
                            this.financingId = result.capitalRaise._id;
                            this.financingDetail = result.capitalRaise;
                            this.setValue();
                            this.financingCreditorRightsListObj = result.debtList;

                            for (let i = 0 ; i < this.financingCreditorRightsListObj.length; i++ ) {
                                this.financingCreditorRightsListIds.push(this.financingCreditorRightsListObj[i]._id)
                            }

                            if (result.capitalRaise.invoiceNo.length > 0) {

                                this.invoiceArray = result.capitalRaise.invoiceNo

                            }else {

                                this.invoiceArray = [''];

                            }

                        }

                    },
                    subscribeErrorHandler
                )
            }

        });


    }

    setValue () {

        this.financingForm.patchValue({
            financingAmount : this.financingDetail.capitalRaisingAmount,
            actualVal : this.financingDetail.debtActualValue,
            receiptsStartDate: startDateFormatter(this.financingDetail.capitalRaisingBegin),
            receiptsEndDate: startDateFormatter(this.financingDetail.capitalRaisingEnd),
            obtained: this.financingDetail.receiptAcquired,
            invoiceNo: this.financingDetail.invoiceNumber,
            invoiceAmount: this.financingDetail.invoiceCost

        });

        const transferPics = this.financingDetail.goodTransferPic.map(picture => this.fb.group(picture));

        this.financingForm.setControl('transferPics', this.fb.array(transferPics));

        // 判断是否开票显示系列字段

        const invoiceScanPics = this.financingDetail.invoicePic.map(picture => this.fb.group(picture));

        this.financingForm.patchValue({

            invoiceNumber: this.financingDetail.invoiceNo,
            invoiceCost: this.financingDetail.invoiceAmount

        });

        this.financingForm.setControl('invoiceScanPics', this.fb.array(invoiceScanPics));

    }

    getBusiness (id : string) {
        this.businessService.getBusinessDetail( id ).subscribe(
            (result) => {
                this.businessObj = result;
            },
            subscribeErrorHandler
        );
    }
    formInit() {
        this.financingForm = this.fb.group(
            {
                'financingAmount' : [, [isNumber({min: 0.01, max: 9999999}), Validators.required, twoDecimal()]],
                'actualVal' : ['', [isNumber({min: 0.01, max: 9999999}), Validators.required, twoDecimal()]],
                'obtained' : ['', [Validators.required]],
                'receiptsStartDate' : [],
                'receiptsEndDate' : [],
                'invoiceNumber' : [''],
                'invoiceCost' : ['', [isNumber({min: 0.01, max: 9999999}), twoDecimal()]],
                'transferPics' : this.fb.array([]),
                'invoiceScanPics' : this.fb.array([])
            }
        );
        this.financingForm.valueChanges.subscribe(data => this.financingFormErrors = validationErrorMessageHandler(this.financingForm, this.financingFormMessages));
    }



    get quantityImageList() : FormArray {
        return this.financingForm.get('transferPics') as FormArray
    }
    get qualityImageList() : FormArray {
        return this.financingForm.get('invoiceScanPics') as FormArray
    }

    // 上传

    uploadFinished (event: any , target: any) {
        // 提交保存数据用
        if (target === 'transferPics') {
            const tempFormGroup = this.fb.group({
                'filePath'    : event.value.fileName,
                'fileName'    : event.value.realname,
                'fileExtName' : event.value.realname.split('.').pop()
            });

            this.quantityImageList.push(tempFormGroup)

        } else if (target === 'invoiceScanPics') {
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

        if (target === 'transferPics') {
            this.quantityImageList.removeAt(i)
        } else if (target === 'invoiceScanPics') {
            this.qualityImageList.removeAt(i)
        }
    }

    // 增加发票号

    addInvoice(i: number) {
        this.invoiceArray.push('')
    }

    // 删除发票号
    minusInvoice(i: number) {
        if (this.invoiceArray.length === 1) {
            return false;
        }
        this.invoiceArray.splice(i, 1);
    }

    // 获取发票号码

    getInvoceNumber(event: any, i: number) {

        this.invoiceArray[i] = event.target.value;

    }

    // 保存

    submit(successModal: any) {
        if (this.financingForm.get('transferPics').value.length === 0) {
            this.errorMessage = '请上传货权转移证明';
            return false;
        }else {
            this.errorMessage = '';
        }

        if (this.financingForm.get('financingAmount').value * 1 > this.financingForm.get('actualVal').value * 1) {
            this.errorMessage = '融资金额不能大于债券实际货值';
            return false;
        }else {
            this.errorMessage = '';
        }


        const financingObj = {
            'businessId' : this.businessObj._id,
            'capitalRaisingAmount' : +this.financingForm.get('financingAmount').value,
            'debtActualValue' : +this.financingForm.get('actualVal').value,
            'capitalRaisingBegin' : postDateFormatter(this.financingForm.get('receiptsStartDate').value),
            'capitalRaisingEnd' : postDateFormatter(this.financingForm.get('receiptsEndDate').value),
            'receiptAcquired' : this.financingForm.get('obtained').value === '0' ? false : true,
            'invoiceNo' : this.invoiceArray,
            'invoiceAmount' : +this.financingForm.get('invoiceCost').value,
            'invoicePic' : this.financingForm.get('invoiceScanPics').value,
            'goodTransferPic': this.financingForm.get('transferPics').value,
            'debtIds': this.financingCreditorRightsListIds
        }
        if (this.capitalStatus === 2 || this.capitalStatus === 4) {
            const field = '_id';
            financingObj[field] = this.financingId;
        }

        this.fs.bridgeSubmitNewFinancing( financingObj ).subscribe(
            (result) => {
                if (result) {
                    this.modalRef1 = this.modalService.open(successModal, {backdrop : 'static'});
                }
            },
            subscribeErrorHandler
        );

    }

}
