import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordValidators } from './passwordValidator';

@Component({
    selector: 'password-form',
    templateUrl: 'app/password-form.component.html',
    styles: [`
        form{
            padding:20px;
        }
    `]
})
export class PasswordFormComponent implements OnInit {
    formPasswod: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {

        this.formPasswod = this.fb.group({
            oldpassword: ['', Validators.required],
            newpassword: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)               
            ])],
            confirmpassword: ['', Validators.compose([
                Validators.required
            ])]
        })
    }


    onSubmit(f: FormGroup) {
        //validation simulated
        // var result = authService.login(this.formPasswod.value)
        this.formPasswod.setErrors({
            invalidLogin: true
        })
        console.log(this.formPasswod.errors);
    }
}