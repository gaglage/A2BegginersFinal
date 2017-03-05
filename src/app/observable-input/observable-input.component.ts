import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-observable-input',
  templateUrl: './observable-input.component.html',
  styleUrls: ['./observable-input.component.css']
})
export class ObservableInputComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      search: []
    });
    let search = this.form.get('search');

    search.valueChanges
      .auditTime(400)// debounceTime
      .filter(text => text.length >= 3)
      .map(str => (<string>str).replace(' ', '-'))
      .subscribe(x => console.log(x))

  }

  // valuechange(e) {
  //   console.log(e);


  // }

  ngOnInit() {
  }

}
