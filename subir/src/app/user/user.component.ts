import { Component, Input, OnInit } from '@angular/core';
import { Useri } from './useri';
import { LOYALTIES } from './mock-loyalties'
import { LoyaltyI } from './loyalty-i'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Useri = {
    id: 1,
    firstname: 'Ezekiel',
    lastname: 'Obhafuoso',
    phone: 2347083049565,
    email: 'ezekiel@gmail.com'

  }

  constructor() { }

  ngOnInit(): void {
  }

  selectedLoyalty: LoyaltyI;

  onSelect(loyalty: LoyaltyI): void {
    this.selectedLoyalty = loyalty;
  }
}
