import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // host: {'class': 'col-md-4'}
})
export class CardComponent {
  @Input() anuncio:any;

  ngOnInit() {

  }
}
