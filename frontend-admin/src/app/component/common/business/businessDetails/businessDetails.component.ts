import {Component, OnInit, Output} from '@angular/core';
import { Validators , FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';


import { CompanyService } from '../../../../service/companyInfo/company.service';
import { BusinessService } from '../../../../service/business/business.service';
import { subscribeErrorHandler } from '../../../../service/errorHandler';
import { getUserIdentity } from '../../../../service/stroage';

import { notifyOptions } from '../../../../service/notify';


@Component({
    selector: 'business-details',
    templateUrl: './businessDetails.component.html'
})
export class BusinessDetailsComponent {

    currentTab : string = 'upstream';

    userIdentity: any = getUserIdentity;
    notifyOptions: any = notifyOptions;

    bridgeAuditUpstreamBusinessForm: FormGroup;
    platformAuditUpstreamBusinessForm: FormGroup;
    platformAuditDownstreamBusinessForm: FormGroup;

    platformAuditFinancingProtocolForm: FormGroup;
    capitalAuditDownstreamBusinessForm: FormGroup;
    businessAuditList: any = [{
        opinion: ''
    }]

    business: any = {
        upstreamBusiness: {
            provider: [],
            contractInfo: {},
            payInfo: {},
            trafficInfo: {},
            coalIndex: {
                coalPlace: {} ,
                coalType: {}
            }
        },
        financingProtocol: {
            financingProtocolPic: [],
            repayProtocolPic: []
        }
    };

    coal: any = {
        NCV: {},
        ADV: {},
        ASH: {},
        RV: {},
        TM: {},
        RS: {},
        IM: {},
        ADS: {},
        FC: {},
        GV: {},
        YV: {},
        AFT: {},
        HGI: {},
        PS: '',
        CRC: {}
    };


    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private businessService: BusinessService,
        private route: ActivatedRoute,
        private router: Router,
        private notifyService: NotificationsService
    ) { }


    changeTab(tab : string): void {
        this.currentTab = tab;
    }

    ngOnInit(): void {
        this.createForm();
        this.route.params.subscribe((params: Params): any => {
            if (params.id) {
                this.getBusiness(params.id);
            }
        });
        this.route.queryParams.subscribe((params: Params): any => {
            if (params.tab && params.tab === 'creditorRightList') {
                this.currentTab = params.tab;
            }
        });

    }

    getBusiness (id : string) {
        this.businessService.getBusinessDetail( id ).subscribe(
            (result) => {
                this.business = result;
                this.coal = this.business.upstreamBusiness.coalIndex
            },
            subscribeErrorHandler
        );

        this.businessService.getBusinessAuditList(id).subscribe(
            (result) => {
                this.businessAuditList = result;
            },
            subscribeErrorHandler
        );
    }

    createForm() {
        if (typeof this.business.financingProtocol === 'undefined' ) {
            this.business.financingProtocol = {}
        }

        if (this.business.financingProtocol && this.business.financingProtocol.financingProtocolPic) {
            this.business.financingProtocol.financingProtocolPic = this.business.financingProtocol.financingProtocolPic
        }
        if (this.business.financingProtocol && this.business.financingProtocol.repayProtocolPic) {
            this.business.financingProtocol.repayProtocolPic = this.business.financingProtocol.repayProtocolPic
        }

        this.bridgeAuditUpstreamBusinessForm = this.fb.group({
            auditOpinion : ['', []]
        });
        this.platformAuditUpstreamBusinessForm = this.fb.group({
            auditOpinion : ['', []]
        });
        this.platformAuditDownstreamBusinessForm = this.fb.group({
            auditOpinion : ['', []]
        });
        this.capitalAuditDownstreamBusinessForm = this.fb.group({
            auditOpinion : ['', []]
        })
        this.platformAuditFinancingProtocolForm = this.fb.group({
            auditOpinion : ['', []]
        })
    }

    bridgeAuditUpstream (auditResult : number) {

        this.businessService.bridgeAuditBusinessUpstream(this.business._id, auditResult, this.bridgeAuditUpstreamBusinessForm.get('auditOpinion').value).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
                setTimeout(() => {this.router.navigate(['/business'])}, 3000)
            },
            subscribeErrorHandler
        );
    }

    platformAuditUpstream (auditResult : number) {

        this.businessService.platformAuditBusinessUpstream(this.business._id, auditResult, this.platformAuditUpstreamBusinessForm.get('auditOpinion').value).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
                setTimeout(() => {this.router.navigate(['/business'])}, 3000)
            },
            subscribeErrorHandler
        );
    }

    auditFile: any = [];
    uploadAuditFileFinished (event: any) {
        // 提交保存数据用

        this.auditFile.push({
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        });

    }
    deleteAuditFileFile(value: any) {
        this.auditFile.map( (file: any, index: any ) => {
            if (file.filePath === value.value.filePath) {
                this.auditFile.splice(index, 1)
            }
        })
    }

    uploadMoreFinished (event: any, fieldName1 : string, fieldName2 : string) {
        // 提交保存数据用
        if (!this.business[fieldName1]) {
            this.business[fieldName1] = {};
        }
        if (!this.business[fieldName1][fieldName2]) {
            this.business[fieldName1][fieldName2] = [];
        }
        this.business[fieldName1][fieldName2].push({
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        });

    }
    deleteFile (fieldName1 : string) {
        this[fieldName1] = null
    }
    deleteMoreImg(value: any, fieldName1 : string, fieldName2 : string) {

        this.business[fieldName1][fieldName2].map( (file: any, index: any ) => {
            if (file.filePath === value.value.filePath) {
                this.business[fieldName1][fieldName2].splice(index, 1)
            }
        })
    }


    platformAuditDownstream (auditResult : number) {

        const auditFile = this.auditFile;
        this.businessService.platformAuditBusinessDownstream( this.business._id, auditResult, this.platformAuditDownstreamBusinessForm.get('auditOpinion').value, auditFile ).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
                setTimeout(() => {this.router.navigate(['/business'])}, 3000)

            },
            subscribeErrorHandler
        );
    }

    platformAuditFinancingProtocol (auditResult : number) {

        this.businessService.platformAuditBusinessFinancingProtocol(this.business._id, auditResult, this.platformAuditFinancingProtocolForm.get('auditOpinion').value).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
                setTimeout(() => {this.router.navigate(['/business'])}, 3000)

            },
            subscribeErrorHandler
        );
    }


    capitalAuditDownstream (auditResult : number) {

        this.businessService.capitalAuditBusinessDownstream(this.business._id, auditResult, this.capitalAuditDownstreamBusinessForm.get('auditOpinion').value).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
                setTimeout(() => {this.router.navigate(['/business'])}, 3000)

            },
            subscribeErrorHandler
        );
    }

    bridgeSaveFinancingProtocol() {

        const financingProtocolPic = this.business.financingProtocol.financingProtocolPic;
        const repayProtocolPic = this.business.financingProtocol.repayProtocolPic;
        this.businessService.bridgeSaveFinancingProtocol( this.business._id,  financingProtocolPic, repayProtocolPic ).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
                setTimeout(() => {this.router.navigate(['/business'])}, 3000)
            },
            subscribeErrorHandler
        );
    }
    bridgeSubmitFinancingProtocol() {

        const financingProtocolPic = this.business.financingProtocol.financingProtocolPic;
        const repayProtocolPic = this.business.financingProtocol.repayProtocolPic;
        this.businessService.bridgeSubmitFinancingProtocol( this.business._id,  financingProtocolPic, repayProtocolPic ).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
                setTimeout(() => {this.router.navigate(['/business'])}, 3000)
            },
            subscribeErrorHandler
        );
    }


}
