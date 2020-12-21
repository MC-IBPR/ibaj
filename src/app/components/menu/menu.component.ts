import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() fondo: boolean;

  value: boolean;
  valueShowIconMenu: boolean;

  constructor() {
  }

  ngOnInit(): void {
    let btnMenu = document.querySelector('#menu');
    let haeder = document.querySelector('#header');

    btnMenu.addEventListener('click', () => {
      if (this.value) {
        setTimeout(() => {
          this.valueShowIconMenu = false;
          haeder.classList.add('header');
          haeder.classList.remove('ocultaHeader');
        }, 850);
      } else {
        setTimeout(()=>{

          this.valueShowIconMenu = true;
          haeder.classList.add('ocultaHeader');
          haeder.classList.remove('header');
        }, 850);
      }
    });

  }

}
