import {Component, Input} from '@angular/core';
import {Anuncio} from "../models/anuncio";
import {decompress} from 'lz-string';
@Component({
  selector: 'app-card-line',
  templateUrl: './card-line.component.html',
  styleUrls: ['./card-line.component.css']
})
export class CardLineComponent {
  @Input() anuncio: Anuncio = new Anuncio();

  decompress(str: string): string {
    return decompress(str);
  }
}
