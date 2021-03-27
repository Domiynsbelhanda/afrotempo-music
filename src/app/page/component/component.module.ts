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
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ProfilComponent,
    UploadComponent
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
