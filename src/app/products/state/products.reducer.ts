import { createReducer, on } from "@ngrx/store";
import { products_load_success } from "./products.actions";
import { intialState } from "./products.state";


const _productReducer = createReducer(intialState,
    on(products_load_success,(state,action)=>{
        return {
            ...state,
            products : action.products 
        }
    })
    );


export function productReducer(state,action){
    return _productReducer(state,action) ;
}