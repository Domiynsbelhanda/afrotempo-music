import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-tracks-details',
  templateUrl: './tracks-details.component.html',
  styleUrls: ['./tracks-details.component.css']
})
export class TracksDetailsComponent implements OnInit {

  songId: string;
  routeSubscription: Subscription;
  i: number = 0;
  details: any;
  songs: any;

  constructor(
    private route: ActivatedRoute,
    private config: ConfigService,
    private afs: AngularFirestore,
  ) {
    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
          this.songId = param.id;
      }
  });
  }

  ngOnInit(): void {

    this.afs.collection<any>('chanson').doc(this.songId)
      .valueChanges().subscribe((data)=>{
        this.details = data
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

  play()
  {
  }

}
