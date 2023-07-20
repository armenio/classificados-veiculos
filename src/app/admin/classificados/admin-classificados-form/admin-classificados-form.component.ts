import {Component, Input, OnInit} from '@angular/core';
import {Anuncio, BRANDS, COLORS, TRANSMISSIONS} from "../../../models/anuncio";
import {Picture} from "../../../models/picture";
import {AnunciosService} from "../../../anuncios.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-classificados-form',
  templateUrl: './admin-classificados-form.component.html',
  styleUrls: ['./admin-classificados-form.component.css']
})
export class AdminClassificadosFormComponent implements OnInit {
  @Input() model: Anuncio = new Anuncio();

  constructor(private anunciosService: AnunciosService, private router: Router) {
  }

  maxYear: number = (new Date()).getFullYear() + 1;
  brands: string[] = [];
  transmissions: string[] = [];
  colors: string[] = [];
  pictures: any;

  onSubmit() {
    this.anunciosService.save(this.model);
    this.router.navigate(['/admin/classificados']);
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

    this.model.pictures = [];

    for (let file of event.target.files) {
      let picture = new Picture();
      picture.src = URL.createObjectURL(file);
      this.model.pictures.push(picture);

      /*let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let picture = new Picture();
        picture.src = `${reader.result}`;

        this.model.pictures.push(picture);
      };*/
    }
  }
}
