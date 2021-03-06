import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { OfferComponent } from './component/offer/offer.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { WomenComponent } from './component/women/women.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'offer', component: OfferComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGaurdService],
  },
  { path: 'products/:productId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
