import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductComponent} from "./product/product.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){

  }

  toProductDetail(){
    this.router.navigate(['/product', 2]);
  }
}
