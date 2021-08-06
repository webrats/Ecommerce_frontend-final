import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Product';
import { add_to_cart_start } from 'src/app/cart/state/cart.actions';
import { AppState } from 'src/app/store/app.state';
import { setLoaderStatus } from 'src/app/store/shared/shared.actions';
import { products_load_start } from '../state/products.actions';
import { getProducts, getProductsByCatId, getProductsById, sortByPriceHighToLow, sortByPriceLowToHigh } from '../state/products.selectors';
import { AuthUser } from 'src/app/models/AuthUser';
import { getAuthUser} from 'src/app/auth/state/auth.selectors';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit ,OnDestroy {

  products :Product[] =null;
  OnDestroy :Subscription;
  productsSize :number ; 
  productOnDestroy :Subscription ;
  activeItemId :number = 0 ;

  constructor(private store: Store<AppState>) { }
  ngOnDestroy(): void {
    this.OnDestroy.unsubscribe();
    
  }

  ngOnInit(): void {

   
    if(!this.products){
      this.store.dispatch(setLoaderStatus({status:true}))
      this.loadProduct()
    this.store.dispatch(setLoaderStatus({status:false}))
  
    }

    this.OnDestroy =  this.store.select(getProducts).subscribe(products =>{
      this.products = products ;
      this.productsSize  =this.products?this.products.length :0 ;
    });
   
  }


  
  async loadProduct(){
    await this.store.dispatch(products_load_start())
  }

filerByCategory(id:number){
  this.activeItemId = id;
  
  this.store.select(getProductsByCatId,id).subscribe(products =>{
    this.products = products
    this.productsSize  =this.products?this.products.length :0 ;
  });
}

sortByPriceLowToHigh(){
  
  this.store.select(sortByPriceLowToHigh).subscribe(products =>{
    this.products = products
    
  });
}

sortByPriceHighToLow(){
  
  this.store.select(sortByPriceHighToLow).subscribe(products =>{
    this.products = products
    
  });
}

addToCart(product_id:number,price:number ){

  let user_id :number ; 
  this.store.select(getAuthUser).subscribe(user=>{
    user_id = user.getUserId() ;
  })  ;

  let product:Product  ;
  this.store.select(getProductsById,product_id).subscribe(products =>{
    product = products
  });

  const cart : Cart = { 
    product_id : product_id,
    qty: 1,
    price : price,
    added_date : new Date(),
    user_id : user_id,
     
    
  }

  this.store.dispatch(add_to_cart_start({cart,product_id})) ;
  
}





}
