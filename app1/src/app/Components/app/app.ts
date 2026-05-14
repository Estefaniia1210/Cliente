import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  videojuegos = [
    {id_juego: 1, title: "Hollow Knight", genre: "Matroidvania", price: 14.99},
    {id_juego: 2, title: "Celeste", genre: "Plataformas", price: 19.99},
    {id_juego: 3, title: "Hades", genre: "Rocklike", price: 24.99},
  ]
}