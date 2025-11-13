import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/');
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YTI4MjlkOC0yYTMxLTRhNGYtYjRkYy1jOWVlODdkMzkwMjIiLCJpZCI6MTYyMjYsImlhdCI6MTY4NzgxMDM3NH0.uty0_7LNxZMxgosKae8QDBj6WkfQhB6KaLnSvvU250Q';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
