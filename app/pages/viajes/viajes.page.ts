import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroviajesService, Viaje } from 'src/app/services/registroviajes.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  formularioRegistro: FormGroup;
  newViaje: Viaje = <Viaje>{};

  constructor(private Registroviajes: RegistroviajesService,
              private alertController: AlertController, 
              private toastController: ToastController,
              private fb:FormBuilder) { 
                  this.formularioRegistro = this.fb.group({
                      'destino': new FormControl("", Validators.required),
                      'opinion': new FormControl("", Validators.required),

            });
          }


          ngOnInit(): void {
            this.Registroviajes.getViaje().subscribe(viaje => {
              console.log(viaje);
            })
          }
          async onSubmit(){
            console.log(this.formularioRegistro.value)
            await this.Registroviajes.addViaje(this.formularioRegistro.value)
            console.log(Response)
          }

  async CrearVIaje(){
    //console.log('Guardar');
   var form= this.formularioRegistro.value;
   if (this.formularioRegistro.invalid ){
       const alert = await this.alertController.create({
         header: 'Datos Incompletos',
         message: 'Debe completar todos los datos',
         buttons: ['Aceptar'],
       });
   
       await alert.present();
       return;
     }

     this.newViaje.destino = form.destino,
     this.newViaje.opinion = form.opinion;

     this.Registroviajes.addViaje(this.newViaje).then(dato => { 
       this.newViaje = <Viaje>{};
       this.showToast('Viaje registrado correctamente.');  
     }); 
 }

 async showToast(msg){
  const toast = await this.toastController.create({
    message: msg, 
    duration: 2000
  });
  toast.present();
}

}

 