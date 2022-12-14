import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, doc, deleteDoc} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Formulario{
  precio: number;
  ruta: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroFService {

  constructor(private firestore: Firestore) {

  }
  async addFormulario(formulario: Formulario){
   const formularioRef = collection(this.firestore, 'formulario');
   return addDoc(formularioRef, formulario);


 }
 getFormulario(): Observable<Formulario[]>{
  const formularioRef = collection(this.firestore, 'formulario');
  return collectionData(formularioRef,{idField: 'id'}) as Observable<Formulario[]>;
}


}
