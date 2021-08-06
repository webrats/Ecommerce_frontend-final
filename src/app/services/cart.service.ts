import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { load_cart_item_start } from '../cart/state/cart.actions';
import { Cart } from '../models/Cart';
import { AppState } from '../store/app.state';
import { setLoaderStatus } from '../store/shared/shared.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = "http://localhost:8080/cart"
  constructor(private httpClient: HttpClient,private store: Store<AppState>) { }


  getAllCartByUser(): Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(`${this.url}`);
  }
  saveCart(cart:Cart ,product_id:number): Observable<any>{
    return this.httpClient.post<any>(`${this.url}/${product_id}`,cart);
  }
  deleteCart(id:number): Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }



  /*
   isLoggedInUser() : boolean {
     let logged ;
     this.store.select(getAuthUserState).subscribe(data=>{
       logged =  data ; 
     })
     return logged ; 
   }
   */
   


   addCartToLocalStorage(cart:Cart ){
    localStorage.setItem('cart',JSON.stringify(cart));
  }
  
  removeCartFromLocalStorageById(id:number){
   let cart :Cart[]= JSON.parse(localStorage.getItem('cart'));
   let newCart :Cart[]= cart.filter(item => item.id != id);
    localStorage.removeItem('cart');
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
  removeCartFromLocalStorage(){
     localStorage.removeItem('cart'); 
   }




}
