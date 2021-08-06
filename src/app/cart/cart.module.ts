import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CartScreenComponent } from './cart-screen/cart-screen.component';


const routes :Routes = [
    {path:"" , component: CartScreenComponent},
    {path:"checkout", redirectTo: ""}
    
]

@NgModule({
    imports: [
    CommonModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
    ],
    declarations: [

    CartScreenComponent,
]
})

export class CartModule{

}