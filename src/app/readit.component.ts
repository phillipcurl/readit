import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { ResponseHandlerService, RedditService } from './shared';
import { FeedComponent } from './+feed';

@Component({
  moduleId: module.id,
  selector: 'readit-app',
  templateUrl: 'readit.component.html',
  styleUrls: ['readit.component.css'],
  providers: [ROUTER_PROVIDERS, ResponseHandlerService, RedditService],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/', component: FeedComponent}
])
export class ReaditAppComponent implements OnInit {
  title = 'Root Component';

  constructor(public router:Router) {}

  ngOnInit() {
    // this.router.navigate(['/login']);
  }
}
