import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()product!: Product;
  //@Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product){
    //this.eventEmitter.emit({type: ProductActionType.SELECT_PRODUCT, payload:product});
    return product;
  }
  onDelete(product: Product) {
    //this.eventEmitter.emit({type: ProductActionType.DELETE_PRODUCT, payload:product});
return product

  }
  onEdit(product: Product) {
    //this.eventEmitter.emit({type: ProductActionType.EDIT_PRODUCT, payload:product});
return product;

  }

}
