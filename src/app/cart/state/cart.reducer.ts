
import { createReducer, on } from "@ngrx/store";
import { add_to_cart_start, add_to_cart_success, delete_cart_item_success, load_cart_item_success } from "./cart.actions";
import { intailState } from "./cart.state";

const _cartReducer = createReducer(intailState,
    on(add_to_cart_success,(state,{cart}) => {
        var newCart = {...cart};  ;
        newCart.id = state.cart !=null ?state.cart.length+1 : 1 ; 
    if(state.cart ==null){
        return {
            ...state,
            cart :[newCart]
            
        }
    }
    
    return {
        ...state,
        cart :[...state.cart ,newCart]
        
    }
}),on(delete_cart_item_success,(state,{id})=>{
    const cart = state.cart.filter(cart => cart.id != id)
    return{
        ...state,
        cart :cart 
    }
}),on(load_cart_item_success,(state,{cart})=>{
    return{
        ...state,
        cart :cart 
    }
})


)

export function cartReducer(state,action){
    return _cartReducer(state, action);
}