import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../merchant-dashboard/product-list/product-list.component';
import { UserLoyaltyDetailsComponent } from './user-loyalty-details/user-loyalty-details.component';
import { UserLoyaltyListComponent } from './user-loyalty-list/user-loyalty-list.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'loyalties',  component: UserLoyaltyListComponent },
  { path: 'loyalties/:id', component: UserLoyaltyDetailsComponent },
  { path: 'product/:id', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
