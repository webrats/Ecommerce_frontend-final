import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Cart } from "src/app/models/Cart";
import { CartState } from "./cart.state";

export const CART_STATE_NAME ="cart"

const getCartState = createFeatureSelector<CartState>(CART_STATE_NAME) ;

export const getCartSize = createSelector(getCartState,state =>{
    return  state.cart == null ? 0 :state.cart.length
    
})

export const getCart = createSelector(getCartState,state =>{
    return state.cart ;
})
