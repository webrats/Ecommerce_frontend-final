import { Product } from "./Product";


export interface Cart {
    id? :number ;
    product_id :number ;
    qty :number ;
    price :number ;
    added_date :Date ;
    user_id :number ;
    product? :Product ;
    

}