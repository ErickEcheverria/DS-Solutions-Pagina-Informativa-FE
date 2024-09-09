import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Configuración.
  public showArrowDown: boolean = false;

  ngOnInit(): void {
    const controller: this = this;

    setTimeout(() => {
      controller.showArrowDown = true;
    }, 5000);
  }
}
