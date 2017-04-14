import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';

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
    let search = this.form.get('search');

    search.valueChanges
      .debounceTime(400)// debounceTime
      .filter(text => text.length >= 3)
      .mergeMap (searchTerm => {
        let url = `https://api.spotify.com/v1/search?type=artist&q=${searchTerm}`;
        return http.get(url)
          .toPromise()
          .then(response => response.json());

      })
      .subscribe(artist => console.log(artist))
      // .unsubscribe();
console.log(new Observable());

  }

  // valuechange(e) {
  //   console.log(e);


  // }

  ngOnInit() {
  }

}
