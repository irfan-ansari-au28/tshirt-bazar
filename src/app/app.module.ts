import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './component/navbar/top-bar/top-bar.component';
import { HeaderComponent } from './component/navbar/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { WomenComponent } from './component/women/women.component';
import { OfferComponent } from './component/offer/offer.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/footer/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { DividerComponent } from './component/divider/divider.component';
import { BottomBarComponent } from './component/footer/bottom-bar/bottom-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownSelectComponent } from './component/men/dropdown-select/dropdown-select.component';
import { CounterComponent } from './component/counter/counter.component';
import { PipePipe } from './pipe.pipe';
import { DiscountComponent } from './component/offer/discount/discount.component';
import { COUNTER_STATE_NAME } from './store/couter/counter.selector';
import { reducer } from './store/couter/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { CounterButtonsComponent } from './component/counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './component/counter/counter-output/counter-output.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { cartReducer } from './store/cart/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CheckoutComponent } from './component/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    OfferComponent,
    FooterComponent,
    CardComponent,
    DividerComponent,
    BottomBarComponent,
    ProductCardComponent,
    DropdownSelectComponent,
    CounterComponent,
    PipePipe,
    DiscountComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    ProductDetailsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ cart: cartReducer }),
    StoreModule.forFeature(COUNTER_STATE_NAME, reducer),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    FontAwesomeModule,
    MatCardModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
