import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroFService, Formulario } from 'src/app/services/registro-f.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  formularioRegistro: FormGroup;
  newFormulario: Formulario = <Formulario>{};

  constructor(private RegistroFormulario : RegistroFService,
    private alertController: AlertController, 
    private toastController: ToastController,
    private fb:FormBuilder) { 
        this.formularioRegistro = this.fb.group({
            'precio': new FormControl("", Validators.required),
            'ruta': new FormControl("", Validators.required),

  });
}


ngOnInit(): void {
  this.RegistroFormulario.getFormulario().subscribe(formulario => {
    console.log(formulario);
  })
}
async onSubmit(){
  console.log(this.formularioRegistro.value)
  await this.RegistroFormulario.addFormulario(this.formularioRegistro.value)
  console.log(Response)
}

async CrearFormulario(){
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

this.newFormulario.precio = form.precio,
this.newFormulario.ruta = form.ruta;

this.RegistroFormulario.addFormulario(this.newFormulario).then(dato => { 
this.newFormulario = <Formulario>{};
this.showToast('Datos registrados correctamente.');  
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

