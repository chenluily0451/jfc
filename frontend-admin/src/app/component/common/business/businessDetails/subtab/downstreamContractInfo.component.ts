import {Component, OnInit, Input, OnChanges} from '@angular/core';



@Component({
    selector: 'downstream-info',
    templateUrl: './downstreamContractInfo.component.html'
})
export class DownstreamContractInfoComponent {
    @Input() business: any ;
}
