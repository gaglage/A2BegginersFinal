import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <user-form></user-form>
  `
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}