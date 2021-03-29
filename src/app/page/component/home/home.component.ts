import {Component, OnInit} from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  songs: any;

  artists: any;

  albums: any;

  genres: any;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.songs = this.config.songs
    this.artists = this.config.artists
    this.albums = this.config.albums
    this.genres = this.config.genre;
  }
}
