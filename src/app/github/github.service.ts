import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GitHubService {

  constructor(private _http: Http) { }


  getGitHubUser(url): Observable<any> {
    return this._http.get(url)
      .map(this.extractData)
      .catch(this.handleError);

  }


  getGitHub(url): Observable<any> {
    let urlfollowers =`${url}/followers`;
    return Observable.forkJoin(this.getGitHubUser(url), this.getGitHubUser(urlfollowers));
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
