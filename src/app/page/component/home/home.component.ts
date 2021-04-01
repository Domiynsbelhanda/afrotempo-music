import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  songss: any;

  artists: any;

  albums: any;

  genres: any;

  images: any = [];

  public innerWidth: any;

  items: Observable<any>;

  constructor(
      private config: ConfigService,
      private afs: AngularFirestore,
    ) {
    }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.albums = this.config.albums
    this.genres = this.config.genre;
    this.images = [
      {path: '../../../assets/images/afrotempo screenshot.PNG'},
      {path: '../../../assets/images/afrotempo screenshot.PNG'},
      {path: '../../../assets/images/afrotempo screenshot.PNG'},
    ]

    this.afs.collection<any>('chanson', ref=>ref
      .orderBy('downloads', 'desc'))
      .valueChanges().subscribe((data)=>{
        this.songs = data.slice(0, 15)
    });

    this.afs.collection<any>('chanson', ref=>ref
      .orderBy('timestamp', 'desc'))
      .valueChanges().subscribe((data)=>{
        this.songss = data.slice(0,6)
    });

    this.afs.collection<any>('users', ref=>ref
      .orderBy('name', 'asc'))
      .valueChanges().subscribe((data)=>{
        this.artists = data.slice(0, 6)
    });
  }
}
