import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { CartService } from "src/app/services/cart.service";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setLoaderStatus } from "src/app/store/shared/shared.actions";
import { add_to_cart_start, add_to_cart_success, delete_cart_item_start, delete_cart_item_success, load_cart_item_start, load_cart_item_success } from "./cart.actions";



@Injectable()

export class CartEffects{
    constructor(
        private actions$: Actions, 
        private cartService: CartService , 
        private store :Store<AppState>,
        private router :Router
    ){}

    SaveCartToDb$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(add_to_cart_start),
          exhaustMap(({cart,product_id}) => {
            return this.cartService.saveCart(cart,product_id).pipe(
              map((data) => {
                // success
                //swithmap best
                this.store.dispatch(setLoaderStatus({status:false}))
                this.store.dispatch(setErrorMessage({message:""}))
                return add_to_cart_success({cart});
              }),
              catchError((errRes) => {
                  //fail / error 
                  this.store.dispatch(setLoaderStatus({status:false}))
                console.log(errRes.error.error)
                
                return of(setErrorMessage({message:"Something Bad Happened"}));
              })
            );
          })
        );
      });

      /*
      SaveCartToLocal$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(add_to_cart_start),
          exhaustMap(({cart}) => {
            return this.cartService.saveCart(cart).pipe(
              map((data) => {
                // success
                //swithmap best
                this.store.dispatch(setLoaderStatus({status:false}))
                this.store.dispatch(setErrorMessage({message:""}))
                return add_to_cart_success({cart});
              }),
              catchError((errRes) => {
                  //fail / error 
                  this.store.dispatch(setLoaderStatus({status:false}))
                console.log(errRes.error.error)
                
                return of(setErrorMessage({message:"Something Bad Happened"}));
              })
            );
          })
        );
      });
*/

      
    loadCartFromDb$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(load_cart_item_start),
          exhaustMap((action) => {
            return this.cartService.getAllCartByUser().pipe(
              map((cart) => {
                // success
                
               // this.store.dispatch(setLoaderStatus({status:false}))
                this.store.dispatch(setErrorMessage({message:""}))
                
                 //this.authService.saveUserToLocalStorage(user);
                return load_cart_item_success({cart});
              }),
              catchError((errRes) => {
                  //fail / error 
                 // this.store.dispatch(setLoaderStatus({status:false}))
                console.log(errRes.error.error)
                
                return of(setErrorMessage({message:"Some Thing wrong"}));
              })
            );
          })
        );
      });

      deleteCartFromDB$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(delete_cart_item_start),
          exhaustMap(({id})=>{
          return this.cartService.deleteCart(id).pipe(
            map((data)=>{
              this.store.dispatch(setErrorMessage({message:""}))
                return delete_cart_item_success({id})
            }),
            catchError((errRes)=>{
              console.log(errRes.error.error)
                
              return of(setErrorMessage({message:"Cart Delete Fail"}));
            })
          );
        })
        )
      })

}


