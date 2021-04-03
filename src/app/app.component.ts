import {Component, OnInit} from '@angular/core';
import { ConfigService } from './services/config.service';
import {LoadingService} from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'afrotempo-music';
  loadAPI: Promise<any>;

  constructor(
    private configService: ConfigService,
    private loadingService: LoadingService) {
    
    this.loadAPI = new Promise(resolve => {
      this.configService.loadScripts();
    });
    this.loadingService.startLoading();
  }

  ngOnInit(): void{

  }

}
