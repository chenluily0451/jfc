import {Component, OnInit, Input, OnChanges} from '@angular/core';




@Component({
    selector: 'supplement-agreement',
    templateUrl: './supplementContractInfo.component.html'
})
export class SupplementContractInfoComponent {
    @Input() business: any ;
}
