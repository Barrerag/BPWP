import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webPage-barberos',
  templateUrl: './barberos.page.html',
  styleUrls: ['./barberos.page.scss'],
})
export class BarberosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Todos los metodos necesitan el id de la barbería que inició sesión
  getBarberos(barberia_id: string){

  }

  createBarbero(barberia_id:string){

  }

  updateBarbero(barberia_id:string){

  }

  //no se elimina de la bdd, se desactiva el campo "activo"
  deleteBarbero(barberia_id: string){

  }



}
