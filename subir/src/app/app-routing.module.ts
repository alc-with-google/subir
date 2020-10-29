import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantComponent } from './merchant/merchant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'merchant', component: MerchantComponent },
  { path: '',   redirectTo: '/user', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
