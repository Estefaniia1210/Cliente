import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Contactos {
  contactos = [
    {id:1, nombre:"Adry", telefono:"124564"},
    {id:2, nombre:"Flyn", telefono:"234324234"},
    {id:3, nombre:"Ary", telefono:"453453453"},
  ]

  insertar(nombre:string, telefono:string){
    const obj = {
      id:Date.now(),
      nombre:nombre,
      telefono:telefono
    }
  }
}
