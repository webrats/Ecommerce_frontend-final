import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store"
import { Product } from "src/app/models/Product";
import { ProductsModule } from "../products.module";
import { ProductState } from "./products.state"

const getProductsState = createFeatureSelector<ProductState>("products");

export const getProducts =  createSelector(getProductsState,(state) =>{
    return state.products ;
})

export const getProductsByCatId = createSelector(getProductsState , (state,id:number) =>{
    if(id==0){
        return state.products ;
    }
   const newProducts= state.products.filter(product => product.category_id == id);
   return newProducts ;
})
export const getProductsById= createSelector(getProductsState , (state,id:number) =>{
    
   const newProducts:Product= state.products.filter(product => product.id == id);
   return newProducts ;
})

export const sortByPriceLowToHigh = createSelector(getProductsState , (state)=>{

    return [...state.products].sort((a, b) => {
        return  a.price - b.price
    }) ;
})
export const sortByPriceHighToLow = createSelector(getProductsState , (state)=>{

    return [...state.products].sort((a, b) => {
        return b.price - a.price
    }) ;
})