import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

 // arreglo para usar las listas
  listas: Lista[] = [];

  constructor() { 
    this.loadInfo();
    console.log(this.listas)

  }
  // crea las listas 
  CrearLista(titulo:string){
    const NUEVALISTA = new Lista(titulo);
    this.listas.push(NUEVALISTA);
    this.saveInfo();

    return NUEVALISTA.id


  }

  // guarda la data

  saveInfo(){
    localStorage.setItem( "data", JSON.stringify(this.listas) );
  }


  // carga la data

  loadInfo(){
    if ( localStorage.getItem("data") ){
      this.listas = JSON.parse( localStorage.getItem("data") );
    }else{
      this.listas = [];
    }
  }
  // obtiene la lista

  obtenerLista( id: string | number){

    id = Number(id)

    return this.listas.find(  listaData=> listaData.id === id  );
    
  }

}
