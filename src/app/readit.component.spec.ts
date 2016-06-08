import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ReaditAppComponent } from '../app/readit.component';

beforeEachProviders(() => [ReaditAppComponent]);

describe('App: Readit', () => {
  it('should create the app',
      inject([ReaditAppComponent], (app: ReaditAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'readit works!\'',
      inject([ReaditAppComponent], (app: ReaditAppComponent) => {
    expect(app.title).toEqual('readit works!');
  }));
});
