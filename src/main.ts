import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PreloadAllModules, provideRouter, provideRoutes, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, MatToolbarModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        provideEnvironmentNgxMask(),
        provideRouter(APP_ROUTES, withPreloading(PreloadAllModules))
    ]
})
  .catch(err => console.error(err));
