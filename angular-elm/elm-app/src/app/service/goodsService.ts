import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";
import {Seller} from "../model/seller";
import {Goods} from "../model/goods";
/**
 * Created by wangao on 2017/6/8.
 */

@Injectable()
export class GoodsService {

  private url = 'api/goods';

  constructor(private http: Http) { }

  getGoods(): Promise<Seller> {
    return this.http.get(this.url).toPromise()
    .then(res => res.json().data as Goods || {});
  }



}
