import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CheckoutComponent } from './checkout/checkout.component';
import { ChekcoutDetailsComponent } from './chekcout-details/chekcout-details.component';



const routes :Routes = [
    {path:"" , component:ChekcoutDetailsComponent},
    {path:"confirm" , component:CheckoutComponent}
    ,
   
]

@NgModule({
    imports: [
        ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
    ],
    declarations: [

CheckoutComponent,

ChekcoutDetailsComponent]
})

export class CheckoutModule{

}