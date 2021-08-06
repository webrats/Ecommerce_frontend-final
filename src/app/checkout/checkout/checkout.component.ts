import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { delete_cart_item_success } from 'src/app/cart/state/cart.actions';
import { getCart } from 'src/app/cart/state/cart.selectors';
import { Cart } from 'src/app/models/Cart';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private store: Store<AppState>,private router:Router) { }
  

  cart :Cart[] ;

  onDestroy : Subscription ;
 
  ngOnInit(): void {
    this.onDestroy = this.store.select(getCart).subscribe(cart => {
      this.cart = cart ;
    })
    
  }

  ngOnDestroy(): void {
    //this.onDestroy.unsubscribe();
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

  

  checkout(){
    alert("Order Placed Successfully ♥ ")
    this.router.navigate(['products'])
  }

  isEmpty(){
    if(this.cart != null){
      return false ;
    }
    
    return true ;
  }


}
