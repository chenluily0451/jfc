import { Component , Input , OnInit } from '@angular/core';

import { UploadService } from '../../../service/upload/upload.service'
import { CompanyService } from '../../../service/companyInfo/company.service'
import { SideBarService  } from '../../../service/sideBar/sideBar.service'

import { subscribeErrorHandler } from '../../../service/errorHandler'


@Component({

    selector: 'side-bar',
    templateUrl: './sideBar.component.html'
})
export class SideBarComponent implements OnInit {
    menuList: any = [];
    companyStatus: string = '';

    constructor(
        private uploadService: UploadService,
        private companyService : CompanyService,
        private sideBarService : SideBarService
    ) {}


    ngOnInit(): void {
        this.getAliOssPolicy();
        this.getCompany();
        this.menuList = this.sideBarService.getSideBarList();
    }

    toggleMenu(currentMenu: any) {
        const i = this.menuList.indexOf(currentMenu);
        this.menuList[i].status = !this.menuList[i].status;
    }

    getAliOssPolicy () {
        this.uploadService.getAliOssHttpRequest().subscribe(
            (result) => {
                // console.log(result)
            },
            subscribeErrorHandler
        );
    }

    getCompany() {
        this.companyService.getUpstreamCompanyInfo().subscribe(
            (result) => {
                if (result && result.companyStatus === 4) {
                    this.companyStatus = '4';
                    this.sideBarService.sendCompanyStatusMessage('4')
                }
            },
            subscribeErrorHandler
        )
    }

}
