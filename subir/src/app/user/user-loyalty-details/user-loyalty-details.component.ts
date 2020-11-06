import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LoyaltyI } from '../loyalty-i';
import { QrscanService } from '../../shared/qrscan.service'

@Component({
  selector: 'app-user-loyalty-details',
  templateUrl: './user-loyalty-details.component.html',
  styleUrls: ['./user-loyalty-details.component.css']
})
export class UserLoyaltyDetailsComponent implements OnInit {

  @Input () loyalty:LoyaltyI;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scanService: QrscanService
  ) { }

  ngOnInit(): void {
    this.getLoyalty();
  }

  // gotoLoyaltyList() {
  //   const loyaltyID = this.loyalty ? this.loyalty.id : null;
  //   this.router.navigate(['/loyalties', {id: loyaltyID, foo: 'foo'}]);
  // }

  getLoyalty(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.scanService.getloyalty(id)
      .subscribe(loyalty => this.loyalty = loyalty);
  }

}
