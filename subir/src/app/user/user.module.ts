import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLoyaltyDetailsComponent } from './user-loyalty-details/user-loyalty-details.component';
import { UserLoyaltyListComponent } from './user-loyalty-list/user-loyalty-list.component';


@NgModule({
  declarations: [
    UserComponent,
    UserLoyaltyDetailsComponent,
    UserLoyaltyListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
