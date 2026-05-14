import { Component, inject } from '@angular/core';
import { Videojuegos } from '../services/videojuegos';

@Component({
  selector: 'app-mostrar',
  standalone: false,
  templateUrl: './mostrar.html',
  styleUrl: './mostrar.css',
})
export class Mostrar {
  //constructor(public elservicio:Videojuegos) {
  //}

  elservicio=inject(Videojuegos)
  
}
