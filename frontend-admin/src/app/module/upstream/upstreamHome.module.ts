import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { YimeiModule } from './yimei.module';
import { getUserIdentity } from '../../service/stroage';




// components
import { HomeComponent } from '../../component/common-layout/home/home.component';

// layout - components
import { HeaderLoginComponent } from '../../component/common-layout/header/header-login.component';
import { SideBarComponent } from '../../component/common-layout/sideBar/sideBar.component';



import { AccountHomeComponent } from '../../component/common/account/accountHome/accountHome.component';
import { AccountPhoneComponent } from '../../component/common/account/acountPhone/accountPhone.component';
import { AccountPasswordComponent } from '../../component/common/account/accountPassword/accountPassword.component';



// companyInfo
import { CompanyComponent } from '../../component/upstream/company/company.component';
import { CompanyAdminComponent } from '../../component/common/company/companyAdmin/companyAdmin.component';

import { StaffManageComponent } from '../../component/common/staff/staffManage/staffManage.component';
import { StaffCreateComponent } from '../../component/common/staff/staffCreate/staffCreate.component';
import { StaffEditComponent } from '../../component/common/staff/staffEdit/staffEdit.component';


import { BusinessApplicationComponent } from '../../component/common/business/businessApplication/businessApplication.component';
import { BusinessListComponent } from '../../component/common/business/businessList/businessList.component';
import { BusinessDetailsComponent } from '../../component/common/business/businessDetails/businessDetails.component';

import { CompleteDownstreamInfoComponent } from '../../component/bridge/business/completeDownstreamInfo/completeDownstreamInfo.component'

// 债权
import { CreditorRightsDetailComponent  } from '../../component/common/business/creditorRightsDetail/creditorRightsDetail.component'
import { AddCreditorRightsComponent } from '../../component/bridge/creditorRight/addCreditorRights/addCreditorRights.component';


// 融资管理
import { AddFinancingComponent } from '../../component/bridge/financing/addFinancing/addFinancing.component'
import { FinancingListComponent } from '../../component/common/financing/financingList/financingList.component';
import { FinancingDetailComponent } from '../../component/common/financing/financingDetail/financingDetail.component';

//  融资还款管理
import { RepaymentAddComponent } from '../../component/common/repayment/repaymentAdd/repaymentAdd.component';
import { RepaymentDetailComponent } from '../../component/common/repayment/repaymentDetail/repaymentDetail.component';
import { RepaymentManageComponent } from '../../component/common/repayment/repaymentManage/repaymentManage.component';






const bridgeRoutes: Routes = [

    { path: '', redirectTo: '/business', pathMatch: 'full' },
    { path: 'accountHome', component: AccountHomeComponent },
    { path: 'accountPhone', component: AccountPhoneComponent },
    { path: 'accountPassword', component: AccountPasswordComponent },

    { path: 'company', component: CompanyComponent },
    { path: 'accountHome/companyAdmin', component: CompanyAdminComponent },

    { path: 'staff', component: StaffManageComponent },
    { path: 'staff/staffEdit/:userId', component: StaffEditComponent },
    { path: 'staff/staffCreate', component: StaffCreateComponent },

    { path: 'business', component: BusinessListComponent },
    { path: 'business/:id', component: BusinessDetailsComponent },
    { path: 'business/:bid/creditorRights/:cid', component: CreditorRightsDetailComponent },
    { path: 'business/:bid/financing/:fid', component: FinancingDetailComponent},
    { path: 'business/:bid/repayment/:rid', component: RepaymentDetailComponent},

    { path: 'financing', component: FinancingListComponent},
    { path: 'repayment', component: RepaymentManageComponent},

    { path: 'businessAdd', component: BusinessApplicationComponent },
    { path: 'business/edit/:id', component: BusinessApplicationComponent },

    { path: 'businessDownstreamAdd/:id', component: CompleteDownstreamInfoComponent },

    { path: 'creditorRightsAdd/:bid', component: AddCreditorRightsComponent },
    { path: 'business/:bid/creditorRights/edit/:cid', component: AddCreditorRightsComponent },

    { path: 'financingAdd/:bid', component: AddFinancingComponent },
    { path: 'business/:bid/financing/edit/:fid', component: AddFinancingComponent },
    { path: 'repaymentAdd/:bid', component: RepaymentAddComponent}

];




@NgModule({
    declarations : [
        HomeComponent,
        HeaderLoginComponent,
        SideBarComponent
    ],
    imports      : [
        BrowserModule,
        RouterModule.forRoot( bridgeRoutes),
        YimeiModule
    ],
    providers    : [],
    bootstrap    : [HomeComponent]
})
export class UpstreamHomeModule { }

