import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-observable-input',
  templateUrl: './observable-input.component.html',
  styleUrls: ['./observable-input.component.css']
})
export class ObservableInputComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: Http) {
    this.form = this.fb.group({
      search: []
    });

    // .unsubscribe();



    Observable
      .interval(1000)
      .flatMap(x => {
        console.log('Calling server');
        return Observable.of([1, 2, 3]);
      })
      .subscribe(news => console.log(news));

  }

  // valuechange(e) {
  //   console.log(e);


  // }

  ngOnInit() {
  }

}
