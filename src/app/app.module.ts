import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './component/navbar/top-bar/top-bar.component';
import { HeaderComponent } from './component/navbar/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { WomenComponent } from './component/women/women.component';
import { OfferComponent } from './component/offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
