import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantComponent } from './merchant/merchant.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: 'merchant', component: MerchantComponent },
  {path: 'merchant/product', component: ProductListComponent},
  {path: 'merchant/createproduct', component: ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantDashboardRoutingModule { }
