import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCartSize } from 'src/app/cart/state/cart.selectors';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  cartSize : number ;
  ngOnInit(): void {
    this.store.select(getCartSize).subscribe(data =>{
      this.cartSize = data ;
    })
  }

}
