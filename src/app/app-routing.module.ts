import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { OfferComponent } from './component/offer/offer.component';
import { WomenComponent } from './component/women/women.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'offer', component: OfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
