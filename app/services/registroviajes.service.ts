import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, doc, deleteDoc} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Viaje{
   destino: string;
   temporizador: Date;
   opinion: string;
   id: string;

}


@Injectable({
  providedIn: 'root'
})
export class RegistroviajesService {
  constructor(private firestore: Firestore) {

   }

   async addViaje(viaje: Viaje){
    const viajeRef = collection(this.firestore, 'viaje');
    return addDoc(viajeRef, viaje);


  }
  getViaje(): Observable<Viaje[]>{
    const viajeRef = collection(this.firestore, 'viaje');
    return collectionData(viajeRef,{idField: 'id'}) as Observable<Viaje[]>;
  }

  deleteViaje(viaje: Viaje){
    const viajeDocRef = doc(this.firestore,`viaje/${viaje.id}`);
    return deleteDoc(viajeDocRef);
  }

  


}