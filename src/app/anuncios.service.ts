import {Injectable} from '@angular/core';
import {Anuncio} from "./anuncio";

const ANUNCIOS: Anuncio[] = [
  {id: 1, title: '2018 BMW M3', price: 320000, isHighlight: true},
  {id: 2, title: '2009 Ford Focus', price: 30000, isHighlight: false},
];

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor() {
  }

  getAll() {
    return new Promise(resolve => resolve(ANUNCIOS));
  }

  getById(id: number) {
    return new Promise(resolve => resolve(ANUNCIOS.filter(anuncio => anuncio.id === id)[0]));
  }
}
