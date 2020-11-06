import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLoyaltyDetailsComponent } from './user-loyalty-details/user-loyalty-details.component';
import { UserLoyaltyListComponent } from './user-loyalty-list/user-loyalty-list.component';
import { ScanComponent } from './scan/scan.component';

import { ScanDirective } from '../scan.directive'


@NgModule({
  declarations: [
    UserComponent,
    UserLoyaltyDetailsComponent,
    UserLoyaltyListComponent,
    ScanComponent,
    ScanDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
