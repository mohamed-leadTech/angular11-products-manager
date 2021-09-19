import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataEnumState, ProductActionType } from 'src/app/state/products.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products$: Observable<AppDataState<Product[]>> | null = null;
  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();
  readonly DataStateEnum = DataEnumState;

  constructor() { }

  ngOnInit(): void {
  }
/*
  onSelect(product: Product) {
    //this.productEventEmitter.emit({type: ProductActionType.SELECT_PRODUCT, payload: product});
    this.eventDriverService.publishEvent({type: ProductActionType.SELECT_PRODUCT, payload: product});


  }
  onDelete(product: Product) {
    //this.eventDriverService.publishEvent({type: ProductActionType.DELETE_PRODUCT, payload: product});
    this.eventDriverService.publishEvent({type: ProductActionType.DELETE_PRODUCT, payload: product});

  }
  onEdit(product: Product) {
    //this.eventDriverService.publishEvent({type: ProductActionType.EDIT_PRODUCT, payload: product});
    this.eventDriverService.publishEvent({type: ProductActionType.EDIT_PRODUCT, payload: product});
  }
/*
  onActionEvent($event: ActionEvent) {
    this.productEventEmitter.emit($event);
  }
*/
}
