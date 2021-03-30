import { Component, OnInit } from '@angular/core';
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
  ) {
    this.routeSubscription = this.route.params.subscribe(param => {
      if (param.id) {
          this.genreId = param.id;
      }
  });
  }

  ngOnInit(): void {
    this.songss = this.config.songs

    for(let elements in this.songss){
        if(this.genreId === this.songss[elements].genre){
          this.songs.push(this.songss[elements])
        }
    }
  }

}
