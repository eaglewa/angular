import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: string;

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
      this.routerInfo.params.subscribe((params: Params) => this.productId = params["id"]);
  }

}
