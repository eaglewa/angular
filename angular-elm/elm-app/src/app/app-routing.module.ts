import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodsComponent} from './component/goods/goods.component';
import {RatingsComponent} from './component/ratings/ratings.component';
import {SellerComponent} from './component/seller/seller.component';

const routes: Routes = [{
  path: '', redirectTo: '/goods', pathMatch: 'full'
}, {
  path: 'goods', component: GoodsComponent
}, {
  path: 'ratings', component: RatingsComponent
}, {
  path: 'seller', component: SellerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
