import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { NgbModule, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';



// provider
import { I18n, CustomDatepickerI18n } from '../../component/base-component/datePicker/dateI18N'
import { requestOptionsProvider } from '../../service/httpHeader'

// service
import { UploadService } from '../../service/upload/upload.service'
import { SideBarService } from '../../service/sideBar/sideBar.service'

import { UserService } from '../../service/user/user.service';
import { UserSecurityService } from '../../service/userSecurity/userSecurity.service'

import { CompanyService } from '../../service/companyInfo/company.service';
import { BusinessService } from '../../service/business/business.service';
import { FinancingService } from '../../service/financing/financing.service';
import { CreditorRightService } from '../../service/creditorRight/creditorRight.service';


// pipe
import { PipeSystemType, PipeHidePartialMobile } from '../../pipe/user';
import { PipeCompanyInfoStatus, PipeCompanyType, PipeOperationType,  PipeTrafficMode, PipePayMode } from '../../pipe/company';
import { PipeSubstringId, PipeBusinessStatus, PipeAuditStatus, PipeFinancingStatus, PipeRepaymentStatus} from '../../pipe/business';




// base - components
import { ProvinceDropdownComponent } from '../../component/base-component/provinceDropdown/province.component';
import { FileUpload } from '../../component/base-component/fileUpload/fileUpload.component';
import { ImageShow } from '../../component/base-component/imageShow/imageShow.component';




// components 账户管理
import { AccountHomeComponent } from '../../component/common/account/accountHome/accountHome.component';
import { AccountPhoneComponent } from '../../component/common/account/acountPhone/accountPhone.component';
import { AccountPasswordComponent } from '../../component/common/account/accountPassword/accountPassword.component';


// components 企业信息管理
import { CompanyComponent } from '../../component/upstream/company/company.component';
import { CompanyInfoAddComponent } from '../../component/common/company/companyInfoAdd/companyInfoAdd.component'
import { CompanyInfoDetailComponent } from '../../component/common/company/companyInfoDetail/companyInfoDetail.component'
import { CompanyAdminComponent } from '../../component/common/company/companyAdmin/companyAdmin.component';



// components 企业员工管理
import { StaffManageComponent } from '../../component/common/staff/staffManage/staffManage.component';
import { StaffCreateComponent } from '../../component/common/staff/staffCreate/staffCreate.component';
import { StaffEditComponent } from '../../component/common/staff/staffEdit/staffEdit.component';


// components 业务管理

import { BusinessApplicationComponent } from '../../component/common/business/businessApplication/businessApplication.component';

import { CompleteDownstreamInfoComponent } from '../../component/bridge/business/completeDownstreamInfo/completeDownstreamInfo.component'


import { BusinessListComponent } from '../../component/common/business/businessList/businessList.component';
import { BusinessDetailsComponent } from '../../component/common/business/businessDetails/businessDetails.component';
import { CoalIndexComponent } from '../../component/common/company/coal/coalIndex/coalIndex.component';

import { UpstreamContractInfoComponent } from '../../component/common/business/businessDetails/subtab/upstreamContractInfo.component';
import { DownstreamContractInfoComponent } from '../../component/common/business/businessDetails/subtab/downstreamContractInfo.component';
import { SupplementContractInfoComponent } from '../../component/common/business/businessDetails/subtab/supplementContractInfo.component';
import { AuditListComponent } from '../../component/common/business/businessDetails/subtab/auditList.component';
import { CreditorRightListComponent } from '../../component/common/business/businessDetails/subtab/creditorRightList.component';
import { FinancingInfoComponent } from '../../component/common/business/businessDetails/subtab/financingInfo.component';
import { DownstreamPaymentInfoComponent } from '../../component/common/business/businessDetails/subtab/downstreamPaymentInfo.component';
import { RepaymentInfoComponent } from '../../component/common/business/businessDetails/subtab/repaymentInfo.component';


// 债权管理
import { CreditorRightsDetailComponent  } from '../../component/common/business/creditorRightsDetail/creditorRightsDetail.component'
import { AddCreditorRightsComponent } from '../../component/bridge/creditorRight/addCreditorRights/addCreditorRights.component';


// 融资管理
import { FinancingListComponent } from '../../component/common/financing/financingList/financingList.component';
import { FinancingDetailComponent } from '../../component/common/financing/financingDetail/financingDetail.component';
import { CheckLoanInfoComponent } from '../../component/common/financing/financingDetail/subtab/checkLoanInfo.component';
import { LoanDetailsInfoComponent } from '../../component/common/financing/financingDetail/subtab/loanDetailsInfo.component';

import { AddFinancingComponent } from '../../component/bridge/financing/addFinancing/addFinancing.component'


// 还款管理
import { RepaymentManageComponent } from '../../component/common/repayment/repaymentManage/repaymentManage.component';
import { RepaymentDetailComponent } from '../../component/common/repayment/repaymentDetail/repaymentDetail.component';

import { RepaymentAddComponent } from '../../component/common/repayment/repaymentAdd/repaymentAdd.component';




// 平台企业信息审核
import { CompanyInfoListComponent } from '../../component/platform/company/companyInfoList/companyInfoList.component';
import { CompanyInfoPlatformComponent } from '../../component/platform/company/companyInfo/companyInfoPlatform.component';

// 平台企业信息准入审查
import { CompanyInvestigationComponent } from '../../component/platform/company/companyInvestigation/companyInvestigation.component';
import { CompanyQualificationsComponent } from '../../component/platform/company/companyInvestigation/subtab/companyQualifications.component';
import { IndustryInfoComponent } from '../../component/platform/company/companyInvestigation/subtab/industryInfo.component';
import { CompanyPartnerComponent } from '../../component/platform/company/companyInvestigation/subtab/companyPartner.component';
import { CompanyTrustComponent      } from '../../component/platform/company/companyInvestigation/subtab/companyTrust.component';
import { ActualControllerComponent  } from '../../component/platform/company/companyInvestigation/subtab/actualController.component';
import { FieldResearchComponent     } from '../../component/platform/company/companyInvestigation/subtab/fieldResearch.component';
import { CooperationRecordComponent } from '../../component/platform/company/companyInvestigation/subtab/cooperationRecord.component';


// components 平台管理员管理企业用户管理
import { CompanyUserListComponent } from '../../component/platform/company/companyUserManage/companyUserList/companyUserList.component';
import { CompanyUserInfoComponent } from '../../component/platform/company/companyUserManage/companyUserInfo/companyUserInfo.component';


// components 平台管理员用户管理
import { PlatformUserListComponent } from '../../component/platform/platformUserManage/platformUserList/platformUserList.component';
import { PlatformUserCreateComponent } from '../../component/platform/platformUserManage/platformUserCreate/platformUserCreate.component';
import { PlatformUserEditComponent } from '../../component/platform/platformUserManage/platformUserEdit/platformUserEdit.component';


@NgModule({
    declarations: [
        FileUpload,
        ProvinceDropdownComponent,
        ImageShow,

        PipeSystemType,
        PipeHidePartialMobile,
        PipeCompanyInfoStatus,
        PipeOperationType,
        PipeCompanyType,
        PipeBusinessStatus,
        PipeTrafficMode,
        PipePayMode,
        PipeAuditStatus,
        PipeSubstringId,
        PipeFinancingStatus,
        PipeRepaymentStatus,


        AccountHomeComponent,
        AccountPhoneComponent,
        AccountPasswordComponent,

        CompanyComponent,
        CompanyInfoAddComponent,
        CompanyInfoDetailComponent,
        CompanyAdminComponent,

        StaffManageComponent,
        StaffCreateComponent,
        StaffEditComponent,


        BusinessApplicationComponent,
        CompleteDownstreamInfoComponent,

        BusinessListComponent,
        BusinessDetailsComponent,
        CoalIndexComponent,

        UpstreamContractInfoComponent,
        DownstreamContractInfoComponent,
        SupplementContractInfoComponent,
        AuditListComponent,
        FinancingInfoComponent,
        DownstreamPaymentInfoComponent,
        RepaymentInfoComponent,


        AddFinancingComponent,
        FinancingListComponent,
        FinancingDetailComponent,
        LoanDetailsInfoComponent,
        CheckLoanInfoComponent,

        CreditorRightListComponent,
        CreditorRightsDetailComponent,
        AddCreditorRightsComponent,

        RepaymentAddComponent,
        RepaymentManageComponent,
        RepaymentDetailComponent,



        CompanyInfoListComponent,
        CompanyInfoPlatformComponent,

        CompanyInvestigationComponent,
        CompanyQualificationsComponent,
        IndustryInfoComponent,
        CompanyPartnerComponent,
        CompanyTrustComponent,
        ActualControllerComponent,
        FieldResearchComponent,
        CooperationRecordComponent,

        CompanyUserListComponent,
        CompanyUserInfoComponent,

        PlatformUserListComponent,
        PlatformUserCreateComponent,
        PlatformUserEditComponent

    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        NgbModule.forRoot(),
        BrowserAnimationsModule,
        SimpleNotificationsModule.forRoot()

    ],
    providers: [
        requestOptionsProvider,
        UploadService,
        UserService,
        UserSecurityService,
        SideBarService,

        CompanyService,
        BusinessService,
        FinancingService,
        CreditorRightService,

        I18n,
        {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}
    ]
})
export class YimeiModule { }

