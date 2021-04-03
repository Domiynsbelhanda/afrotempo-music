import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {

  @Input() song: any = {};

  loadAPI: Promise<any>;
  
  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      this.configService.loadScripts();
    });
  }

}
