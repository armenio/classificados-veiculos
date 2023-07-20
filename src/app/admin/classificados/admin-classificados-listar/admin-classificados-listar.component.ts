import {Component, OnInit} from '@angular/core';
import {AnunciosService} from "../../../anuncios.service";
import {Anuncio} from "../../../models/anuncio";

@Component({
  selector: 'app-admin-classificados-listar',
  templateUrl: './admin-classificados-listar.component.html',
  styleUrls: ['./admin-classificados-listar.component.css'],
  providers: [AnunciosService]
})
export class AdminClassificadosListarComponent implements OnInit {
  anuncios: Anuncio[] = [];

  constructor(private anunciosService: AnunciosService) {
  }

  getAnuncios(): void {
    this.anuncios = this.anunciosService.getAll();
  }

  ngOnInit() {
    this.getAnuncios();
  }
}
