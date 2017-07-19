import { Component, OnInit, Input } from '@angular/core';




import { UserSecurityService } from '../../../service/userSecurity/userSecurity.service'

import { subscribeErrorHandler } from '../../../service/errorHandler'




@Component({
    selector: 'app-header-login',
    templateUrl: './header-login.component.html'
})
export class HeaderLoginComponent {

    currentUser : any = {};


    constructor (
        private user: UserSecurityService
    ) {}



    ngOnInit() {
        this.getUserInfo();
    }

    getUserInfo () {
        this.user.getUserInfoHttp().subscribe(
            (result) => {
                this.currentUser = result;
            },
            subscribeErrorHandler
        );
    }


    quit() {
        localStorage.clear();
        window.location.href = '/web/index'
    }


}
