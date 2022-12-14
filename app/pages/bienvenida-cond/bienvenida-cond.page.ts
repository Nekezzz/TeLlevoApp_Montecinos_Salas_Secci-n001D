import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-bienvenida-cond',
  templateUrl: './bienvenida-cond.page.html',
  styleUrls: ['./bienvenida-cond.page.scss'],
})
export class BienvenidaCondPage implements OnInit {

  constructor( private navController: NavController ) { }

  ngOnInit() {
  }
  Logout(){
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('principal');
  }

}
