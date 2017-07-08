import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: Http) {

  }
  getPost(): Observable<Post[]> {
    return this._http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);

  }
  createPost(post: Post) {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    return this._http.post(this.url, JSON.stringify(post));

  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
