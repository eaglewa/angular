import { Component, OnInit } from '@angular/core';
import {GoodsService} from '../../service/goodsService';
import {Goods} from '../../model/goods';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  goods: Goods;

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.getGoods();
  }

  private getGoods() {
    this.goods = new Goods();
    this.goodsService.getGoods().then(data => {
      this.goods = data;
      console.log('goods:', this.goods);
    });
  }


}
