import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';

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

    let startDates = [];
    let startDate = new Date();
    for (let day = -2; day <= 2; day++) {
      let date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + day
      )
      startDates.push(date);
    }

    Observable
      .from(startDates)
      .map(date => {
        console.log(`Getting deals for date ${date}`);
        return [1, 2, 3]
      })
      .subscribe(x => console.log(x));

  }

  // valuechange(e) {
  //   console.log(e);


  // }

  ngOnInit() {
  }

}
