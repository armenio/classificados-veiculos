import {Component, OnInit} from '@angular/core';
import {AnunciosService} from "../anuncios.service";
import {Anuncio} from "../models/anuncio";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [AnunciosService]
})
export class IndexComponent implements OnInit {
  anuncios: Anuncio[] = [];

  constructor(private anunciosService: AnunciosService) {
  }

  getAnuncios(): void {
    this.anunciosService.getAll().subscribe((anuncios: Anuncio[] | undefined) => {
      this.anuncios = anuncios!;
    });
  }

  ngOnInit() {
    this.getAnuncios();
  }
}
