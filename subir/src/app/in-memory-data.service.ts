import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductI } from './merchant-dashboard/product-i';
import { LoyaltyI } from './user/loyalty-i'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const loyalties: LoyaltyI[] = [
      { id: 11, product: 'LG TV', price: 85000, loyaltypercent: .3,seller: 'SPAR' },
      { id: 12, product: 'Fan', price: 8000, loyaltypercent: .5,seller: 'MEGA' },
      { id: 13, product: 'Guici Watch', price: 15000, loyaltypercent: .4,seller: 'Spinos' },
      { id: 14, product: 'Shoe', price: 12000, loyaltypercent: .3,seller: 'Aba' },
      { id: 15, product: 'Bag', price: 1500, loyaltypercent: .1,seller: 'Lagos' }
    ];

    const products: ProductI[] = [
      {price: 1000, product: "Bike", seller: "Jumbo", loyaltypercent: 10, id: 11},
      {price: 2000, product: "Rug", seller: "BT", loyaltypercent: 20, id: 12},

    ]
    return {loyalties, products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: ProductI[]): number {
    return products.length > 0 ? Math.max(...products.map(h => h.id)) + 1 : 12;
  }
}
