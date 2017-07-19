import { Component , OnInit} from '@angular/core';

import { currentUser} from '../../../../service/stroage'
import { SideBarService } from '../../../../service/sideBar/sideBar.service'


@Component({
    selector: 'account-home',
    templateUrl: './accountHome.component.html'
})
export class AccountHomeComponent implements OnInit {

    currentUser : any = currentUser;
    companyStatus: string;
    constructor(
        private sideBarService: SideBarService
    ) {}

    ngOnInit(): void {

        this.sideBarService.getCompanyStatusMessage().subscribe(
            result => {
                this.companyStatus = result;
            }
        );
    }
}


