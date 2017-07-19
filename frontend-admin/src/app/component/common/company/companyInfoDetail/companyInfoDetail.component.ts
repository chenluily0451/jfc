import { Component, Input, OnInit} from '@angular/core';



@Component({
    selector: 'company-info-detail',
    templateUrl: './companyInfoDetail.component.html'
})
export class CompanyInfoDetailComponent implements OnInit {

    @Input() company : any = {};

    ngOnInit () {
        // console.log()
    }
}
