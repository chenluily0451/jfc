import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { aliOss } from '../../../service/stroage';



@Component({
    selector: 'image-show',
    templateUrl: './imageShow.component.html'
})
export class ImageShow implements OnInit {
    aliOss : any = aliOss

    @Input() sourcePath : any = {}
    @Input() isShowDelButton : boolean = false
    @Input() class : string = ''


    @Output()
    onDelete: any = new EventEmitter();


    ngOnInit () {
        // console.log('aliOss: ', this.aliOss)
    }

    deleteFile () {
        this.onDelete.emit({value: this.sourcePath})
    }

}

