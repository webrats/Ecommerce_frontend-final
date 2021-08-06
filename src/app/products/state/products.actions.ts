import { createAction, props } from "@ngrx/store"
import { Product } from "src/app/models/Product";

const PRODUCTS_LOAD_START = "[Products Page] Products Load START"
const PRODUCTS_LOAD_SUCCESS = "[Products Page] Products Load SUCCESS"
const PRODUCTS_LOAD_FAIL = "[Products Page] Products Load FAIL"

export const products_load_start =createAction(PRODUCTS_LOAD_START);
export const products_load_success =createAction(PRODUCTS_LOAD_SUCCESS,props<{products:Product[]}>());
export const products_load_fail = createAction(PRODUCTS_LOAD_FAIL);