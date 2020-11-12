import { Component, Input, IterableDiffers, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QrscanService } from '../../shared/qrscan.service'
import { ProductI } from '../product-i';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products = [];
  @Input() productToDisplay = null;

  constructor(private qrScan:QrscanService ) {}

  ngOnInit(): void {
    this.listProduct();
  }



  listProduct() {
    this.qrScan.getProducts().subscribe((data) => this.products = data)
  }

  // Get the new product created.
  onCreatedProduct(createdProduct: any) {
    this.productToDisplay = createdProduct;
    this.products.push(this.productToDisplay);
    console.log('so here in onCreatedProduct', this.products)
  }

}
