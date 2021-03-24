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

  // @ts-ignore
  skinSubscription: Subscription;
  // @ts-ignore
  routerSubscription: Subscription;

  // @ts-ignore
  @ViewChild('perfectScroll', {static: false}) perfectScroll: PerfectScrollbarComponent;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) { }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  psBodyScroll(event) {
    const scrollTop = event.target.scrollTop;
    const header = this.document.getElementById('header');
    if (scrollTop > 50) {
      // @ts-ignore
      header.classList.add('scrolled');
    } else {
      // @ts-ignore
      header.classList.remove('scrolled');
    }
  }

  ngOnDestroy(): void {
    this.skinSubscription.unsubscribe();
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    // @ts-ignore
    this.routerSubscription = this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return false;
      }
      // @ts-ignore
      this.perfectScroll.directiveRef.update();
      // @ts-ignore
      this.perfectScroll.directiveRef.scrollToTop(0, 100);
    });
  }

}
