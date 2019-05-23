import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { 
    const lista1= new Lista("piedras del infinito");
    const lista2= new Lista("Heroes desaparecidos");

    this.listas.push(lista1, lista2);
    console.log(this.listas)
  }
}
