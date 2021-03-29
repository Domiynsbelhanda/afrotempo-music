import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  songs: any;

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.songs = this.config.songs
  }

}
