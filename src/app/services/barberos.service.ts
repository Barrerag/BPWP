import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { collection, query, where } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Barbero } from '../shared/barberoInterface';
import 'rxjs/add/observable/merge';
@Injectable({
  providedIn: 'root'
})
export class BarberosService {
  barberosCollection : AngularFirestoreCollection;
  afs: AngularFirestore;
  id_barberia: string;
  id_barbero: string;
  constructor(private afsr: AngularFirestore) {
    this.barberosCollection = afsr.collection<Barbero>('barberos');
    this.afs=afsr;
  }

  //obtener TODOS los barberos de una barberia
  getBarberosPorBarberia(){
    return this.afs.collection("barberos", ref=>ref.where("barbershop_id","==", this.id_barberia)).valueChanges();
    
  }
  //Obtiene solo los barberos activos en una barbería
  getBarberosActivosPorBarberia(){
    return this.afs.collection('barberos',ref=>ref.where('barbershop_id','==', this.id_barberia).where('Estado','==',true)).valueChanges();
  }

  //Eliminar (desactivar) un barbero de una barbería
  deleteBarbero(){
    
  }

  //añadir un nuevo barbero
  createBarbero(){
    
  }

  //obtener los horarios disponibles de un barbero
  getHorariosDeBarbero(){

  }


  

}
