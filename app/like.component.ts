import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'like',
    template: `
        <i class="fa fa-heart" 
        aria-hidden="true"
        [class.like]="isLiked"
        
        (click)="onClick()"
        ></i><span>{{numberLikes}}</span>    
    `,
    styles: [`
        .fa-heart{
            color: #ccc;
            cursor:pointer;
        }
        .like{
            color:deeppink;
        }
    `]
})
export class LikeComponent implements OnInit {
    @Input() numberLikes = 0;
    @Input() isLiked = false;
    constructor() { }

    ngOnInit() { }

    onClick() {
        this.isLiked = !this.isLiked;
        this.numberLikes += (this.isLiked) ?  1 : - 1;
    }
}