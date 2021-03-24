import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ComponentComponent } from './component/component.component';
import {RouterModule} from '@angular/router';
import {PageRoutingModule} from './page-routing.module';
import {PageComponent} from './page.component';
import {ComponentModule} from './component/component.module';
import {LayoutModule} from '../layout/layout.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    ComponentComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    RouterModule,
    PageRoutingModule,
    ComponentModule,
    LayoutModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PageModule { }
