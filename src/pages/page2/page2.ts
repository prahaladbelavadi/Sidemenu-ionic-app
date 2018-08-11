import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  openActionSheet(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: ()=>{
            console.log('Destructive Clicked!');
          }
        },{
          text: 'Archive',
          handler: ()=>{
            console.log('Archive Clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: ()=> {
            console.log('Cancel Clicked');
          }
        }
      ]
    });
    actionSheet.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
