import { Component , Input , OnInit } from '@angular/core';

import { SideBarService  } from '../../../service/sideBar/sideBar.service'


@Component({

    selector: 'side-bar',
    templateUrl: './sideBar.component.html'
})
export class PlatformSideBarComponent implements OnInit {


    sideBarItem : any = [];

    constructor(
        private sideBarService : SideBarService
    ) {}



    ngOnInit(): void {
        this.sideBarItem = this.sideBarService.getSideBarList();
    }

}
