import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  unidadeCurricular:string;

  constructor(public toastController:ToastController) {}

  async mostrarUnidadeCurricular (name:string){
    //alert(name);
    const toast= await this.toastController.create({
    message: name,
    position: 'top',
    color:'secundary',
    buttons:[
      {
        text: 'close',
        role:'cancel',
        handler: () => {
          console.log('Close clicked');
        }
      }
    ],
    duration:2000
    })
    toast.present();
  }
}
