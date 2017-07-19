import { Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChange} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



import { CompanyService } from '../../../../service/companyInfo/company.service';
import { BusinessService } from '../../../../service/business/business.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';
import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';
import { validationErrorMessageHandler, isNumber, isFloat } from '../../../base-component/validators/validators'

import { notifyOptions } from '../../../../service/notify';

@Component({
    selector: 'complete-downstream',
    templateUrl: './completeDownstreamInfo.component.html'
})
export class CompleteDownstreamInfoComponent implements OnInit {

    completeDownstreamInfoForm : FormGroup;

    notifyOptions: any = notifyOptions;
    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private businessService: BusinessService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal,
        private notifyService: NotificationsService

    ) { }
    downstream: any = {
        downstreamBusiness: {}
    }
    ngOnInit(): void {
        this.route.params.subscribe((params: Params): any => {
            if (params.id) {
                this.submitData.businessId = params.id;
                this.businessService.getBusinessDetail( params.id).subscribe(
                    (result) => {
                        this.downstream = result;

                        this.createForm();
                        this.dictionaryAllDSCompanies();

                    },
                    subscribeErrorHandler
                );
            }
        });
        this.createForm();
        this.getCapitalCompanies();
    }


    findDepartments (downstreamCompanyName: string) {
        if (this.allDSCompanies && downstreamCompanyName) {
            let departmentResult: string = ''

            this.allDSCompanies.map( (department: any, index: any ) => {
                // console.log(department.companies.some((company) => company === downstreamCompanyName))
                return department.companies.some((company) => company === downstreamCompanyName) ? departmentResult = index : ''
            })

            this.completeDownstreamInfoForm.patchValue({
                departments : departmentResult
            })

            if (departmentResult) {
                this.selectedDepartment = this.allDSCompanies[departmentResult]
            }

        }
        return ''
    }

    createForm() {

        if (typeof this.downstream.downstreamBusiness === 'undefined' ) {
            this.downstream.downstreamBusiness = {}
        }

        if (this.downstream.downstreamBusiness && this.downstream.downstreamBusiness.depositPayCertificatePic) {
            this.submitData.depositPayCertificatePic = this.downstream.downstreamBusiness.depositPayCertificatePic
        }

        if (this.downstream.downstreamBusiness && this.downstream.downstreamBusiness.contractFiles) {
            this.submitData.contractFiles = this.downstream.downstreamBusiness.contractFiles
        }


        this.completeDownstreamInfoForm = this.fb.group({
            departments: ['',  Validators.required],
            downstreamCompanyName: [this.downstream.downstreamBusiness.downstreamCompanyName || '',  Validators.required],
            capitalCompanyId: [this.downstream.downstreamBusiness.capitalCompanyId || '',  Validators.required],
            contractAmount: [this.downstream.downstreamBusiness.contractAmount || null,  [ Validators.required, isNumber({min: 1, max: 9999999999}) ]],
            contractUnitPrice: [this.downstream.downstreamBusiness.contractUnitPrice || null,  [ Validators.required, isFloat({min: 1, max: 9999999999}) ]],
            deliveryBegin: [startDateFormatter(this.downstream.downstreamBusiness.deliveryBegin),  [Validators.required]],
            deliveryEnd: [startDateFormatter(this.downstream.downstreamBusiness.deliveryEnd),  [Validators.required]],
            returnedMoneyPeriod: [this.downstream.downstreamBusiness.returnedMoneyPeriod || null,  Validators.required],
            detectionOrganization: [this.downstream.downstreamBusiness.detectionOrganization,  Validators.required],
            hasDeposit: this.downstream.downstreamBusiness.hasDeposit,
            depositAmount: [this.downstream.downstreamBusiness.depositAmount,  [ Validators.required, isFloat({min: 1, max: 9999999999}) ]],
            numberInspection: [this.downstream.downstreamBusiness.numberInspection,  [ Validators.maxLength(300)]],
            qualityInspection: [this.downstream.downstreamBusiness.qualityInspection,  [ Validators.maxLength(300)]]

        });
        this.completeDownstreamInfoForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.completeDownstreamInfoForm, this.validationMessages));

    }

    formErrors: any = {};
    validationMessages: any = {
        'departments': {
            'required': '请选择'
        },
        'downstreamCompanyName': {
            'required': '请选择'
        },
        'capitalCompanyId': {
            'required': '请选择'
        },
        'contractAmount': {
            'required': '请填写合同量',
            'number': '请填写合同量'
        },
        'contractUnitPrice': {
            'required': '请填写合单价',
            'number': '请填写合单价'
        },
        'deliveryBegin': {
            'required': '请选择供货期间',
            'ngbDate' : '请选择供货期间'
        },
        'deliveryEnd': {
            'required': '请选择供货期间',
            'ngbDate' : '请选择供货期间'
        },
        'returnedMoneyPeriod': {
            'required': '请填写下游回款周期'
        },
        'detectionOrganization': {
            'required': '请填写监测机构'
        },
        'hasDeposit': {
            'required': '请选择是否下游缴纳保证金'
        },
        'depositAmount': {
            'required': '请填写保证金',
            'number': '请填写保证金'
        },
        'numberInspection': {
            'maxlength': '请输入300字以内'
        },
        'qualityInspection': {
            'maxlength': '请输入300字以内'
        }

    };


    submitData: any = {
        businessId : '',
        downstreamCompanyName: '',
        capitalCompanyId: '',
        contractAmount: '',
        contractUnitPrice: '',
        deliveryBegin: '',
        deliveryEnd: '',
        returnedMoneyPeriod: '',
        detectionOrganization: '',
        hasDeposit: false,
        depositAmount: '',
        numberInspection: '',
        qualityInspection: '',
        // depositPayCertificatePic: {},
        contractFiles: []
    };
    getSubmitData() {

        const form = this.completeDownstreamInfoForm;
        this.submitData.downstreamCompanyName =  form.get('downstreamCompanyName').value;
        this.submitData.capitalCompanyId =  form.get('capitalCompanyId').value;
        if (form.get('contractAmount').value !== null) {
            this.submitData.contractAmount =  Number(form.get('contractAmount').value);
        }
        if (form.get('contractUnitPrice').value !== null) {
            this.submitData.contractUnitPrice =  Number(form.get('contractUnitPrice').value);
        }
        this.submitData.deliveryBegin =  postDateFormatter(form.get('deliveryBegin').value);
        this.submitData.deliveryEnd =  postDateFormatter(form.get('deliveryEnd').value);
        if (form.get('returnedMoneyPeriod').value !== null) {
            this.submitData.returnedMoneyPeriod =  Number(form.get('returnedMoneyPeriod').value);
        }
        this.submitData.detectionOrganization =  form.get('detectionOrganization').value;
        this.submitData.hasDeposit =  form.get('hasDeposit').value;
        this.submitData.depositAmount =  Number(form.get('depositAmount').value);
        this.submitData.numberInspection =  form.get('numberInspection').value;
        this.submitData.qualityInspection =  form.get('qualityInspection').value;

    };

    uploadFinished (event: any, fieldName1 : string) {

        // 提交保存数据用
        this.submitData[fieldName1] = ({
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        });

    }

    uploadMoreFinished (event: any, fieldName1 : string) {

        // 提交保存数据用
        this.submitData[fieldName1].push({
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        });

    }
    deleteFile (fieldName1 : string) {
        this.submitData[fieldName1] = null
    }

    deleteMoreImg(value: any, fieldName1 : string) {

        this.submitData[fieldName1].map( (file: any, index: any ) => {
            if (file.filePath === value.value.filePath) {
                this.submitData[fieldName1].splice(index, 1)
            }
        })
    }


    allDSCompanies: any;
    dictionaryAllDSCompanies() {
        this.companyService.dictionaryAllDSCompanies().subscribe(
            (result) => {
                this.allDSCompanies = result;
                this.findDepartments(this.downstream.downstreamBusiness.downstreamCompanyName)

            },
            subscribeErrorHandler
        )
    }

    selectedDepartment: any = {companies : []};
    getDropDownDownstreamCompanies() {
        this.selectedDepartment = this.allDSCompanies[this.completeDownstreamInfoForm.get('departments').value]
    }

    capitalCompanies: any;
    getCapitalCompanies() {
        this.businessService.getCompaniesBySystemName('capital').subscribe(
            (result) => {
                this.capitalCompanies = result;
            },
            subscribeErrorHandler
        )
    }

    bridgeSaveDownstreamBusiness(successModal: any) {
        this.getSubmitData();

        this.businessService.bridgeSaveDownstreamBusiness(this.submitData).subscribe(
            (result) => {
                this.modalService.open(successModal)

            },
            subscribeErrorHandler
        )
    }
    submitAll: boolean = false;
    bridgeSubmitDownstreamBusiness(successModal: any) {

        this.formErrors = validationErrorMessageHandler(this.completeDownstreamInfoForm, this.validationMessages, true)
        this.getSubmitData();
        let submit: boolean = true;
        for (const key in this.formErrors) {
            if (!this.formErrors[key] === false) {
                submit = false
                this.submitAll = true
            }
        }
        if (this.submitData.contractFiles.length === 0) {
            submit = false;
            this.submitAll = true
        }
        if (this.submitData.hasDeposit && !this.submitData.depositPayCertificatePic) {
            submit = false;
            this.submitAll = true
        }

        if (submit) {
            this.businessService.bridgeSubmitDownstreamBusiness(this.submitData).subscribe(
                (result) => {
                    this.modalService.open(successModal)
                },
                subscribeErrorHandler
            )
        }


    }


}
