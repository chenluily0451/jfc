import { Component , OnInit, Input} from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import { validationErrorMessageHandler } from '../../../../base-component/validators/validators'

import { notifyOptions } from '../../../../../service/notify';
import { CompanyService } from '../../../../../service/companyInfo/company.service';
import { subscribeErrorHandler } from '../../../../../service/errorHandler';

import { aliOss } from '../../../../../service/stroage';


@Component({
    selector: 'field-research',
    templateUrl: './fieldResearch.component.html'

})
export class FieldResearchComponent implements OnInit {

    aliOss : any = aliOss;

    fieldResearchForm : FormGroup;

    @Input() company : any = {};
    @Input() companyInvestigation : any = {};
    notifyOptions: any = notifyOptions;

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private notifyService: NotificationsService
    ) { }


    ngOnInit(): void {
        this.createForm();
    }

    formErrors: any = { };

    validationMessages: any = {
        'person': {
            'required': '请输入企业全称',
            'maxlength': '1-50个字段以内'
        }
    }

    createForm() {

        if (typeof this.companyInvestigation.fieldInvestigationSurvey === 'undefined') {
            this.companyInvestigation.fieldInvestigationSurvey = {}
        }

        this.fieldResearchForm = this.fb.group({
            person: [ this.companyInvestigation.fieldInvestigationSurvey.person, [] ],
            title: [ this.companyInvestigation.fieldInvestigationSurvey.title, [] ],
            phone: [ this.companyInvestigation.fieldInvestigationSurvey.phone, [] ],
            // recordingFile: {
            //     filePath: '',
            //     fileName: '',
            //     fileExtName: ''
            // },
            registerAddress: [ this.companyInvestigation.fieldInvestigationSurvey.registerAddress, [] ],
            operationAddress: [ this.companyInvestigation.fieldInvestigationSurvey.operationAddress, [] ],
            // operationProvince: [ this.companyInvestigation.fieldInvestigationSurvey.operationProvince, [] ],
            // operationCity: [ this.companyInvestigation.fieldInvestigationSurvey.operationCity, [] ],
            // operationDistrict: [ this.companyInvestigation.fieldInvestigationSurvey.operationDistrict, [] ],
            businessFulfilAddress: [ this.companyInvestigation.fieldInvestigationSurvey.businessFulfilAddress, [] ],
            // supplementFile: {
            //     filePath: '',
            //     fileName: '',
            //     fileExtName: ''
            // },
            auditOpinion: [ this.companyInvestigation.fieldInvestigationSurvey.auditOpinion, [] ]
            // businessStateFile: {
            //     filePath: '',
            //     fileName: '',
            //     fileExtName: ''
            // }
        });

        this.fieldResearchForm.valueChanges
            .subscribe(data => this.formErrors = validationErrorMessageHandler(this.fieldResearchForm, this.validationMessages));
    }


    newPostData : any = {}

    saveFieldInvestigationSurvey() {


        this.newPostData.person = this.fieldResearchForm.get('person').value;
        this.newPostData.title = this.fieldResearchForm.get('title').value;
        this.newPostData.phone = this.fieldResearchForm.get('phone').value;

        this.newPostData.registerAddress = this.fieldResearchForm.get('registerAddress').value;
        this.newPostData.operationAddress = this.fieldResearchForm.get('operationAddress').value;
        this.newPostData.businessFulfilAddress = this.fieldResearchForm.get('businessFulfilAddress').value;

        this.newPostData.auditOpinion = this.fieldResearchForm.get('auditOpinion').value


        this.companyService.saveFieldInvestigationSurvey(this.company._id, this.newPostData).subscribe(
            (result) => {
                this.notifyService.success(
                    '成功', '恭喜您保存成功'
                );
            },
            subscribeErrorHandler
        )
    }



    uploadFinished (event: any, fieldName1 : string) {

        // 提交保存数据用
        this.newPostData[fieldName1] = {
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        }

        // 上传成功后显示用
        this.companyInvestigation.fieldInvestigationSurvey[fieldName1] = {
            'filePath': event.value.fileName,
            'fileName': event.value.realname,
            'fileExtName': event.value.realname.split('.').pop()
        }

    }


    deleteFile (fieldName1 : string) {
        this.newPostData[fieldName1] = null

        // 上传成功后显示用
        this.companyInvestigation.fieldInvestigationSurvey[fieldName1] = null
    }


    chooseProvince(event: any) {
        this.newPostData.operationProvince = event.province;
        this.newPostData.operationCity = event.city;
        this.newPostData.operationDistrict = event.district;
    }

}
