import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, doc, deleteDoc} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';


export interface Usuario{
  nomUsuario: string; 
  correoUsuario: string; 
  passUsuario: string;
  repassUsuario: string;
  id: string;
}


@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  constructor(private firestore: Firestore) {

   }
   async addUsuario(usuario: Usuario){
    const usuarioRef = collection(this.firestore, 'usuario');
    return addDoc(usuarioRef, usuario);


  }
  getUsuario(): Observable<Usuario[]>{
    const usuarioRef = collection(this.firestore, 'usuario');
    return collectionData(usuarioRef,{idField: 'id'}) as Observable<Usuario[]>;
  }

  deleteUsuario(usuario: Usuario){
    const usuarioDocRef = doc(this.firestore,`usuario/${usuario.id}`);
    return deleteDoc(usuarioDocRef);
  }



  


}
 