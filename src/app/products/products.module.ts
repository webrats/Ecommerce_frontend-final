import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RatingComponent } from "../shared/components/rating/rating.component";

import { ScreenComponent } from "./main-view/screen.component";
import { ProductViewComponent } from "./product-view/product-view.component";
import { ProductsEffect } from "./state/products.effects";
import { productReducer } from "./state/products.reducer";

const routes :Routes = [
    {path:"" , component: ScreenComponent},
    {path:'view',component: ProductViewComponent}
]

@NgModule({
    imports: [
    CommonModule,
    ReactiveFormsModule ,
    EffectsModule.forFeature([ProductsEffect]),
    StoreModule.forFeature("products",productReducer),
    RouterModule.forChild(routes),
    ],
    declarations: [
    RatingComponent,
    ScreenComponent,
    ProductViewComponent
   
    ]
})

export class ProductsModule{

}