import { Component, OnInit } from '@angular/core';
import { TweetService } from './tweet.service';
import { LikeComponent } from './like.component';

@Component({
    selector: 'tweet',
    template: `
    <div *ngFor="let tweet of tweets">
<div class="media">
  <a class="media-left" href="#">
    <img class="media-object" src="{{tweet.photo}}" alt="{{tweet.name}}">
  </a>
  <div class="media-body">
    <h4 class="media-heading">{{tweet.name}}</h4><span>{{tweet.nickname}}</span>
    {{tweet.post}}
    <like [numberLikes]="tweet.totalLikes" [isLiked]="tweet.iLike"></like>
  </div>
</div> 
</div>   
    `,
    styles:[`
        .media{
            margin: 10px;
        }
    `],
    providers: [TweetService]
})
export class TweetComponent implements OnInit {
    tweets;
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
        console.log(this.tweets);
    }

    ngOnInit() { }
}