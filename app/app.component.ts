import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <password-form></password-form>
  `
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}