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
        message: 'Top toast Button was clicked',
        duration: 3000,
        position: 'top'
      });
      toast.present()
    }

    bottomToast(){
      const toast = this.toastCtrl.create({
        message: 'Bottom toast Button was clicked',
        duration: 3000,
        position: 'bottom'
      });
      toast.present()
    }

    longToast(){
      const toast = this.toastCtrl.create({
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        duration: 1500,
        position: 'bottom'
      });
      toast.present()
    }

    showToast(position:string){
      const toast = this.toastCtrl.create({
        message: 'Button was clicked',
        duration: 500,
        position: position
      });
      toast.present()
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page6Page');
  }

}
