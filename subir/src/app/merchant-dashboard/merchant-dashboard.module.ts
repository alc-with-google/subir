import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MerchantDashboardRoutingModule } from './merchant-dashboard-routing.module';

import { MerchantComponent } from './merchant/merchant.component';


@NgModule({
  declarations: [
    MerchantComponent,
  ],
  imports: [
    CommonModule,
    MerchantDashboardRoutingModule,
    FormsModule
  ]
})
export class MerchantDashboardModule { }
