import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { load_posts_success_action } from "src/app/posts/state/posts.actions";
import { ProductService } from "src/app/services/product.service";
import { products_load_start, products_load_success } from "./products.actions";


@Injectable()

export class ProductsEffect {
    constructor(private productsService: ProductService ,
                private actions$:Actions) {}


loadProducts$ = createEffect(()=>{
    return this.actions$.pipe(
        ofType(products_load_start),
        exhaustMap((action)=>{
            return this.productsService.getAllProducts().pipe(
                map((products)=>{
                    return products_load_success({products});
                })
            );
        })
    )
})

}