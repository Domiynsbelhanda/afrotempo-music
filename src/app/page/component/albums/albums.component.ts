import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any;

  constructor(
    private afs: AngularFirestore,
    private config: ConfigService) { }

  ngOnInit(): void {
    this.afs.collection<any>('album', ref=>ref
      .orderBy('timestamp', 'desc'))
      .valueChanges().subscribe((data)=>{
        this.albums = data
    });
  }

}
