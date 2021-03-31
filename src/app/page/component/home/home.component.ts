import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }


  songs: any;

  artists: any;

  albums: any;

  genres: any;

  images: any = [];

  public innerWidth: any;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.songs = this.config.songs
    this.artists = this.config.artists
    this.albums = this.config.albums
    this.genres = this.config.genre;
    this.images = [
      {path: '../../../assets/images/afrotempo screenshot.PNG'},
      {path: '../../../assets/images/afrotempo screenshot.PNG'},
      {path: '../../../assets/images/afrotempo screenshot.PNG'},
    ]
  }
}
