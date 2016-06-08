import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ReaditAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ReaditAppComponent);

