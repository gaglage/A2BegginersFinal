import { Component, OnInit } from '@angular/core';

import {FormControl, FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'user-form',
    templateUrl: 'app/user-form.component.html',
    styles: [`
        form{
            padding:20px;
        }
    `]
})
export class UserFormComponent implements OnInit {
    userForm:FormGroup;
    constructor(fb: FormBuilder) { 
        this.userForm = fb.group({
            username: new FormControl('',Validators.required),
            password: new FormControl('',Validators.required)
        })
    }

    ngOnInit() { }


    onSubmit(f) {
        console.log(this.userForm.controls.username.invalid);
        console.log(f);
    }
}