import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Videojuegos {
  videojuegos = [
    { id_juego: 1, title: "Hollow Knight", genre: "Matroidvania", price: 14.99 },
    { id_juego: 2, title: "Celeste", genre: "Plataformas", price: 19.99 },
    { id_juego: 3, title: "Hades", genre: "Rocklike", price: 24.99 },
  ]

  insertar(){
    const obj = { id_juego: 5, title: "Minecraft", genre: "Sandbox", price: 30.99 }
    this.videojuegos.push(obj)
  }
}
