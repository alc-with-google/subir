import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QrscanService } from '../../shared/qrscan.service'

import { LoyaltyI } from '../loyalty-i';

@Component({
  selector: 'app-user-loyalty-list',
  templateUrl: './user-loyalty-list.component.html',
  styleUrls: ['./user-loyalty-list.component.css']
})
export class UserLoyaltyListComponent implements OnInit {

  loyalties: LoyaltyI[];
  selectedLoyalty: LoyaltyI;

  constructor(
    private route: ActivatedRoute,
    private scanService: QrscanService,
  ) { }

  ngOnInit(): void {
    this.getLoyalties()
  }

  getLoyalties(): void {
    this.scanService.getLoyalties()
    .subscribe(result => this.loyalties = result);
  }

  onSelect(loyalty: LoyaltyI): void {
    this.selectedLoyalty = loyalty;
  }

}
