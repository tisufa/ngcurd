import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
      },
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./modules/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./modules/sign-up/sign-up.module').then(
            (m) => m.SignUpModule
          ),
      },
    ],
  },
];
