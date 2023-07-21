import {Component, Input, OnInit} from '@angular/core';
import {Anuncio, BRANDS, COLORS, TRANSMISSIONS} from "../../../models/anuncio";
import {Picture} from "../../../models/picture";
import {AnunciosService} from "../../../anuncios.service";
import {Router} from "@angular/router";
import {compress, decompress} from 'lz-string';

@Component({
  selector: 'app-admin-classificados-form',
  templateUrl: './admin-classificados-form.component.html',
  styleUrls: ['./admin-classificados-form.component.css']
})
export class AdminClassificadosFormComponent implements OnInit {
  @Input() model: Anuncio = new Anuncio();
  @Input() pictures: Picture[] = [];

  constructor(private anunciosService: AnunciosService, private router: Router) {
  }

  maxYear: number = (new Date()).getFullYear() + 1;
  brands: string[] = [];
  transmissions: string[] = [];
  colors: string[] = [];
  pics: any;

  onSubmit() {
    this.anunciosService.save(this.model).then((anuncio: Anuncio | undefined) => {
      for (let picture of this.pictures) {
        this.anunciosService.savePicture(anuncio!, picture);
      }
    }).finally(() => {
      this.router.navigate(['/admin/classificados']);
    });
  }

  ngOnInit() {
    this.brands = BRANDS;
    this.transmissions = TRANSMISSIONS;
    this.colors = COLORS;
  }

  handleUpload(event: any) {
    if (!event.target.files.length) {
      return;
    }

    this.pictures = [];

    for (let file of event.target.files) {
      /*let picture = new Picture();
      picture.src = URL.createObjectURL(file);
      this.model.pictures.push(picture);*/

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let picture = new Picture();
        picture.src = compress(`${reader.result}`);

        this.pictures.push(picture);
      };
    }
  }

  decompress(str: string): string {
    return decompress(str);
  }
}
