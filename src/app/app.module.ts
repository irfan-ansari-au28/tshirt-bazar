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
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownSelectComponent } from './component/men/dropdown-select/dropdown-select.component';
import { CounterComponent } from './component/counter/counter.component';
import { PipePipe } from './pipe.pipe';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    FontAwesomeModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
