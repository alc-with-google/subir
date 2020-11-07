import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantComponent } from './merchant/merchant.component';


const routes: Routes = [
  { path: 'merchant', component: MerchantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantDashboardRoutingModule { }
