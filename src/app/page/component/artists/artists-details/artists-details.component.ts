import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-artists-details',
  templateUrl: './artists-details.component.html',
  styleUrls: ['./artists-details.component.css']
})
export class ArtistsDetailsComponent implements OnInit, OnDestroy {

  artistId: string;
  routeSubscription: Subscription;
  art: any;
  i: number = 0;
  details: any;
  songs: any;
  
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private config: ConfigService
  ) { 
    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
          this.artistId = param.id;
      }
  });
  }

  ngOnInit(): void {

    this.afs.collection<any>('users').doc(this.artistId)
      .valueChanges().subscribe((data)=>{
        this.details = data
    });

    this.afs.collection<any>('chanson', ref=>ref
      .where('uid', '==', this.artistId))
      .valueChanges().subscribe((data)=>{
        this.songs = data
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  addDownload(noms: string, downloads: number, vue: number, lin: string) {

    const download = {
      downloads: downloads + 1,
      vue: vue + 2,
    };
    this.afs.collection('chanson').doc(noms).set(download, {merge: true});

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', lin);
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
