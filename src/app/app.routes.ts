import { Routes } from '@angular/router';
import {PresskitComponent} from "./presskit/presskit.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'presskit',
    loadComponent: () => import('./presskit/presskit.component').then(m => m.PresskitComponent)
  }
];
