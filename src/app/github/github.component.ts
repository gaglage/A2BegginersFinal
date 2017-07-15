import { Component, OnInit } from '@angular/core';
import { GitHubService } from './github.service';


@Component({
  selector: 'app-github',
  templateUrl: 'github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GitHubComponent implements OnInit {
  user = 'octocat';
  githubUrl = 'https://github.com/'
  githubUrlApi = 'https://api.github.com/users/'
  url = this.githubUrlApi + this.user;
  githubuser;
  githubfollowers;
  isLoaded = false;
  constructor(private _githubService: GitHubService) { }

  gotoProfile(user) {
    var newWindow = window.open(this.githubUrl+user);
  }
  ngOnInit() {
    console.log('github');
    this._githubService.getGitHub(this.url).subscribe(
      x => {
        this.githubuser = x[0];
        this.githubfollowers = x[1];
        this.isLoaded = true;
        console.log(x[0]);
      }
    );
  }

}
