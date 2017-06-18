import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {DbService} from "./service/dbService";
import { HeaderComponent } from './component/header/header.component';
import {SellerService} from "./service/sellerService";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(DbService)
  ],
  providers: [SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
