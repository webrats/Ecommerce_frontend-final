import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { autoLogin } from './auth/state/auth.actions';
import { AppState } from './store/app.state';
import { getErrorMessage, getLoaderStatus } from './store/shared/shared.seletors';
import * as AOS from 'aos';
import { setLoaderStatus } from './store/shared/shared.actions';
import { load_cart_item_start } from './cart/state/cart.actions';
import { getAuthUserState } from './auth/state/auth.selectors';
import { state } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';



  loaderStatus :Observable<boolean> ;
  errorMessage : Observable<String> ;
  isLoggedIn : boolean ; 
  constructor(private store:Store<AppState>){}


  

  ngOnInit(): void {
    AOS.init();
    this.loaderStatus = this.store.select(getLoaderStatus)

     this.errorMessage = this.store.select(getErrorMessage) 

    this.store.dispatch(autoLogin()) ;
    


  }

  
  

  
}
