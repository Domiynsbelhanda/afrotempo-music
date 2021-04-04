import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

declare const Menu: any;

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {

  logos = './assets/images/logo.png';
  logos2 = './assets/images/logo.png';

  config: any = {
    items: [
      {
        title: 'Accueil',
        icon: 'icon icon_discover',
        page: '/home'
      },
      {
        title: 'Profil',
        icon: 'icon icon_station',
        page: '/profil'
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
        title: 'Tracks',
        icon: 'icon icon_music',
        page: '/track'
      },
      {
        title: 'Videos',
        icon : 'icon icon_tracks',
        page: '/emission'
      }
    ]
  };

  loadApi: Promise<any>;

  constructor(private configs: ConfigService,) { }

  ngOnInit(): void {

    this.loadApi = new Promise(resolve => {
      this.configs.loadScripts();
    });
    
  }

}
