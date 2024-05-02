import { Routes } from '@angular/router';
import { InternalServerErrorComponent } from './500.component';

export const internalServerErroRoutes: Routes = [
  {
    path: '',
    component: InternalServerErrorComponent,
  },
];
