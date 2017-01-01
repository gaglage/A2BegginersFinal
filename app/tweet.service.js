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
var TweetService = (function () {
    function TweetService() {
        this.tweets = [
            {
                name: "AAA",
                photo: "http://lorempixel.com/100/100/people/?1",
                nickname: '@aaa',
                post: 'ssssss',
                totalLikes: 1,
                iLike: true
            },
            {
                name: "BBB",
                photo: "http://lorempixel.com/100/100/people/?2",
                nickname: '@bbb',
                post: 'ffffff',
                totalLikes: 1,
                iLike: true
            },
            {
                name: "AACCCA",
                photo: "http://lorempixel.com/100/100/people/?4",
                nickname: '@fre',
                post: 'akjdñkjahkjhaljkfhlfhwe',
                totalLikes: 1,
                iLike: true
            }
        ];
    }
    TweetService.prototype.getTweets = function () {
        return this.tweets;
    };
    return TweetService;
}());
TweetService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TweetService);
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.service.js.map