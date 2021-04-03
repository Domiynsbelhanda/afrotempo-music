import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';
import {NavigationEnd, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor(private configService: ConfigService){}

  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      this.configService.loadScripts();
    });
  }

}
