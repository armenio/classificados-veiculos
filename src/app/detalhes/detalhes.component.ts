import {Component, OnInit} from '@angular/core';
import {Anuncio} from "../models/anuncio";
import {Picture} from "../models/picture";
import {ActivatedRoute} from "@angular/router";
import {AnunciosService} from "../anuncios.service";
import {decompress} from 'lz-string';
import {Location} from "@angular/common";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  anuncio: Anuncio = new Anuncio();
  pictures: Picture[] = [];

  constructor(private route: ActivatedRoute, private anunciosService: AnunciosService, private location: Location) {
  }

  getAnuncio(id: number): void {
    this.anunciosService.getById(id).subscribe((anuncio: Anuncio | undefined) => {
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

  decompress(str: string): string {
    return decompress(str);
  }

  goBack() {
    this.location.back();
  }
}
