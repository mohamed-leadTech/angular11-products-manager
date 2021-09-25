import { Component,Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducers';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  readonly ProductsStateEnum = ProductsStateEnum;
  @Input() productsState$: Observable<ProductsState> | null = null;
  constructor() { }

  ngOnInit(): void {
  }
}
