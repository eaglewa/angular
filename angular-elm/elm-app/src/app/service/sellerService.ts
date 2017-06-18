import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";
import {Seller} from "../model/seller/seller";
/**
 * Created by wangao on 2017/6/8.
 */

@Injectable()
export class SellerService {

  private url = 'api/seller';

  constructor(private http: Http) { }

  getSeller(): Promise<Seller> {
    return this.http.get(this.url).toPromise()
    .then(res => res.json().data as Seller || {});
  }



}
