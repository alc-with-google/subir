import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Temporary Format for generating Data
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { MerchantDashboardRoutingModule } from './merchant-dashboard/merchant-dashboard-routing.module'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MerchantDashboardModule } from './merchant-dashboard/merchant-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    MerchantDashboardRoutingModule,
    AppRoutingModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    MerchantDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
