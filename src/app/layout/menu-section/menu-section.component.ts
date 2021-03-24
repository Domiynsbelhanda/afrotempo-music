import { Component, OnInit } from '@angular/core';

declare const Menu: any;

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {

  logos = './assets/images/logo.png';
  logos2 = './assets/images/open_logo.png';

  constructor() { }

  ngOnInit(): void {
  }

  jsSection(): void {
    // @ts-ignore
    $(".ms_sidemenu_wrapper").toggleClass('open_menu');
  }

}
