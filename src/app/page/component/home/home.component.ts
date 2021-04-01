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

  images: any;

  public innerWidth: any;

  items: Observable<any>;

  emissions: string;

  constructor(
      private config: ConfigService,
      private afs: AngularFirestore,
    ) {
    }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.genres = this.config.genre;

    this.afs.collection<any>('album', ref=>ref
      .orderBy('timestamp', 'desc'))
      .valueChanges().subscribe((data)=>{
        this.albums = data.slice(0, 6)
    });
    

    this.afs.collection<any>('slider', ref=>ref
      .orderBy('timestamp', 'desc'))
      .valueChanges().subscribe((data)=>{
        this.images = [
          {path: data[0].image},
          {path: data[1].image},
          {path: data[2].image},
        ]
    });

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

    this.afs.collection<any>('emission', ref=>ref
      .orderBy('timestamp', 'desc'))
      .valueChanges().subscribe((data)=>{
        this.emissions = data[0].link
    });
  }
}
