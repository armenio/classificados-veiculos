import {Component} from '@angular/core';
import {AnunciosService} from "../anuncios.service";
import {Anuncio} from "../anuncio";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [AnunciosService]
})
export class IndexComponent {
  anuncios: Anuncio[] = [];

  constructor(private anunciosService: AnunciosService) {
  }

  getAnuncios() {
    return this.anunciosService.getAll().then((data: any) => {
      this.anuncios = data;
    });
  }

  ngOnInit() {
    this.getAnuncios();
  }
}
