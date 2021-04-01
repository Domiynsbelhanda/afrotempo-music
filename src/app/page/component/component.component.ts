import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';
import {NavigationEnd, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit, OnDestroy {


  constructor(
  ) { }


  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
