import { Component } from '@angular/core';
import {NavParams, NavController} from "ionic-angular";

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class Buyout {
  productData: {name: string, quantity: number};

  constructor(private navParams: NavParams, private navCtrl: NavController) {
    this.productData = this.navParams.data;
  }
  onPuchace() {
    this.navCtrl.popToRoot();
  }
}
