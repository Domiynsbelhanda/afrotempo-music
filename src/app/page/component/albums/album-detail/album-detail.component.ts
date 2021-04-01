import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  albumId: string;
  routeSubscription: Subscription;
  details: any=[];
  songs: any;
  albums: any;
  det: any = [];

  constructor(
    private route: ActivatedRoute,
    private config: ConfigService,
    private afs: AngularFirestore,
  ) {
    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
          this.albumId = param.id;
      }
    });
  }

  ngOnInit(): void {
    
    this.afs.collection<any>('chanson', ref=>ref
      .where('album', '==', this.albumId))
      .valueChanges().subscribe((data)=>{
        this.details = data
        console.log(data.length)
    });

    this.afs.collection<any>('album').doc(this.albumId)
      .valueChanges().subscribe((data)=>{
        this.det = data
    });
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
