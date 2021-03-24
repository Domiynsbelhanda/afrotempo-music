import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {PageComponent} from './page.component';
import {HomeComponent} from './component/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    component: HomeComponent,
  },
  {
    path: '404',
    component: HomeComponent,
  },
  {
    path: 'pages',
    component: PageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
