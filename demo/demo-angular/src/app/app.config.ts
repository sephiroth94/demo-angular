import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import * as $ from 'jquery';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideHttpClient(withFetch())]
};