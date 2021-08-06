import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutGuard } from './guards/checkout.guard';
import { PostGuard } from './guards/post.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path:'posts', loadChildren:()=> import('./posts/posts.module').then(m=> m.PostsModule) ,canActivate:[PostGuard]},
  { path: 'counter', loadChildren: () => import('./counter1/counter1.module').then(m => m.Counter1Module) },
  { path: 'auth' , loadChildren :()=>import("./auth/auth.module").then(m =>m.AuthModule)},
  { path: 'products' , loadChildren :()=>import("./products/products.module").then(m =>m.ProductsModule) },
  { path: 'cart' , loadChildren :()=>import("./cart/cart.module").then(m =>m.CartModule) },
  { path: 'checkout' , loadChildren :()=>import("./checkout/checkout.module").then(m =>m.CheckoutModule),canActivate:[CheckoutGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
