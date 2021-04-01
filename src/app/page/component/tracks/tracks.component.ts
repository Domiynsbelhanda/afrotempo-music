import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  songs: any;
  songss: any;

  constructor(
    private config: ConfigService,
    private afs: AngularFirestore,
    ) { }

  ngOnInit(): void {
    this.afs.collection<any>('chanson', ref=>ref
      .orderBy('timestamp', 'desc'))
      .valueChanges().subscribe((data)=>{
        this.songs = data.slice(0,6)
    });

    this.afs.collection<any>('chanson', ref=>ref
      .orderBy('downloads', 'desc'))
      .valueChanges().subscribe((data)=>{
        this.songss = data.slice(0,15)
    });
  }

}
