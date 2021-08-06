import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Cart } from 'src/app/models/Cart';
import { AppState } from 'src/app/store/app.state';
import { setLoaderStatus } from 'src/app/store/shared/shared.actions';
import { delete_cart_item_start, delete_cart_item_success, load_cart_item_start, load_cart_item_success } from '../state/cart.actions';
import { getCart } from '../state/cart.selectors';

@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.scss']
})
export class CartScreenComponent implements OnInit ,OnDestroy {

  constructor(private store: Store<AppState>,private router:Router) { }
  

  cart :Cart[] ;

  onDestroy : Subscription ;
 
  ngOnInit(): void {
  
    this.getCart().then(() =>{
      return this.onDestroy = this.store.select(getCart).subscribe(cart => {
        this.cart = cart ;
      })
    })
    
    
    
  }

  ngOnDestroy(): void {
    //this.onDestroy.unsubscribe();
  }

 
async getCart(){
  await this.store.dispatch(load_cart_item_start()) ;
}


  subTotal(){
    
    if(this.cart!=null){
     var sum = 0 
      for(let i = 0; i < this.cart.length ;i++){
         sum +=  this.cart[i].price ;
      }
      return sum.toFixed(2)
    }

    return 0 ;
  }

  cartSize(){
    if(this.cart != null){
      return this.cart.length;
    }
    return 0 ;
  }

  deleteFromCart(id:number){
    this.store.dispatch(delete_cart_item_start({id}))
  }

  checkout(){
    this.router.navigate(['/checkout']);
  }

  isEmpty(){
    if(this.cart != null){
      return false ;
    }
    
    return true ;
  }

}
