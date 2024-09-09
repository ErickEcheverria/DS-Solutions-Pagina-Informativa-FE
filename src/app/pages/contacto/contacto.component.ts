import { Component } from '@angular/core';

@Component({
  selector: 'pages-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  center: google.maps.LatLngLiteral = { lat: 14.593496244962088, lng: -90.51190203862977 };
  zoom = 15;

}
