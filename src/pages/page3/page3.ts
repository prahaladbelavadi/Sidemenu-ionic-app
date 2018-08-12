import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

public press: number = 0;
public pan: number = 0;
public swipe: number = 0;
public tap: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
