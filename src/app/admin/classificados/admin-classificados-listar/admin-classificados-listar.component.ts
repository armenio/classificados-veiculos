import {Component, OnInit} from '@angular/core';
import {AnunciosService} from "../../../anuncios.service";
import {Anuncio} from "../../../models/anuncio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-classificados-listar',
  templateUrl: './admin-classificados-listar.component.html',
  styleUrls: ['./admin-classificados-listar.component.css'],
  providers: [AnunciosService]
})
export class AdminClassificadosListarComponent implements OnInit {
  anuncios: Anuncio[] = [];

  constructor(private anunciosService: AnunciosService, private router: Router) {
  }

  getAnuncios(): void {
    this.anunciosService.getAll().subscribe((anuncios: Anuncio[] | undefined) => {
      this.anuncios = anuncios!;
    });
  }

  removeAnuncio(anuncio: Anuncio): void {
    if (!confirm("Tem certeza")) {
      return;
    }

    this.anunciosService.delete(anuncio).subscribe((anuncio: Anuncio | undefined) => {
      this.getAnuncios();
    });
  }

  ngOnInit() {
    this.getAnuncios();
  }
}
