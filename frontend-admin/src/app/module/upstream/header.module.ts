/**
 * Created by chenlu on 2017/5/15.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { HeaderComponent } from '../../component/common-layout/header/header.component';
import { FooterComponent } from '../../component/common-layout/footer/footer.component';


import { LoginComponent } from '../../component/common-layout/login/login.component';
import { RegisterComponent } from '../../component/common-layout/register/register.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,

        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [

    ]
})
export class HeaderModule { }

