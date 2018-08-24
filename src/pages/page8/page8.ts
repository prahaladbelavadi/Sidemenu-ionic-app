import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the Page8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page8',
  templateUrl: 'page8.html',
})
export class Page8Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  presentLoading(){
    const loading = this.loadingCtrl.create({
      content:"Loading...",
      duration: 2500
    });
    loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page8Page');
  }

}
