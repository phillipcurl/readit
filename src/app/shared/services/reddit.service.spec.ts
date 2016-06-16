import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { RedditService } from './reddit.service';

describe('Reddit Service', () => {
  beforeEachProviders(() => [RedditService]);

  it('should ...',
      inject([RedditService], (service: RedditService) => {
    expect(service).toBeTruthy();
  }));
});
