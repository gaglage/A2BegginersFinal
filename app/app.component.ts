import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <contact-form></contact-form>
  `
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}