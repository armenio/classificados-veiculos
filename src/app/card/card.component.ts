import {Component, Input} from '@angular/core';
import {Anuncio} from "../models/anuncio";
import {decompress} from 'lz-string';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() anuncio: Anuncio = new Anuncio();

  decompress(str: string): string {
    return decompress(str);
  }
}
