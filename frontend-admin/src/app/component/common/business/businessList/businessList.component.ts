import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';

import { startDateFormatter, postDateFormatter } from '../../../base-component/datePicker/dateFormater';
import { BusinessService } from '../../../../service/business/business.service';
import { CompanyService } from '../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';
import { getUserIdentity } from '../../../../service/stroage';


@Component({
    selector: 'business-manage',
    templateUrl: 'businessList.component.html'
})
export class BusinessListComponent implements OnInit {

    businessQueryForm : FormGroup;

    businessList: any;
    page : any = {
        currentPageNo : 1,
        total : 1
    };

    userIdentity: any = getUserIdentity;

    businessStatusList: any = [
        {'id' : 1,  'text' : '业务信息未提交' },
        {'id' : 2,  'text' : '业务信息已提交 等待审核'},
        {'id' : 3,  'text' : '业务信息审核不通过, 等待修改'},
        {'id' : 4,  'text' : '核心企业已审核 等待平台审核'},
        {'id' : 5,  'text' : '平台已审核 等待核心企业补充下游信息'},
        {'id' : 6,  'text' : '核心企业已补充下游信息，等待平台审核'},
        {'id' : 7,  'text' : '核心企业补充下游信息审核不通过, 等待修改'},
        {'id' : 8,  'text' : '平台下游信息已审核，等待资金方审核'},
        {'id' : 9,  'text' : '资金方审核不通过，等待核心企业修改补充下游信息'},
        {'id' : 10,  'text' : '资金方已审核，等待核心企业上传协议'},
        {'id' : 11,  'text' : '核心企业已上传协议，等待平台审核'},
        {'id' : 12,  'text' : '核心企业上传协议审核不通过, 等待修改'},
        {'id' : 13,  'text' : '平台审核通过，业务进入融资阶段'},
        {'id' : 14,  'text' : '资金方审核不通过，业务流程结束'},
        {'id' : 15,  'text' : '核心企业审核不通过，业务流程结束'}
    ]



    constructor(
        private fb: FormBuilder,
        private businessService: BusinessService
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.getUpstreamCompanies();
        this.getBridgeCompanies();
        this.searchBusinessQuery();

    }

    createForm() {
        this.businessQueryForm = this.fb.group({
            status: '',
            bridgeCompanyId: '',
            upStreamCompanyId: '',
            beginDate: '',
            endDate: ''
        })
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
    //获取上游企业单位
    upstreamCompanies: any;
    getUpstreamCompanies() {
        this.businessService.getCompaniesBySystemName('upstream').subscribe(
            (result) => {
                this.upstreamCompanies = result;
            },
            subscribeErrorHandler
        )
    }


    searchBusinessQuery() {

        const query : any = {
            pager: {
                pageNum : this.page.currentPageNo,
                pageSize : 10
            }
        };

        if (this.businessQueryForm.get('status').value) { query.status = Number(this.businessQueryForm.get('status').value) }
        if (this.businessQueryForm.get('bridgeCompanyId').value) { query.bridgeCompanyId = this.businessQueryForm.get('bridgeCompanyId').value }
        if (this.businessQueryForm.get('upStreamCompanyId').value) { query.upStreamCompanyId = this.businessQueryForm.get('upStreamCompanyId').value }
        if (this.businessQueryForm.get('beginDate').value) { query.beginDate = postDateFormatter(this.businessQueryForm.get('beginDate').value) }
        if (this.businessQueryForm.get('endDate').value) { query.endDate = postDateFormatter(this.businessQueryForm.get('endDate').value) }


        this.businessService.getBusinessQuery(query).subscribe(
            (result) => {
                this.businessList = result;
                this.page.total = result.pagination.totalCount
            },
            subscribeErrorHandler
        )

    }

}


