import { ListaItem } from './listas-item';


export class Lista {
    id : number;
    titulo : string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada:boolean;
    items: ListaItem[];

    constructor(titulo ){
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items= [];
        
        this.id = new Date().getTime();
    }

}