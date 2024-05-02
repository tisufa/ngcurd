import { Routes } from '@angular/router';
import { NotFoundErrorComponent } from './404.component';

export const notFoundErroRoutes: Routes = [
  {
    path: '',
    component: NotFoundErrorComponent,
  },
];
