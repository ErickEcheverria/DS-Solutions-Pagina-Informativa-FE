import { Component } from '@angular/core';
import { ItemNavBar } from 'src/app/interfaces/item-nav-bar.interface';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  // Configuración.
  public listItemsValue: ItemNavBar[] = [{
    showValue: 'Inicio',
    value: '#inicio'
  }, {
    showValue: 'Nosotros',
    value: '#nosotros'
  }, {
    showValue: 'Productos',
    value: '#productos-servicios'
  }, {
    showValue: 'Blog',
    value: '#blog-noticias'
  }, {
    showValue: 'Contacto',
    value: '#contacto'
  }];
}
