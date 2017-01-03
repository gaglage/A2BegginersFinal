import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';
import { TweetComponent } from './tweet.component';
import { SumamryPipe } from './summary.pipe';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective,
    FavoriteComponent,
    LikeComponent,
    VoterComponent,
    TweetComponent,
    SumamryPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
