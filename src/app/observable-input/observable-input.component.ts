import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';

import 'rxjs/add/observable/range';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/throw';

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

    let userStream = Observable.of({
      userId: 1, username: 'gabi'
    }).delay(2000);
    let tweetStream = Observable.of([1, 2, 3]).delay(20000);

    Observable.forkJoin(userStream, tweetStream)
      .subscribe(result => console.log(result));

    Observable.forkJoin(userStream, tweetStream)
      .map(joined => new Object({ user: joined[0], tweets: joined[1] }))
      .subscribe(result => console.log(result));

    //error

    let observable = Observable.throw(new Error('Something was wrong'));
    observable.subscribe(
      x => console.log(x),
      error => console.log(error)

    );

    // Observable
    //   .interval(1000)
    //   .flatMap(x => {
    //     console.log('Calling server');
    //     return Observable.of([1, 2, 3]);
    //   })
    //   .subscribe(news => console.log(news));

  }

  // valuechange(e) {
  //   console.log(e);


  // }

  ngOnInit() {
  }

}
