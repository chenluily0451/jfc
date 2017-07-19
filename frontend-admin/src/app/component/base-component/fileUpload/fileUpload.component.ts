
import {Component, Output, EventEmitter, ViewChild} from '@angular/core';

import { UploadService } from '../../../service/upload/upload.service'
import { subscribeErrorHandler } from '../../../service/errorHandler';





@Component({
    selector: 'file-upload',
    templateUrl: './fileUpload.component.html'
})
export class FileUpload {

    fileListTemp : any = []
    fileListTempCount : number = 0

    uploadedFile : any = {}

    @Output()
    onFinished: any = new EventEmitter();

    @ViewChild('fileInput') fileInput: any;


    constructor(
        private uploadService: UploadService
    ) {}


    addFile($event: any): void {

        this.fileListTemp = this.fileInput.nativeElement.files;  //locate the file element meant for the file upload.
        this.fileListTempCount = this.fileInput.nativeElement.files.length;

        if (this.fileListTemp && this.fileListTemp[0] && this.fileListTempCount > 0) {
            const newFile = this.fileListTemp[0];
            // console.log('file:', newFile)

            this.uploadService.upload(newFile).subscribe(
                (result) => {
                    this.uploadedFile = result;
                    this.onFinished.emit( {value : result});
                    $event.target.value = '';
                },
                subscribeErrorHandler
            );
        }
    }

}
