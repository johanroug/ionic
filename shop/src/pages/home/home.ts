import { Component } from '@angular/core';
import {Shop} from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shopPage = Shop;
}
