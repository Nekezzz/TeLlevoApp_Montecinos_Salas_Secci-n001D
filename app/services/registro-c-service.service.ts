import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, doc, deleteDoc} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Conductor{
  nomConductor: string; 
  correoConductor: string; 
  passConductor: string;
  repassConductor: string;
  modeloVehiculo: string;
  marcaVehiculo: string;
  asientos: '4';
  id: string;
}


@Injectable({
  providedIn: 'root'
})
export class RegistroCServiceService {
  constructor(private firestore: Firestore) {

   }

   async addConductor(conductor: Conductor){
    const conductorRef = collection(this.firestore, 'conductor');
    return addDoc(conductorRef, conductor);


  }
  getConductor(): Observable<Conductor[]>{
    const conductorRef = collection(this.firestore, 'conductor');
    return collectionData(conductorRef,{idField: 'id'}) as Observable<Conductor[]>;
  }

  deleteConductor(conductor: Conductor){
    const conductorDocRef = doc(this.firestore,`conductor/${conductor.id}`);
    return deleteDoc(conductorDocRef);
  }

  


}