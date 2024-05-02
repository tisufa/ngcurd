import { Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

export const errorRoutes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
      },
      {
        path: '404',
        loadChildren: () =>
          import('./modules/404/404.module').then((m) => m.NotFoundErrorModule),
      },
      {
        path: '500',
        loadChildren: () =>
          import('./modules/500/500.module').then(
            (m) => m.InternalServerErrorModule
          ),
      },
    ],
  },
];
