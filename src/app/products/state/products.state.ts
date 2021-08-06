import { Product } from "src/app/models/Product";

export interface ProductState{
    products:null|Product[] ;
}

export const intialState :ProductState = {
    products : null 
}