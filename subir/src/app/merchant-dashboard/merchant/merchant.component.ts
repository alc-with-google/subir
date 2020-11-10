import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from '../products';
import QRCode from 'qrcode';
import { ProductI } from '../product-i';
import { QrscanService } from '../../shared/qrscan.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  product: ProductI;
  products: ProductI[];

  @Output() createdProduct: EventEmitter<any> = new EventEmitter<ProductI>();


  submitted = false;

  constructor(private qrScan: QrscanService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.touched);
    console.log(form.submitted);
    this.createQR(form)
    this.addQR(form.value)
    this.submitted = true;
  }

  createQR(form: NgForm) {
    const newProductInJSON = JSON.stringify(form.value)
    // TODO use the correct syntax toselect the element
    QRCode.toCanvas(document.getElementById('canvas'), newProductInJSON, function (error) {
      if (error) console.error(error)
      console.log('QR code canvas is success!');
    })
    // this.resetForm(this.form)
  }

  resetForm(form:  NgForm)  {
    form.resetForm();
}

  addQR(product: ProductI): void {
    this.qrScan.addProduct(product)
      .subscribe((data)=> {
        this.product = data
        this.createdProduct.emit(data);
        console.log("got here in merchant compoemt,data:",data)
      });
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.product); }

}
