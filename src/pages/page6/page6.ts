import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the Page6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html',
})
export class Page6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}
    topToast() {
      const toast = this.toastCtrl.create({
        message: 'Button was clicked',
        duration: 300
      });
      toast.present()
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Page6Page');
  }

}
