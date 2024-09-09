import { Component } from '@angular/core';

@Component({
  selector: 'pages-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  public listNoticias: any[] = [{
    imageUrl: './assets/img/blog/image-1.png',
    title: 'Consejos para Cuidar Tus Zapatos y Hacerlos Durar Más',
    description: 'Descubre prácticas simples pero efectivas para mantener tus zapatos en perfecto estado por más tiempo. Desde cómo limpiarlos adecuadamente hasta almacenarlos de forma correcta, en Piedra & Suela te compartimos nuestros mejores consejos para que cada paso sea siempre como el primero.'
  }, {
    imageUrl: './assets/img/blog/image-2.png',
    title: 'Cómo Elegir el Calzado Perfecto para Cada Ocasión',
    description: 'Seleccionar el zapato adecuado puede marcar la diferencia en tu look y tu comodidad. En este artículo, te ayudamos a descubrir cómo elegir el calzado perfecto para cada evento, desde ocasiones formales hasta salidas casuales, asegurando estilo y confort en cada paso.'
  }, {
    imageUrl: './assets/img/blog/image-3.png',
    title: 'Detrás de la Marca: Conoce a los Artesanos de Piedra & Suela',
    description: 'Descubre a las personas que hacen posible cada par de zapatos de Piedra & Suela. En este artículo, te presentamos a nuestros artesanos en Guatemala, quienes, con su habilidad y dedicación, transforman materiales de calidad en calzado único que acompaña tus pasos con estilo y confort.'
  }, {
    imageUrl: './assets/img/blog/image-4.png',
    title: 'Tendencias en Calzado para la Temporada: Lo que Debes Tener en tu Armario',
    description: '¿Quieres estar a la moda esta temporada? Te presentamos las últimas tendencias en calzado que están marcando estilo. Desde diseños clásicos renovados hasta innovaciones audaces, descubre qué zapatos no pueden faltar en tu armario para lucir siempre al día.'
  }];
}
