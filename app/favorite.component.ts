import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles:[`
        .fa-star{color: orange};
    `]
})
export class FavoriteComponent implements OnInit {

    @Input() isFavorite = false;
    @Output() change = new EventEmitter();

    constructor() { }

    ngOnInit() { }


    onClick() {
       
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue:this.isFavorite})
    }

}