import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  

import { AppComponent } from './app.component';

import { PasswordFormComponent } from './password-form.component';


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    PasswordFormComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
