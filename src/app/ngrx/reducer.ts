import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { 
    AppProductStaste,
    errorReducer,
    productsReducer
} from "./products.reducers";

export const reducers: ActionReducerMap<AppProductStaste> = {
    productsState: productsReducer
};

const debugMeta = 
(reducer: ActionReducer<any>): ActionReducer<any> =>
(state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action)
}

export const metaReducers: MetaReducer<AppProductStaste>[] = environment.production
?[]
:[debugMeta];