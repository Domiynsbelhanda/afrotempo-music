import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {RouterModule, Routes} from '@angular/router';
import {ComponentComponent} from './component.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { PartialsModule } from 'src/app/partials/partial.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { TracksComponent } from './tracks/tracks.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistsDetailsComponent } from './artists/artists-details/artists-details.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const routes: Routes = [
  {
    path: '',
    component: ComponentComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profil',
        component: ProfilComponent
      },
      {
        path: 'upload',
        component: UploadComponent
      },
      {
        path: 'track',
        component: TracksComponent
      },
      {
        path: 'artistes',
        component: ArtistsComponent
      },
      {
        path: 'artistes/:id/details',
        component: ArtistsDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ProfilComponent,
    UploadComponent,
    TracksComponent,
    ArtistsComponent,
    ArtistsDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PartialsModule,
    LayoutModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ComponentModule { }
