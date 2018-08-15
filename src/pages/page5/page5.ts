import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the Page5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html',
})
export class Page5Page {
  chats: any[];
  logins: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

    this.chats = [
      {
        img: './assets/imgs/user_profiles/avatar-cher.png',
        name: 'Cher',
        message: 'Ugh. As if.',
        time: '9:38 pm'
      }, {
        img: './assets/imgs/user_profiles/avatar-dionne.png',
        name: 'Dionne',
        message: 'Mr. Hall was way harsh.',
        time: '8:59 pm'
      }, {
        img: './assets/imgs/user_profiles/avatar-murray.png',
        name: 'Murray',
        message: 'Excuse me, "Ms. Dione."',
        time: 'Wed'
      }
    ];
    this.logins = [
      {
          icon: 'logo-twitter',
          name: 'Twitter',
          username: 'admin',
      }, {
          icon: 'logo-github',
          name: 'GitHub',
          username: 'admin37',
      }, {
          icon: 'logo-instagram',
          name: 'Instagram',
          username: 'imanadmin',
      }, {
          icon: 'logo-codepen',
          name: 'Codepen',
          username: 'administrator',
      }];
  }
  //
  // more(item: ItemSliding){
  //   console.log('More');
  //   item.close()
  // }
  //
  // delete(item: ItemSliding){
  //   console.log('Delete')
  //   item.close()
  // }
  //
  // mute(item: ItemSliding){
  //   console.log('mute')
  //   item.close()
  // }
  //
  // archive(item: ItemSliding){
  //   this.expandAction(item, 'archivng','Chat was archived')
  // }
  //
  // download(item: ItemSliding){
  //   this.expandAction(item, 'downloading', 'Login was downloaded');
  // }

  // expandAction(item: ItemSliding, _: any, text: string){
  //   // do actions
  //   setTimeout(()=>{
  //   const toast = this.toastCtrl.create({
  //     message: text
  //   });
  //   toast.present();
  //   item.close()
  //
  //   setTimeout(()=> toast.dismiss(), 2000);
  // }, 1500);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page5Page');
  }

}
