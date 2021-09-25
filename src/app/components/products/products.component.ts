import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppProductStaste, ProductsState } from 'src/app/ngrx/products.reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsState$: Observable<ProductsState>;

  constructor(private productService: ProductsService, private router: Router, private store: Store<AppProductStaste>) { 
    this.productsState$ = this.store.pipe(map(state => state.productsState));
  }

  ngOnInit(): void {
        this.productsState$ = this.store.pipe(
      map(state => state.productsState)
    )
  }

  onGetAllProducts() {
  this.productService.getAllProducts()
  }
  onGetSelectedProducts() {
  this.productService.getSelectedProducts()
  }
  onGetAvailableProducts() {
  this.productService.getAvailableProducts()
  }

  onSearch(dataForm : any) {
    this.productService.searchProducts(dataForm.keyword)
  }
  onSelect(product: Product) {
    this.productService.select(product);
  }
  onDelete(product: Product){
    const ok = confirm('Êtes-vous sûr de vouloir supprimer de la base?');
    if(ok){
    this.productService.delete(product)
      .subscribe(()=> {
        this.onGetAllProducts();
      });
    }
  }
  onEdit(product: Product){this.router.navigateByUrl(`/edit-product/${product.id}`); }
}
