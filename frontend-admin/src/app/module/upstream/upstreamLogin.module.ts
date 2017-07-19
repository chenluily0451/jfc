/**
 * Created by chenlu on 2017/5/15.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderModule } from './header.module'

import { UserService } from '../../service/user/user.service'


import { LoginComponent } from '../../component/common-layout/login/login.component';


@NgModule({
    declarations: [

    ],
    imports: [
        HeaderModule,
        BrowserModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [
        UserService
    ],
    bootstrap: [LoginComponent]
})
export class UpstreamLoginModule { }

