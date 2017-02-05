import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsernameValidators } from './usernameValidator';

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
    userForm: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.userForm = this.fb.group({
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ])],
            password: ['', Validators.required]
        })
    }


    onSubmit(f) {
        console.log(f);
    }
}