import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductI } from '../product-i';
import { QrscanService } from '../../shared/qrscan.service';
import { Products } from '../products';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  product: string;
  seller: string;
  loyaltypercent:number;
  price: number;
  error: boolean = false;
  submitted: boolean = true

  @Output() createdProduct = new EventEmitter<ProductI>();

  constructor(
    private productService: QrscanService,
    protected formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  // Init the creation form.
  private initForm() {
    this.productForm = new FormGroup({
      product: new FormControl(this.product, Validators.required),
      price: new FormControl(this.price, Validators.required),
      loyaltypercent: new FormControl(this.loyaltypercent, Validators.required),
      seller: new FormControl(this.seller, Validators.required),
    });
  }

  // Manage the submit action and create the new product.
  onSubmit() {
    const product = new Products(null, this.productForm.value['product'], this.productForm.value['loyaltypercent'], this.productForm.value['seller'], null);
    this.productService.addProduct(product).subscribe((result: ProductI) => {
      if (result === undefined) {
        this.error = true;
        this.submitted = false;
      } else {
        this.error = false;
        this.createdProduct.emit(result);
      }
    });
  }

  // Hide the error message.
  hideError() {
    this.error = false;
  }

}
