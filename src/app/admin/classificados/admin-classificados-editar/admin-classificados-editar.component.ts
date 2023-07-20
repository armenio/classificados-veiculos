import {Component, OnInit} from '@angular/core';
import {Anuncio} from "../../../models/anuncio";
import {AnunciosService} from "../../../anuncios.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-classificados-editar',
  templateUrl: './admin-classificados-editar.component.html',
  styleUrls: ['./admin-classificados-editar.component.css']
})
export class AdminClassificadosEditarComponent implements OnInit {
  anuncio: Anuncio = new Anuncio();

  constructor(private route: ActivatedRoute, private anunciosService: AnunciosService) {
  }

  getAnuncio(id: number): Anuncio | undefined {
    return this.anunciosService.getById(id);
  }

  ngOnInit() {
    let id: number = +this.route.snapshot.params['id'];

    this.anuncio = this.getAnuncio(id)!;
  }
}
