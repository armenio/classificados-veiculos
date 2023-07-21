import {Injectable} from '@angular/core';
import {Anuncio} from "./models/anuncio";
import {HttpClient} from "@angular/common/http";
import {Picture} from "./models/picture";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
  baseURL: string = 'http://localhost:3000/anuncios';

  picturesURL: string = 'http://localhost:3000/pictures';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Anuncio[] | undefined> {
    return this.http.get<Anuncio[]>(`${this.baseURL}?_embed=pictures`);
  }

  getById(id: number): Observable<Anuncio | undefined> {
    return this.http.get<Anuncio>(`${this.baseURL}/${id}?_embed=pictures`);
  }

  save(anuncio: Anuncio): Observable<Anuncio | undefined> {
    if (!anuncio.id) {
      return this.http.post<Anuncio>(this.baseURL, anuncio);
    }

    return this.http.put<Anuncio>(`${this.baseURL}/${anuncio.id}`, anuncio);
  }

  savePicture(anuncio: Anuncio, picture: Picture): Observable<Picture | undefined> {
    picture.anuncioId = anuncio.id;
    return this.http.post<Picture>(`${this.picturesURL}`, picture);
  }

  delete(anuncio: Anuncio): Observable<Anuncio | undefined> {
    return this.http.delete<Anuncio>(`${this.baseURL}/${anuncio.id}`);
  }

  deletePicture(picture: Picture): Observable<Picture | undefined> {
    return this.http.delete<Picture>(`${this.picturesURL}/${picture.id}`);
  }
}
