import {Component} from '@angular/core';
import {AnunciosService} from "../../../anuncios.service";
import {Anuncio} from "../../../anuncio";

@Component({
  selector: 'app-admin-classificados-listar',
  templateUrl: './admin-classificados-listar.component.html',
  styleUrls: ['./admin-classificados-listar.component.css'],
  providers: [AnunciosService]
})
export class AdminClassificadosListarComponent {
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
