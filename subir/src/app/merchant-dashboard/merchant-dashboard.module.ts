import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MerchantDashboardRoutingModule } from './merchant-dashboard-routing.module';

import { MerchantComponent } from './merchant/merchant.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';


@NgModule({
  declarations: [
    MerchantComponent,
    ProductListComponent,
    ProductCreateComponent,
  ],
  imports: [
    CommonModule,
    MerchantDashboardRoutingModule,
    FormsModule
  ]
})
export class MerchantDashboardModule { }
