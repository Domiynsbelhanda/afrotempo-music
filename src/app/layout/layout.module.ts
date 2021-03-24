import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {NgModule} from '@angular/core';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { PlayerComponent } from './player/player.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    MenuSectionComponent,
    PlayerComponent
  ],
  exports: [
    MenuSectionComponent
  ],
  imports: [
  ],
  entryComponents: [],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
}) export class LayoutModule {}
