import {Component, OnInit} from '@angular/core';
import {Anuncio} from "../../../models/anuncio";
import {AnunciosService} from "../../../anuncios.service";
import {ActivatedRoute} from "@angular/router";
import {Picture} from "../../../models/picture";

@Component({
  selector: 'app-admin-classificados-editar',
  templateUrl: './admin-classificados-editar.component.html',
  styleUrls: ['./admin-classificados-editar.component.css']
})
export class AdminClassificadosEditarComponent implements OnInit {
  anuncio: Anuncio = new Anuncio();
  pictures: Picture[] = [];

  constructor(private route: ActivatedRoute, private anunciosService: AnunciosService) {
  }

  getAnuncio(id: number): void {
    this.anunciosService.getById(id).then((anuncio: Anuncio | undefined) => {
      this.anuncio = anuncio!;

      if (anuncio !== undefined) {
        this.pictures = anuncio.pictures;
        anuncio.pictures = [];
      }
    });
  }

  ngOnInit() {
    let id: number = +this.route.snapshot.params['id'];

    this.getAnuncio(id);
  }
}
