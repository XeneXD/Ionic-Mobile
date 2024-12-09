import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model'; 
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private alertController: AlertController) {} 

  onUsernameInput(event: any) {
    this.username = event.target.value;
    console.log('Username:', this.username);
  }

  onPasswordInput(event: any) {
    this.password = event.target.value;
    console.log('Password:', this.password);
  }

  async login() {
    if (this.username === User.defaultUser.username && this.password === User.defaultUser.password) {
      this.presentAlert('Success', "You've successfully gained access.");
    } else {
      this.presentAlert('Failed', 'Invalid username or password.');
    }
  }


  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
