import {Injectable} from '@angular/core';
import {Anuncio} from "./models/anuncio";

const KEY_ANUNCIOS = 'anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  anuncios: Anuncio[] = [];

  constructor() {
    let anuncios = localStorage.getItem(KEY_ANUNCIOS);
    this.anuncios = anuncios ? JSON.parse(anuncios) as Anuncio[] : [];
    // localStorage.removeItem(KEY_ANUNCIOS);
  }

  getNextId(): number {
    if (this.anuncios.length === 0) {
      return 1;
    }

    return (this.anuncios[this.anuncios.length-1].id!) + 1;
  }

  getAll(): Anuncio[] {
    return this.anuncios;
  }

  getById(id: number): Anuncio | undefined {
    return this.anuncios.find(anuncio => anuncio.id === id);
  }

  save(anuncio: Anuncio): void {
    if (!anuncio.id) {
      anuncio.id = this.getNextId();
      this.anuncios.push(anuncio);
    } else {
      let index = this.anuncios.findIndex(_anuncio => _anuncio.id === anuncio.id);
      this.anuncios[index] = anuncio;
    }

    localStorage.setItem(KEY_ANUNCIOS, JSON.stringify(this.anuncios));
  }
}
