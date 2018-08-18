import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page7',
  templateUrl: 'page7.html',
})
export class Page7Page {
  items: Array<String>;

  ngOnInit(){
    this.setItems();
  }

  setItems(){
    this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon'];
  }

  filterItems(ev: any){
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== ''){
      this.items = this.items.filter(function(item){
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page7Page');
  }

}
