import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event-driven.service';
import { ActionEvent, ProductActionType } from 'src/app/state/products.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()product!: Product;
  //@Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }

  onSelect(product: Product){
    //this.eventEmitter.emit({type: ProductActionType.SELECT_PRODUCT, payload:product});
    this.eventDriverService.publishEvent({type: ProductActionType.SELECT_PRODUCT, payload:product});
  }
  onDelete(product: Product) {
    //this.eventEmitter.emit({type: ProductActionType.DELETE_PRODUCT, payload:product});
    this.eventDriverService.publishEvent({type: ProductActionType.DELETE_PRODUCT, payload:product});


  }
  onEdit(product: Product) {
    //this.eventEmitter.emit({type: ProductActionType.EDIT_PRODUCT, payload:product});
    this.eventDriverService.publishEvent({type: ProductActionType.EDIT_PRODUCT, payload:product});


  }

}
