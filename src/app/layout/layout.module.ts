import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {NgModule} from '@angular/core';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { PlayerComponent } from './player/player.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    MenuSectionComponent,
    PlayerComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent
  ],
  exports: [
    MenuSectionComponent,
    PlayerComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    NgxAudioPlayerModule
  ],
  entryComponents: [],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
}) export class LayoutModule {}
