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
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/footer/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DividerComponent } from './component/divider/divider.component';
import { BottomBarComponent } from './component/footer/bottom-bar/bottom-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
