import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllProducts, getAvailableProducts, getSelectedProducts } from 'src/app/ngrx/products.actions';
import { AppProductStaste } from 'src/app/ngrx/products.reducers';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  productsState$?: Observable<AppProductStaste>;

  constructor(private store: Store<AppProductStaste>, private router:Router) { }

  ngOnInit(): void {
    this.onGetAllProducts();
  }
  onGetAllProducts() {
    this.store.dispatch(getAllProducts())
  }
  onGetSelectedProducts(){
    this.store.dispatch(getSelectedProducts())
  }
  onGetAvailableProducts(){
    this.store.dispatch(getAvailableProducts())
  }
  onAddNewProduct(){
    this.router.navigateByUrl('/add-product');
  } 
  onSearch(value: any){
    this.store.dispatch(getAllProducts())
  }
}
