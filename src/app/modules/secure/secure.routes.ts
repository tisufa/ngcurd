import { Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

export const secureRoutes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [],
  },
];
