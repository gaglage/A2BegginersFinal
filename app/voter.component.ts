import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'voter',
    template: `
    <i class="fa fa-chevron-up" [class.highlighted]="myVote==1" aria-hidden="true" (click)="onClickUp()"></i>
    <span>{{voteCounter}}</span>
    <i class="fa fa-chevron-down" [class.highlighted]="myVote==-1" aria-hidden="true" (click)="onClickDown()"></i>
    `,
    styles: [`
        .fa-chevron-up, .fa-chevron-down{
            color: #ccc;
            width:20px;
            float: left;
            clear: both;
            cursor: pointer;
        }
        .highlighted{
            color: orange;
            cursor: auto;
        }
        span{
            display:block;
            width:20px;
            font-weight: 1.1em;
            float: left;
            clear: both;
            text-align: center;                     
        }
    `]
})
export class VoterComponent implements OnInit {
    @Input() voteCounter = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter()

    constructor() { }

    ngOnInit() { }

    onClickUp() {
        if (this.myVote == 1){
            return;
        }
        this.myVote += 1;
        this.voteCounter += 1;
        this.vote.emit({myVote:this.myVote,voteCounter:this.voteCounter})

        console.log(this.myVote);
    }
    onClickDown() {
        if (this.myVote == -1){
            return;
        }
        this.myVote -= 1;
        this.voteCounter -= 1;
        this.vote.emit({myVote:this.myVote,voteCounter:this.voteCounter})

        console.log(this.myVote);
    }



}