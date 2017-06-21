import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {DbService} from "./service/dbService";
import { HeaderComponent } from './component/header/header.component';
import {SellerService} from "./service/sellerService";
import {AppRoutingModule} from "./app-routing.module";
import { GoodsComponent } from './component/goods/goods.component';
import { RatingsComponent } from './component/ratings/ratings.component';
import { SellerComponent } from './component/seller/seller.component';
import {GoodsService} from "./service/goodsService";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoodsComponent,
    RatingsComponent,
    SellerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DbService)
  ],
  providers: [SellerService, GoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
