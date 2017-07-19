import { Component, OnInit, Input } from '@angular/core';

import { UploadService } from '../../../service/upload/upload.service'
import { UserSecurityService } from '../../../service/userSecurity/userSecurity.service'
import { subscribeErrorHandler } from '../../../service/errorHandler'



@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class PlatformHeaderComponent implements OnInit {

    currentUser : any = {};

    @Input ()
    isLogin : boolean = false;

    constructor (
        private user: UserSecurityService,
        private uploadService: UploadService
    ) {}



    ngOnInit() {
        this.getUserInfo()
        this.getAliOssPolicy()

    }

    getUserInfo () {
        this.user.getUserInfoHttp().subscribe(
            (result) => {
                this.currentUser = result;
            },
            subscribeErrorHandler
        );
    }

    getAliOssPolicy () {
        this.uploadService.getAliOssHttpRequest().subscribe(
            (result) => {
                // console.log(result)
            },
            subscribeErrorHandler
        );

    }

    quitLogin() {
        localStorage.clear();
        window.location.href = '/web/platform/login'
    }

}
