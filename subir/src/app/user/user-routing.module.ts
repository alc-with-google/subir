import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoyaltyDetailsComponent } from './user-loyalty-details/user-loyalty-details.component';
import { UserLoyaltyListComponent } from './user-loyalty-list/user-loyalty-list.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'loyalties',  component: UserLoyaltyListComponent },
  { path: 'loyalties/:id', component: UserLoyaltyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
