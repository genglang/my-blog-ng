import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginRoutingModule} from  './login-routing.module';
import { LoginComponent } from './login.component'

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    exports: [
        LoginPageComponent,
        LoginComponent,
    ],
    declarations: [
        LoginPageComponent,
        LoginComponent
    ]
})
export class LoginModule {
}
