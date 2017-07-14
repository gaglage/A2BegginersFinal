import { Component, OnInit } from '@angular/core';
import { GitHubService } from './github.service';


@Component({
  selector: 'app-github',
  templateUrl: 'github.component.html'
})
export class GitHubComponent implements OnInit {
  url = 'https://api.github.com/users/octocat';
  githubdata;
  constructor(private _githubService: GitHubService) { }
  ngOnInit() {
    console.log('github');
    this._githubService.getGitHub(this.url).subscribe(
      x => { console.log(x); }
    );
  }

}
