import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { YimeiModule } from '../upstream/yimei.module';



import { PlatformHomeComponent } from '../../component/platform/platformHome/platformHome.component';
import { PlatformSideBarComponent } from '../../component/platform/sideBar/sideBar.component';
import { PlatformHeaderComponent } from '../../component/platform/header/header.component';



// 账户安全

import { AccountHomeComponent } from '../../component/common/account/accountHome/accountHome.component';
import { AccountPhoneComponent } from '../../component/common/account/acountPhone/accountPhone.component';
import { AccountPasswordComponent } from '../../component/common/account/accountPassword/accountPassword.component';

// 企业信息审核
import { CompanyInfoListComponent } from '../../component/platform/company/companyInfoList/companyInfoList.component';
import { CompanyInfoPlatformComponent } from '../../component/platform/company/companyInfo/companyInfoPlatform.component';

// 企业信息准入审查
import { CompanyInvestigationComponent } from '../../component/platform/company/companyInvestigation/companyInvestigation.component';


// components 平台管理员管理企业用户管理
import { CompanyUserListComponent } from '../../component/platform/company/companyUserManage/companyUserList/companyUserList.component';
import { CompanyUserInfoComponent } from '../../component/platform/company/companyUserManage/companyUserInfo/companyUserInfo.component';


// components 平台管理员用户管理
import { PlatformUserListComponent } from '../../component/platform/platformUserManage/platformUserList/platformUserList.component';
import { PlatformUserCreateComponent } from '../../component/platform/platformUserManage/platformUserCreate/platformUserCreate.component';
import { PlatformUserEditComponent } from '../../component/platform/platformUserManage/platformUserEdit/platformUserEdit.component';



// 业务管理
import { BusinessListComponent } from '../../component/common/business/businessList/businessList.component';
import { BusinessDetailsComponent } from '../../component/common/business/businessDetails/businessDetails.component';

import { CreditorRightsDetailComponent  } from '../../component/common/business/creditorRightsDetail/creditorRightsDetail.component'


// 融资管理
import { FinancingListComponent } from '../../component/common/financing/financingList/financingList.component';
import { FinancingDetailComponent } from '../../component/common/financing/financingDetail/financingDetail.component';

// 还款管理
import { RepaymentManageComponent } from '../../component/common/repayment/repaymentManage/repaymentManage.component';
import { RepaymentDetailComponent } from '../../component/common/repayment/repaymentDetail/repaymentDetail.component';



const adminRoutes: Routes = [

    { path: '', redirectTo: '/accountHome', pathMatch: 'full' },
    { path: 'accountHome', component: AccountHomeComponent }, //账户安全
    { path: 'accountPhone', component: AccountPhoneComponent },
    { path: 'accountPassword', component: AccountPasswordComponent },


    { path: 'company', component: CompanyInfoListComponent}, //企业信息审核列表
    { path: 'company/:id', component: CompanyInfoPlatformComponent },
    { path: 'company/companyInvestigation/:id', component: CompanyInvestigationComponent },



    { path: 'companyUsers', component: CompanyUserListComponent }, //企业用户管理
    { path: 'companyUsers/:userId', component: CompanyUserListComponent }, //企业用户管理
    { path: 'companyUsers/createUsers', component: CompanyUserInfoComponent }, //创建企业用户


    { path: 'platformUsers', component: PlatformUserListComponent },
    // { path: 'platformUsers/:userId', component: PlatUserInfoComponent }, //平台用户管理
    { path: 'platformUsers/createUsers', component: PlatformUserCreateComponent }, //创建平台用户
    { path: 'platformUsers/editUsers/:userId', component: PlatformUserEditComponent }, //编辑平台用户


    { path: 'business', component: BusinessListComponent }, //业务管理
    { path: 'business/:id', component: BusinessDetailsComponent},
    { path: 'business/:bid/creditorRights/:cid', component: CreditorRightsDetailComponent },
    { path: 'business/:bid/financing/:fid', component: FinancingDetailComponent},
    { path: 'business/:bid/repayment/:rid', component: RepaymentDetailComponent},


    { path: 'financing', component: FinancingListComponent }, //融资管理
    { path: 'repayment', component: RepaymentManageComponent}


];


@NgModule({
  declarations: [
      PlatformHomeComponent,
      PlatformSideBarComponent,
      PlatformHeaderComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(adminRoutes),
      YimeiModule

  ],
  providers: [

  ],
  bootstrap: [PlatformHomeComponent]
})
export class PlatformHomeModule { }
