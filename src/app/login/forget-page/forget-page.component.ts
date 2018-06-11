import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-forget-page',
    templateUrl: './forget-page.component.html',
    styleUrls: ['./forget-page.component.scss']
})
export class ForgetPageComponent implements OnInit {

    formModel: FormGroup = new FormGroup({
        userEmail: new FormControl(),
        userCode: new FormControl(),
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
