import {Component} from '@angular/core';
import {Anuncio} from "../../../anuncio";
import {AnunciosService} from "../../../anuncios.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-classificados-editar',
  templateUrl: './admin-classificados-editar.component.html',
  styleUrls: ['./admin-classificados-editar.component.css']
})
export class AdminClassificadosEditarComponent {
  anuncio: Anuncio = new Anuncio();

  constructor(private route: ActivatedRoute, private anunciosService: AnunciosService) {
  }

  getAnuncio(id: number) {
    return this.anunciosService.getById(id).then((data: any) => {
      this.anuncio = data;
    });
  }

  ngOnInit() {
    let id: number = +this.route.snapshot.params['id'];

    this.getAnuncio(id);
  }
}
