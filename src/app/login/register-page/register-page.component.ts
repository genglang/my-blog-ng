import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

    formModel: FormGroup = new FormGroup({
        userName: new FormControl(),
        userEmail: new FormControl(),
        userPwd: new FormControl(),
        userRePwd: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {
    }

    OnSubmit() {
        console.log(this.formModel.value);
    }
}
