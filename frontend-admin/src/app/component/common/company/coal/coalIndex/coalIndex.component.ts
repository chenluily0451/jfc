import { Component, Input } from '@angular/core';


@Component({
    selector: 'coal-index',
    templateUrl: 'coalIndex.component.html'
})
export class CoalIndexComponent  {

    @Input() coal: any ;
}
