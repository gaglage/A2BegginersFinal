import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ContactFormComponent } from './contact-form.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ContactFormComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
