import { Component, OnDestroy, OnInit } from '@angular/core';
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
    this.art = this.config.artists
    this.songs = this.config.songs

    for(let element in this.art){
      if(this.artistId === this.art[element].uid){
        this.details = this.art[element]
      }
    }
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
}

}
