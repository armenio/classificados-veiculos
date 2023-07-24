import {Component, OnInit} from '@angular/core';
import {Anuncio} from "../models/anuncio";
import {AnunciosService} from "../anuncios.service";

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {
  anuncios: Anuncio[] = [];

  constructor(private anunciosService: AnunciosService) {
  }

  getAnuncios(): void {
    this.anunciosService.getAll().subscribe((anuncios: Anuncio[] | undefined) => {
      this.anuncios = anuncios!.filter(anuncio => anuncio.isHighlight).slice(0, 12);
    });
  }

  ngOnInit() {
    this.getAnuncios();
  }
}
