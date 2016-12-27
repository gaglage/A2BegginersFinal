import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service'

@Component({
    selector: 'authors',
    template: `
    <h2>Authors</h2>
    {{title}}
    <ul>
        <li *ngFor="let author of authors ">
        {{author}}
        </li>
    </ul>
    `,
    providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {
    title = "This is title for Authors Component";
    authors: string[];
    constructor(authorsService:AuthorService) {
        this.authors = authorsService.getAuthors();
     }

    ngOnInit() { }
}