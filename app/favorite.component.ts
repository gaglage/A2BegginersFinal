import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'favorite',
    template: `
    <i class="fa" 
        [class.fa-star]="isFavorite" 
        [class.fa-star-o]="!isFavorite" 
        aria-hidden="true" 
        (click)="onClick()">
    </i>
    `
})
export class FavoriteComponent implements OnInit {

    isFavorite = false;
    constructor() { }

    ngOnInit() { }

    onClick() {
        console.log('click');
        this.isFavorite = !this.isFavorite;
    }

}