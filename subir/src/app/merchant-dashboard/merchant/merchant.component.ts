import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import QRCode from 'qrcode';
import { ProductI } from '../product-i';
import { QrscanService } from '../../shared/qrscan.service';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  product: ProductI = new Products(11, 'N LG TV', 85000, .3, 'New-SPAR')

  submitted = false;

  constructor(private qrScan: QrscanService) { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }

  newProduct() {
    this.product = new Products(42, '', 5900,.3,'');
  }

  createQR() {
    const newProductInJSON = JSON.stringify(this.product)
    // TODO use the correct syntax toselect the element
    QRCode.toCanvas(document.getElementById('canvas'), newProductInJSON, function (error) {
      if (error) console.error(error)
      console.log('success!');
    })
  }

  addQR(product): void {
    this.qrScan.addProduct(product);
    console.log('product have benn added')
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.product); }

}
