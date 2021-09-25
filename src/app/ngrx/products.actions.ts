import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import {createAction } from "@ngrx/store"
import { Product } from "../model/product.model";
/*
export enum ProductsActionsTypes{
    GET_ALL_PRODUCTS="[Product] Get All products",
    GET_ALL_PRODUCTS_SUCCESS="[Product] Get All products Success",
    GET_ALL_PRODUCTS_ERROR="[Product] Get All products Error",

/*
    GET_SELECTED_PRODUCTS="[Product] Get Selected products",
    GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
    SEARCH_PRODUCTS="[Product] Get Search products",
    ADD_PRODUCT="[Product] Get Add product",
    SELECT_PRODUCT="[Product] Get Select product",
    EDIT_PRODUCT="[Product] Get Edit product",
    DELETE_PRODUCT="[Product] Get Delete product"
    *
}

export class GetAllProductsActions implements Action {
    type: ProductsActionsTypes= ProductsActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any){};
    
}

export class GetAllProductsActionsSuccess implements Action {
    type: ProductsActionsTypes= ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]){};
    
}

export class GetAllProductsActionsError implements Action {
    type: ProductsActionsTypes= ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string){};
    
}

export type ProductsActions = GetAllProductsActions | GetAllProductsActionsSuccess | GetAllProductsActionsError;
*/

// Get All Products
export const getAllProducts =  createAction('[Product] Get All products');

export const getAllProductsSuccess =  createAction(
    '[Product] Get All products Success',
    (products: Product[]) => ({products})
    );

export const getAllProductsError =  createAction(
    '[Product] Get All products Error',
    (error: HttpErrorResponse) => ({error})
    );

// Selected Products
export const getSelectedProducts = createAction(
    '[Product] Get Selected products'
);
export const getSelectedProductsSuccess = createAction(
    '[Product] Get Selected products Success',
    (products: Product[]) => ({products})
);
export const getSelectedProductsError = createAction(
    '[Product] Get Selected products Error',
    (error: HttpErrorResponse) =>({error})
);

// Available Products
export const getAvailableProducts = createAction(
    '[Product] Get Selected products'
);
export const getAvailableProductsSuccess = createAction(
    '[Product] Get Available products Success',
    (products: Product[]) => ({products})
);
export const getAvailableProductsError = createAction(
    '[Product] Get Available products Error',
    (error: HttpErrorResponse) =>({error})
);

// Add new Product
export const addNewProduct = createAction(
    '[Product] Add New Product',
    (product: Product) => ({product})
);
export const addNewProductSuccess = createAction(
    '[Product] Add New Product Success',
    (product: Product) => ({product})
);
export const addNewProductError = createAction(
    '[Product] Add New Product Error',
    (error: HttpErrorResponse)=>({error})
);


