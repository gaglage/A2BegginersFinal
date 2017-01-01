import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {
    tweets = [
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
    ]


    constructor() { }

    getTweets() {
        return this.tweets;
    }
}