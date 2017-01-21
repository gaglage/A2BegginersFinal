import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html',
    styles: [`
        form{
            padding:20px;
        }
    `]
})
export class ContactFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    log(x) {
        console.log(x);
    }
}