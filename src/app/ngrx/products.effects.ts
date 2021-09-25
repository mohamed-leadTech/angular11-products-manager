import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap } from "rxjs/operators";
import { ProductsService } from "../services/products.service";
import { 
    getAllProducts,
    getAllProductsSuccess,
    getAllProductsError,
    getSelectedProducts,
    getSelectedProductsSuccess,
    getSelectedProductsError,
    getAvailableProducts,
    getAvailableProductsSuccess,
    getAvailableProductsError,
    addNewProduct,
    addNewProductSuccess,
    addNewProductError
} from "./products.actions";

@Injectable()
export class ProductsEffects {
    constructor(private productsService: ProductsService, private actions: Actions){};
    
    getProducts$=createEffect(()=>
    this.actions.pipe(
        ofType(getAllProducts),
        mergeMap(_action =>
            this.productsService.getAllProducts()
            .pipe(
                map(products => getAllProductsSuccess(products)),
                catchError(error => of(getAllProductsError(error.message)))
                )
            ))
        );
    
    getSelectedProducts$ = createEffect(()=>
    this.actions.pipe(
        ofType(getSelectedProducts),
        mergeMap(_action =>
            this.productsService.getSelectedProducts()
            .pipe(
                map(products => getSelectedProductsSuccess(products)),
                catchError(error => of(getSelectedProductsError(error.message)))
                )
            ))
        );

        getAvailableProducts$ = createEffect(()=>
        this.actions.pipe(
            ofType(getAvailableProducts),
            mergeMap(_action =>
                this.productsService.getAvailableProducts()
                .pipe(
                    map(products => getAvailableProductsSuccess(products)),
                    catchError(error => of(getAvailableProductsError(error.message)))
                    )
                ))
            );
        addNewProduct$ = createEffect(()=>
            this.actions.pipe(
                ofType(addNewProduct),
                mergeMap(action =>
                    this.productsService.save(action.product)
                    .pipe(
                        map(product => addNewProductSuccess(product)),
                        catchError(error => of(addNewProductError(error.message)))
                        )
                    ))
                );
    

       
}