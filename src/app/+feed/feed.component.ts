import { Component, OnInit } from '@angular/core';
import * as moment_ from 'moment';
// const moment: moment.MomentStatic = (<any>moment_)['default'] || moment_;
import { RedditService, Post, PostComponent } from './../shared';

@Component({
  moduleId: module.id,
  selector: 'app-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.css']
})
export class FeedComponent implements OnInit {

  isLoading: boolean;
  serviceData: any[];
  subRedditSearch: string;
  subreddits: string[] = [];
  errorMessage: any;

  constructor(public RedditService: RedditService) {}

  ngOnInit() {
    // this.isLoading = true;
    // this.RedditService.getFeed('technology').subscribe(
    //   data=> {
    //     this.serviceData = data;
    //     this.isLoading = false;
    //   },
    //   error => {
    //     this.isLoading = false;
    //     this.errorMessage = <any>error
    //   }
    // );
    
  }

  searchSubreddit():boolean {
    if(this.searchSubreddit) {
      this.isLoading = true;
      this.serviceData = [];
      this.RedditService.getFeed(this.subRedditSearch).subscribe(
        data=> {
          this.serviceData = data;
          this.subreddits.push(this.subRedditSearch);
          this.subRedditSearch = '';
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
          this.errorMessage = <any>error
        }
      );
    }
    return false;
  }

  searchPrevious(subreddit:string) {
    if (this.subRedditSearch !== subreddit) {
      this.isLoading = true;
      this.serviceData = [];
      this.RedditService.getFeed(subreddit).subscribe(
        data=> {
          this.serviceData = data;
          this.subRedditSearch = '';
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
          this.errorMessage = <any>error
        }
      );
    }
  }

  removeFilter(id) {
    this.subreddits.splice(id, 1); 
  }

}
