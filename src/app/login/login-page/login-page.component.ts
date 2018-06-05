import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    private userName;
    private userPwd;

    constructor() {
    }

    ngOnInit() {
    }

    submitLogin() {
        console.log(this.userName);
        console.log(this.userPwd);
    }
}
