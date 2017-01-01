"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tweet_service_1 = require("./tweet.service");
var TweetComponent = (function () {
    function TweetComponent(tweetService) {
        this.tweets = tweetService.getTweets();
        console.log(this.tweets);
    }
    TweetComponent.prototype.ngOnInit = function () { };
    return TweetComponent;
}());
TweetComponent = __decorate([
    core_1.Component({
        selector: 'tweet',
        template: "\n    <div *ngFor=\"let tweet of tweets\">\n<div class=\"media\">\n  <a class=\"media-left\" href=\"#\">\n    <img class=\"media-object\" src=\"{{tweet.photo}}\" alt=\"{{tweet.name}}\">\n  </a>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">{{tweet.name}}</h4><span>{{tweet.nickname}}</span>\n    {{tweet.post}}\n    <like [numberLikes]=\"tweet.totalLikes\" [isLiked]=\"tweet.iLike\"></like>\n  </div>\n</div> \n</div>   \n    ",
        styles: ["\n        .media{\n            margin: 10px;\n        }\n    "],
        providers: [tweet_service_1.TweetService]
    }),
    __metadata("design:paramtypes", [tweet_service_1.TweetService])
], TweetComponent);
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map