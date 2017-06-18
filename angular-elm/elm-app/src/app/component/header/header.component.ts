import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {SellerService} from "../../service/sellerService";
import {Seller} from "../../model/seller/seller";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  seller: Seller;

  constructor(private sellerService: SellerService) {
  }

  ngOnInit() {
    this.getSeller();
  }

  private getSeller() {
    this.seller = new Seller();
    this.sellerService.getSeller().then(data => {
      this.seller = data;
      console.log("seller:", this.seller);
    });
  }

}
