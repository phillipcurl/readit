import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { ReaditAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ReaditAppComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS ]);
