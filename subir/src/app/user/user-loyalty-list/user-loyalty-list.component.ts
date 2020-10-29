import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { LoyaltyI } from '../loyalty-i';
import { LOYALTIES } from '../mock-loyalties'

@Component({
  selector: 'app-user-loyalty-list',
  templateUrl: './user-loyalty-list.component.html',
  styleUrls: ['./user-loyalty-list.component.css']
})
export class UserLoyaltyListComponent implements OnInit {

  loyalties = LOYALTIES;
  selectedLoyalty: LoyaltyI;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSelect(loyalty: LoyaltyI): void {
    this.selectedLoyalty = loyalty;
  }

}
