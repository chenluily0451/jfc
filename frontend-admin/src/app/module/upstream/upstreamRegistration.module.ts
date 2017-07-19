import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { HeaderModule } from './header.module'

import { RegisterComponent } from '../../component/common-layout/register/register.component';

import { UserService } from '../../service/user/user.service'


@NgModule({
    declarations : [

    ],
    imports      : [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        HeaderModule
    ],
    providers    : [
        UserService
    ],
    bootstrap    : [RegisterComponent]
})
export class UpstreamRegistrationModule {}

