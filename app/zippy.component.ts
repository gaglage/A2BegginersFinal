import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'zippy',
    template: `
    <div class="list-group">
    <li class="list-group-item header" (click)="onClick()">
    {{title}}
    <span class="fa  float-xs-right"
        [ngClass]="{
            'fa-chevron-up': isOpen,
            'fa-chevron-down': !isOpen
        }"

    ></span>
    </li>
    <li class="list-group-item" [hidden]="!isOpen"    >    
    <ng-content></ng-content>
    </li>
  

</div>`,
    styles: [`
    div{
        margin-left:10px;
        width:50%;
    }
    .header{
        cursor:pointer;
    }
`]
})
export class ZippyComponent implements OnInit {
    @Input() title = "";


    isOpen = false;

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.isOpen = !this.isOpen;
    }
}