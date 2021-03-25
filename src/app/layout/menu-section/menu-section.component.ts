import { Component, OnInit } from '@angular/core';

declare const Menu: any;

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {

  logos = './assets/images/logo_rouge.png';
  logos2 = './assets/images/logo_1.png';

  config: any = {
    items: [
      {
        title: 'Accueil',
        icon: 'icon icon_discover',
        page: '/home'
      },
      {
        title: 'Albums',
        icon: 'icon icon_albums',
        page: '/albums'
      },
      {
        title: 'Artistes',
        icon: 'icon icon_artists',
        page: '/artistes'
      },
      {
        title: 'Genres',
        icon: 'icon icon_genres',
        page: '/genres'
      },
      {
        title: 'Top Tracks',
        icon: 'icon icon_tracks',
        page: '/top_tracks'
      },
      {
        title: 'PlayList',
        icon: 'icon icon_fe_playlist',
        page: '/playlist'
      },
      {
        title: 'ADD MUSIC',
        icon: 'icon icon_c_playlist',
        page: '/addMusic'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
