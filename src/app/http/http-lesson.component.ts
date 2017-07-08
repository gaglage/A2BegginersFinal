import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'http-lesson',
  templateUrl: './http-lesson.component.html',
  styleUrls: ['./http-lesson.component.css']
})
export class HttpLessonComponent implements OnInit {
  constructor(private _postService: PostService) {

  }

  ngOnInit() {
    this._postService.getPost()
      .subscribe(post => { console.log(post); });
  }
}
