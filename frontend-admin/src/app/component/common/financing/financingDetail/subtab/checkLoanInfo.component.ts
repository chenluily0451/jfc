import { Component , Input} from '@angular/core';




@Component({
    selector: 'checkLoan-info',
    templateUrl: './checkLoanInfo.component.html'

})

export class CheckLoanInfoComponent {
    @Input() financing: any;
}
