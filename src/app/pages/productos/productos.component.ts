import { Component } from '@angular/core';

@Component({
  selector: 'pages-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  // Configuración.
  public listCalzados: any[] = [
    {
      name: 'Calzado 1',
      descripcion: 'Un zapato versátil que combina estilo y confort, ideal para el día a día. Fabricado con materiales de calidad.',
      nameImage: '../../../assets/img/illustations/15-1497.svg',
      precio: '300.00'
    },
    {
      name: 'Calzado 2',
      descripcion: 'Zapato deportivo ligero y resistente, ideal para actividades al aire libre. Ofrece transpirabilidad.',
      nameImage: '../../../assets/img/illustations/515-4131.svg',
      precio: '350.00'
    },
    {
      name: 'Calzado 3',
      descripcion: 'Botines de cuero elegantes para ocasiones formales, con un diseño clásico que nunca pasa de moda.',
      nameImage: '../../../assets/img/illustations/632-8341.svg',
      precio: '500.00'
    },
    {
      name: 'Calzado 4',
      descripcion: 'Sandalias cómodas con tiras ajustables, perfectas para los días calurosos de verano.',
      nameImage: '../../../assets/img/illustations/782-9923.svg',
      precio: '200.00'
    },
    {
      name: 'Calzado 5',
      descripcion: 'Zapato de senderismo impermeable, con una suela antideslizante para mayor seguridad en terrenos difíciles.',
      nameImage: '../../../assets/img/illustations/1635-3678.svg',
      precio: '450.00'
    },
    {
      name: 'Calzado 6',
      descripcion: 'Mocasines casuales de cuero suave, ideales para el uso diario con un toque de estilo.',
      nameImage: '../../../assets/img/illustations/3296-4515.svg',
      precio: '280.00'
    },
    {
      name: 'Calzado 7',
      descripcion: 'Zapatos de tacón alto con diseño moderno, perfectos para eventos especiales.',
      nameImage: '../../../assets/img/illustations/3664-8775.svg',
      precio: '400.00'
    },
    {
      name: 'Calzado 8',
      descripcion: 'Zapatillas deportivas para correr, con tecnología de amortiguación avanzada para un mayor confort.',
      nameImage: '../../../assets/img/illustations/3795-6939.svg',
      precio: '320.00'
    },
    {
      name: 'Calzado 9',
      descripcion: 'Botas de invierno con forro interior cálido, diseñadas para resistir bajas temperaturas.',
      nameImage: '../../../assets/img/illustations/4954-5398.svg',
      precio: '600.00'
    },
    {
      name: 'Calzado 10',
      descripcion: 'Alpargatas frescas y ligeras, ideales para un paseo por la playa o el parque.',
      nameImage: '../../../assets/img/illustations/6930-1182.svg',
      precio: '150.00'
    },
    {
      name: 'Calzado 11',
      descripcion: 'Zapatos de seguridad con puntera de acero, adecuados para ambientes de trabajo industriales.',
      nameImage: '../../../assets/img/illustations/7133-7917.svg',
      precio: '350.00'
    },
    {
      name: 'Calzado 12',
      descripcion: 'Zapatos náuticos resistentes al agua, con suela antideslizante para un agarre seguro en superficies mojadas.',
      nameImage: '../../../assets/img/illustations/7314-6628.svg',
      precio: '375.00'
    }
  ];

}
