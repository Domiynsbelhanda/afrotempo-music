import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists: any;

  constructor(
    private config: ConfigService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.afs.collection<any>('users', ref=>ref
      .orderBy('name', 'asc'))
      .valueChanges().subscribe((data)=>{
        this.artists = data
    });
  }

}
