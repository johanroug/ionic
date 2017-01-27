import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {Buyout} from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class Shop {
  buyoutPage = Buyout;

  constructor(private navCtrl: NavController) {}

  buyout(product: {name: string, quantity: number}) {
    this.navCtrl.push(this.buyoutPage, product);
  }
}
