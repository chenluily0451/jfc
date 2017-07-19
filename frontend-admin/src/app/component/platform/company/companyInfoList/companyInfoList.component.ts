import { Component , OnInit} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';

import { CompanyService } from '../../../../service/companyInfo/company.service'
import { subscribeErrorHandler } from '../../../../service/errorHandler'
import { validationErrorMessageHandler } from '../../../base-component/validators/validators'


@Component({
    selector: 'company-info-list',
    templateUrl: 'companyInfoList.component.html'
})
export class CompanyInfoListComponent implements OnInit {

    companyQueryForm : FormGroup;

    companyStatusDictionary : any = [];
    companyList : any = [];
    systemType : any = [];

    page : any = {
        currentPageNo : 1,
        total : 1
    }




    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService
    ) { }


    ngOnInit(): void {
        this.getDictionary();
        this.createForm();
        this.getCompanyList();
    }

    getDictionary () {
        this.companyService.dictionaryCompanyInfoStatus().subscribe(
            (result) => {
                this.companyStatusDictionary = result;
            }
        );
        this.companyService.dictionarySystemType().subscribe(
            (result) => {
                this.systemType = result;
            }
        )
    }

    createForm () {
        this.companyQueryForm = this.fb.group({
            'unionLicenseCode'  : ['', [Validators.maxLength(100)]],
            'companyName'   : ['', [Validators.maxLength(100)]],
            'companyStatus' : ['', []],
            'systemType'   : ['', []]
        });

        this.companyQueryForm.valueChanges.subscribe(data => this.formErrors = validationErrorMessageHandler(this.companyQueryForm, this.validationMessages) );
    }

    getCompanyList () {

        const query : any = {
            pageNum : this.page.currentPageNo,
            pageSize : 10
        };

        if (this.companyQueryForm.get('unionLicenseCode').value) { query.unionLicenseCode = this.companyQueryForm.get('unionLicenseCode').value }
        if (this.companyQueryForm.get('companyName').value) { query.companyName = this.companyQueryForm.get('companyName').value }
        if (this.companyQueryForm.get('companyStatus').value) { query.companyStatus = this.companyQueryForm.get('companyStatus').value }
        if (this.companyQueryForm.get('systemType').value) { query.systemId = this.companyQueryForm.get('systemType').value }

        this.companyService.getCompanyList(query).subscribe(
            (result) => {
                this.companyList = result.items;
                this.page.total = result.pagination.totalCount
            }
        );
    }


    formErrors: any = {};

    validationMessages: any = {
        'unionLicenseCode': {
            'maxlength': '请输入50个字'
        },
        'companyName': {
            'maxlength': '请输入50个字'
        }
    }




}
