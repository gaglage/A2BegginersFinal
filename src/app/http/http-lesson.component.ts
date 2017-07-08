import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'http-lesson',
  templateUrl: './http-lesson.component.html',
  styleUrls: ['./http-lesson.component.css']
})
export class HttpLessonComponent implements OnInit {
  isLoading = true;

  constructor(private _postService: PostService) {

  }

  ngOnInit() {
    this._postService.getPost()
      .delay(5000)
      .subscribe(post => {
        this.isLoading = false;
        console.log(post);
      });
  }
}
