import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventDriverService } from 'src/app/state/event-driven.service';
import { ActionEvent, ProductActionType } from 'src/app/state/products.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  //@Output() productEventEmetter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }
  onGetAllProducts() {
    //this.productEventEmetter.emit({type: ProductActionType.GET_ALL_PRODUCTS});
    this.eventDriverService.publishEvent({type: ProductActionType.GET_ALL_PRODUCTS})

  }
  onGetSelectedProducts(){
    //this.productEventEmetter.emit({type: ProductActionType.GET_SELECTED_PRODUCTS});
    this.eventDriverService.publishEvent({type: ProductActionType.GET_SELECTED_PRODUCTS});

  }
  onGetAvailableProducts(){
    //this.productEventEmetter.emit({type: ProductActionType.GET_AVAILABLE_PRODUCTS});
    this.eventDriverService.publishEvent({type: ProductActionType.GET_AVAILABLE_PRODUCTS});


  }
  onAddNewProduct(){
    //this.productEventEmetter.emit({type: ProductActionType.ADD_PRODUCT});
    this.eventDriverService.publishEvent({type: ProductActionType.ADD_PRODUCT});

  }
  onSearch(value: any){
    //this.productEventEmetter.emit({type: ProductActionType.SEARCH_PRODUCTS, payload: value});
    this.eventDriverService.publishEvent({type: ProductActionType.SEARCH_PRODUCTS, payload: value});

  }
}
