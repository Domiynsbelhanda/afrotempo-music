import { Component, OnInit } from '@angular/core';
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
    private config: ConfigService
  ) {
    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
          this.albumId = param.id;
      }
    });
  }

  ngOnInit(): void {
    this.songs = this.config.songs
    this.albums = this.config.albums

    for(let elements in this.albums){
      if(this.albumId == this.albums[elements].id){
        this.det.push(this.albums[elements])
      }
    }

    for(let element in this.songs){
      if(this.albumId === this.songs[element].album){
        this.details.push(this.songs[element])
      }
    }
  }

}
