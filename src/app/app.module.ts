import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ObservableInputComponent } from './observable-input/observable-input.component';
import { PostService } from './http/post.service';
import { HttpLessonComponent } from './http/http-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableInputComponent,
    HttpLessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
