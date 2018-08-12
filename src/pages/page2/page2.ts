import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
  }

openConfirmationAlert(){
  const confirmAlert = this.alertCtrl.create({
    title: 'Terms and Conditions',
    message: 'Do you agree to terms and conditions?',
    buttons: [
      {
        text: 'Agree',
        handler: ()=>{
          console.log('Client Agrees')
        }
      },{
        text: 'Disagree',
        handler: ()=>{
          console.log('Client Disagrees')
        }
      }
    ]
  });
  confirmAlert.present();
}

openPrompt(){
  const prompt = this.alertCtrl.create({
    title: 'Login',
    message: 'Enter your Login information',
    inputs: [
      {
        name: 'user_name',
        placeholder: 'John Doe'
      },
      {
        password: 'password',
        placeholder: 'UltraMega_S3cr3t_P@ssw0rd'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: ()=>{
          console.log('Cancel Clicked')
        }
      },{
        text: 'Login',
        handler: ()=>{
          console.log('Login clicked')
        }
      }
    ]
  });
  prompt.present()
}

  openBasicAlert(){
    const alert = this.alertCtrl.create({
      title: 'New Friend',
      subTitle: 'Your friend XYZ just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present()
  }

  openActionSheet(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
                {
                  text: 'Delete',
                  role: 'destructive',
                  icon: 'trash',
                  color: 'danger',
                  handler: () => {
                    console.log('Delete clicked');
                  }
                },
                {
                  text: 'Share',
                  icon: 'share',
                  handler: () => {
                    console.log('Share clicked');
                  }
                },
                {
                  text: 'Play',
                  icon: 'arrow-dropright-circle',
                  color: 'secondary',
                  handler: () => {
                    console.log('Play clicked');
                  }
                },
                {
                  text: 'Favorite',
                  icon: 'heart-outline',
                  color: 'dark',
                  handler: () => {
                    console.log('Favorite clicked');
                  }
                },
                {
                  text: 'Cancel',
                  role: 'cancel', // will always sort to be on the bottom
                  icon: 'close',
                  color: 'danger',
                  handler: () => {
                    console.log('Cancel clicked');
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
