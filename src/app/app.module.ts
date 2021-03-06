import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { appReducer } from './store/app.state';
import { AuthEffects } from './auth/state/auth.effects';
import { BasicAuthInterceptorInterceptor } from './interceptor/basic-auth-interceptor.interceptor';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CartComponent } from './shared/components/cart-icon/cart.component';
import { CartEffects } from './cart/state/cart.effects';
import { RatingComponent } from './shared/components/rating/rating.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    CartComponent,
   
  
    
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AuthEffects,CartEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [
    {provide :HTTP_INTERCEPTORS ,useClass:BasicAuthInterceptorInterceptor ,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
