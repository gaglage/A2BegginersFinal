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
            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        })
    }


    onSubmit(f:FormGroup) {
        //validation simulated
        // var result = authService.login(this.userForm.value)
        this.userForm.setErrors({
            invalidLogin:true
        })
        console.log(this.userForm.errors);
    }
}