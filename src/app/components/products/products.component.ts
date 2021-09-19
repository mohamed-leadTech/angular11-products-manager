import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from '../../services/products.service';
import { map, startWith, catchError } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { ActionEvent, AppDataState, DataEnumState, ProductActionType } from 'src/app/state/products.state';
import { Router } from '@angular/router';
import { EventDriverService } from 'src/app/state/event-driven.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataEnumState;

  constructor(private productService: ProductsService, private router: Router, private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable.subscribe((actionEvent: ActionEvent)=>{
      this.onActionEvent(actionEvent);
    });
  }

  onGetAllProducts() {
    this.products$ = this.productService.getAllProducts()
    .pipe(
      map((data)=>({dataState: DataEnumState.LOADED, data: data})),
      startWith({dataState: DataEnumState.LOADING}),
      catchError(err=>of({dataState: DataEnumState.ERROR, errorMessage: err.message}))

    );

  }
  onGetSelectedProducts() {
    this.products$ = this.productService.getSelectedProducts()
    .pipe(
      map((data)=>({dataState: DataEnumState.LOADED, data: data})),
      startWith({dataState: DataEnumState.LOADING}),
      catchError(err=>of({dataState: DataEnumState.ERROR, errorMessage: err.message}))

    );
  }
  onGetAvailableProducts() {
    this.products$ = this.productService.getAvailableProducts()
    .pipe(
      map((data)=>({dataState: DataEnumState.LOADED, data: data})),
      startWith({dataState: DataEnumState.LOADING}),
      catchError(err=>of({dataState: DataEnumState.ERROR, errorMessage: err.message}))

    )
  }

  onSearch(dataForm : any) {
    this.products$ = this.productService.searchProducts(dataForm.keyword)
    .pipe(
      map((data)=>({dataState: DataEnumState.LOADED, data: data})),
      startWith({dataState: DataEnumState.LOADING}),
      catchError(err=>of({dataState: DataEnumState.ERROR, errorMessage: err.message}))

    )

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
  onAddNewProduct() {
    this.router.navigateByUrl('/add-product');
  }
  onEdit(product: Product){
    this.router.navigateByUrl(`/edit-product/${product.id}`);
  }
  onActionEvent($event: ActionEvent) {
    switch($event.type) {
      case ProductActionType.GET_ALL_PRODUCTS:this.onGetAllProducts(); break;
      case ProductActionType.GET_SELECTED_PRODUCTS:this.onGetSelectedProducts();break;
      case ProductActionType.GET_AVAILABLE_PRODUCTS:this.onGetAvailableProducts();break;
      case ProductActionType.SEARCH_PRODUCTS: this.onSearch($event.payload); break;
      case ProductActionType.ADD_PRODUCT:this.onAddNewProduct();break;
      case ProductActionType.SELECT_PRODUCT:this.onSelect($event.payload); break;
      case ProductActionType.DELETE_PRODUCT:this.onDelete($event.payload); break;
      case ProductActionType.EDIT_PRODUCT:this.onEdit($event.payload); break;


      
    }

  }
}
