import { Routes } from '@angular/router';
import { ensureAuthenticated, ensureNotAuthenticated } from './core/guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/secure/secure.module').then((m) => m.SecureModule),
    canActivate: [ensureAuthenticated],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [ensureNotAuthenticated],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: '**',
    redirectTo: '/error/404',
  },
];
