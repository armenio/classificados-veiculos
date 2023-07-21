import {Injectable} from '@angular/core';
import {Anuncio} from "./models/anuncio";
import {HttpClient} from "@angular/common/http";
import {Picture} from "./models/picture";

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
  baseURL: string = 'http://localhost:3000/anuncios';

  picturesURL: string = 'http://localhost:3000/pictures';

  constructor(private http: HttpClient) {
  }

  getAll(): Promise<Anuncio[] | undefined> {
    return this.http.get<Anuncio[]>(`${this.baseURL}?_embed=pictures`).toPromise();
  }

  getById(id: number): Promise<Anuncio | undefined> {
    return this.http.get<Anuncio>(`${this.baseURL}/${id}?_embed=pictures`).toPromise();
  }

  save(anuncio: Anuncio): Promise<Anuncio | undefined> {
    if (!anuncio.id) {
      return this.http.post<Anuncio>(this.baseURL, anuncio).toPromise();
    }

    return this.http.put<Anuncio>(`${this.baseURL}/${anuncio.id}`, anuncio).toPromise();
  }

  savePicture(anuncio: Anuncio, picture: Picture): Promise<Picture | undefined> {
    picture.anuncioId = anuncio.id;
    return this.http.post<Picture>(`${this.picturesURL}`, picture).toPromise();
  }

  delete(anuncio: Anuncio): Promise<Anuncio | undefined> {
    return this.http.delete<Anuncio>(`${this.baseURL}/${anuncio.id}`).toPromise();
  }
}
