import {Component, OnInit} from '@angular/core';
import {Anuncio} from "../../../models/anuncio";

@Component({
  selector: 'app-admin-classificados-adicionar',
  templateUrl: './admin-classificados-adicionar.component.html',
  styleUrls: ['./admin-classificados-adicionar.component.css']
})
export class AdminClassificadosAdicionarComponent {
  anuncio: Anuncio = new Anuncio();
}
