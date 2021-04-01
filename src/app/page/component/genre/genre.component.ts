import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genreId: string;
  routeSubscription: Subscription;
  songss: any;
  songs: any = [];
  genres: any;

  constructor(
    private route: ActivatedRoute,
    private config: ConfigService,
    private afs: AngularFirestore,
  ) {
    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
          this.genreId = param.id;
      }
  });
  }

  ngOnInit(): void {

    this.afs.collection<any>('chanson', ref=>ref
      .where('genre', '==', this.genreId))
      .valueChanges().subscribe((data)=>{
        this.songs = data
    });
  }

}
