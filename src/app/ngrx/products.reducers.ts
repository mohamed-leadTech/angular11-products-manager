import { HttpErrorResponse } from "@angular/common/http";
import { Action, createReducer, on } from "@ngrx/store";
import { Product } from "../model/product.model";
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
import { ProductsEffects } from "./products.effects";

export enum ProductsStateEnum{
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL ="Initial"
}

export interface ProductsState {
    dataState: ProductsStateEnum;
    products: Product[];
    errorMessage: string;

}

export interface AppProductStaste {
    productsState: ProductsState;
}

const initialState: ProductsState = {
    products: [],
    errorMessage: "",
    dataState: ProductsStateEnum.INITIAL
}

export const productsReducer =  createReducer(

    initialState,

    on(getAllProducts, (state) => ({...state, dataState: ProductsStateEnum.LOADING})),
    on(getAllProductsSuccess, (state, {products}) => ({...state, products, dataState: ProductsStateEnum.LOADED})),
    on(getAllProductsError, (state, {error}) => ({...state, errorMessage: error.message, dataState: ProductsStateEnum.ERROR})),

    //Get selected products
    on(getSelectedProducts, (state) => ({...state, dataState: ProductsStateEnum.LOADING})),
    on(getSelectedProductsSuccess, (state, {products}) => ({...state, products, dataState: ProductsStateEnum.LOADED})),
    on(getSelectedProductsError, (state, {error}) => ({...state, errorMessage: error.message, dataState: ProductsStateEnum.ERROR})),

    //Get Available products
    on(getAvailableProducts, (state) => ({...state, dataState: ProductsStateEnum.LOADING})),
    on(getAvailableProductsSuccess, (state, {products}) => ({...state, products, dataState: ProductsStateEnum.LOADED})),
    on(getAvailableProductsError, (state, {error}) => ({...state, errorMessage: error.message, dataState: ProductsStateEnum.ERROR}))

);

const initialNewProductState: Product = new Product();
export const addNewProductReducer = createReducer(
initialNewProductState,
on(addNewProduct, (state, {product}) => product),
on(addNewProductSuccess, (state, {product}) => product),
)

const initialErrorMessageSate: string = '';

export const errorReducer = createReducer(
    initialErrorMessageSate,
    on(getAllProductsSuccess, (state) => initialErrorMessageSate),
    on(getAllProductsError, (state, {error}) => error.message),
    on(addNewProductError, (state, {error}) =>error.message)


)
/*
const initialStatusState: ProductsStateEnum = new ProductsStateEnum();
export const statusReducer = createReducer(
    initialStatusState,
    on(getAllProducts, (state) => ProductsStateEnum.LOADING),
    on(getAllProductsSuccess, (state) => initialErrorSate),
    on(getAllProductsError, (state, {errorMessage}) => errorMessage),

)

/*
export function ProductsReducer(state: ProductsState = initialState, action: Action) : ProductsState{
    switch(action.type){
        case ProductsActionsTypes.GET_ALL_PRODUCTS:
            return {...state, dataState: ProductsStateEnum.LOADING};
        case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return {...state, products: action.payload, dataState: ProductsStateEnum.LOADED};
        case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
            return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.payload};
        default:
            return{...state};
    }
*/
