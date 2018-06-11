import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgetPageComponent } from './forget-page/forget-page.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginPageComponent,
        RegisterPageComponent,
        LoginComponent,
    ],
    declarations: [
        LoginPageComponent,
        LoginComponent,
        RegisterPageComponent,
        ForgetPageComponent
    ]
})
export class LoginModule {
}
