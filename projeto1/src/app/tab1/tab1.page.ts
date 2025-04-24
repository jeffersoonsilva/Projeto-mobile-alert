import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async showAlert(){
    const myalert = await this.alertCtrl.create({
      message: 'Jefferson Silva - 01692080',  // <- coloque seu nome e matrícula aqui
    

      buttons: ['OK']
    });

    myalert.present();
  }
}
