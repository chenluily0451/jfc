import { Component, Input } from '@angular/core';

import { aliOss } from '../../../../../service/stroage';



@Component({
    selector: 'loan-detailsInfo',
    templateUrl: './loanDetailsInfo.component.html'

})

export class LoanDetailsInfoComponent {
    @Input() financing: any;
    @Input() lending: any;

    aliOss : any = aliOss;

}
