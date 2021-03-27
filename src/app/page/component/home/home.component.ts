import {Component, OnInit} from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  songs: any;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.songs = this.config.songs
  }
}
