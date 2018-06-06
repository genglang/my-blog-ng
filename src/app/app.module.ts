import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {RegisterPageComponent} from './login/register-page/register-page.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        SharedModule,
        AppRoutingModule,
        LoginModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
