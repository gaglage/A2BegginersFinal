import { Component } from '@angular/core';


@Component({
  selector: 'my-app',

  template: `<h1>Gabi App</h1>
  <input type="text" 
    [value]="title" 
    (input)="title = $event.target.value">

  <input type="text"  
    [(ngModel)]="title">

  <input type="button" 
    (click)="title = ''" 
    value="Clear">  

  Preview: {{title}}
  <courses></courses>
  <authors></authors>`,

})
export class AppComponent {
  title = "test"

}
