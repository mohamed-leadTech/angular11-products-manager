import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addNewProduct } from 'src/app/ngrx/products.actions';
import { AppProductStaste } from 'src/app/ngrx/products.reducers';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private productService: ProductsService, private strore: Store<AppProductStaste>) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [1, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    })
  }
  onSaveProduct() {
    this.submitted = !this.submitted
    if(this.productFormGroup.invalid) return;
    this.strore.dispatch(addNewProduct(this.productFormGroup.value));

  }

}
