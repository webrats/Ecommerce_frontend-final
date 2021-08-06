import { createAction, props } from "@ngrx/store";
import { Cart } from "src/app/models/Cart";

const ADD_CART_ITEM_START = "[Cart Page] add to cart START" ;
const ADD_CART_ITEM_SUCCESS = '[Cart Page] add to cart SUCCESS' ;
const ADD_CART_ITEM_FAIL = '[Cart Page] add to cart FAIL' ;


export const add_to_cart_start = createAction(ADD_CART_ITEM_START,props<{cart:Cart,product_id:number}>())
export const add_to_cart_success = createAction(ADD_CART_ITEM_SUCCESS,props<{cart:Cart}>())


const DELETE_CART_ITEM_START = "[Cart page ] delete from cart START"
const DELETE_CART_ITEM_SUCCESS = "[Cart page ] delete from cart SUCCESS"

export const delete_cart_item_start  = createAction(DELETE_CART_ITEM_START , props<{id:number}>()) ;
export const delete_cart_item_success  = createAction(DELETE_CART_ITEM_SUCCESS , props<{id:number}>()) ;

const LOAD_CART_ITEM_START = "[Cart page ] load cart START"
const LOAD_CART_ITEM_SUCCESS = "[Cart page ] load cart SUCCESS"

export const load_cart_item_start = createAction(LOAD_CART_ITEM_START);
export const load_cart_item_success = createAction(LOAD_CART_ITEM_SUCCESS,props<{cart:Cart[]}>());
