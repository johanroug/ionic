import {Component} from '@angular/core';
import {NavParams, NavController} from "ionic-angular";
import  { JohanPage } from '../../johan/johan';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  name: string;

  constructor(private navParams: NavParams, private navCtrl: NavController ) {
    this.name = navParams.get("username");
  }

  onGoBack() {
    //this.navCtrl.pop();
    this.navCtrl.popToRoot();
  }
  gotoJohan() {
    this.navCtrl.push(JohanPage);
  }
}
