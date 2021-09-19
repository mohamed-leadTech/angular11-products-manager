
export enum ProductActionType{
    GET_ALL_PRODUCTS="[Product] Get All products",
    GET_SELECTED_PRODUCTS="[Product] Get Selected products",
    GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
    SEARCH_PRODUCTS="[Product] Get Search products",
    ADD_PRODUCT="[Product] Get Add product",
    SELECT_PRODUCT="[Product] Get Select product",
    EDIT_PRODUCT="[Product] Get Edit product",
    DELETE_PRODUCT="[Product] Get Delete product"
}

export interface ActionEvent{
    type: ProductActionType,
    payload?: any
}

export enum DataEnumState{
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
    dataState: DataEnumState,
    data?: T,
    errorMessage?: string

}