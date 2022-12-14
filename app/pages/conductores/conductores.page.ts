import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistroCServiceService, Conductor } from 'src/app/services/registro-c-service.service';
import { Platform, ToastController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {

  conductor: Conductor[];
  @ViewChild('myList')myList :IonList;

  constructor(private conductorService : RegistroCServiceService,
    private plt: Platform, private toastController: ToastController){
      this.plt.ready().then(()=>{
        this.conductorService.getConductor().subscribe()
      })
    }

  ngOnInit(): void {
    this.conductorService.getConductor().subscribe(conductor=>{
      this.conductor = conductor;
    })
  }

  async onClickDelete(conductor: Conductor){
    const response = await this.conductorService.deleteConductor(conductor);
    console.log(response);
  }




  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }


}

