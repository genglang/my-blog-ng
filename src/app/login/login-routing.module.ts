import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginComponent} from './login.component';
import {RegisterPageComponent} from './register-page/register-page.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
            {
                path: 'login',
                component: LoginPageComponent
            },
            {
                path: 'register',
                component: RegisterPageComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {

}