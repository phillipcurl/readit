import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ResponseHandlerService, Post } from './../../shared';

@Injectable()
export class RedditService {
  
  private baseUrl = 'https://www.reddit.com/r/';

  constructor(public http: Http, @Inject(forwardRef(() => ResponseHandlerService)) private handler: ResponseHandlerService) {}

  getFeed(subreddit:string): Observable<any[]> {
    return this.http.get(this.baseUrl + subreddit + '.json')
                    .map(this.handler.extractData)
                    // .filter(x => x.data)
                    .catch(this.handler.handleError);
  }

  getStream(subreddits:string[]): Observable<any[]> {
    return this.http.get(this.baseUrl + subreddits[0] + '.json')
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }

}
