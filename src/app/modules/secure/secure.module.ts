import { NgModule } from '@angular/core';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { RoleEnum } from 'src/app/core/enum';
import { GlobalService } from 'src/app/core/global';
import { SecureComponent } from './secure.component';
import { secureRoutes } from './secure.routes';

@NgModule({
  imports: [RouterModule.forChild([])],
  declarations: [SecureComponent],
  providers: [
    {
      provide: ROUTES,
      useFactory: (globalService: GlobalService) => {
        const { model } = globalService.session.user;
        let routes: Routes = [];
        if (model.roleName === RoleEnum.ADMIN) {
          routes.push({
            path: '',
            loadChildren: () =>
              import('./modules/admin/admin.module').then((m) => m.AdminModule),
          });
        } else if (model.roleName === RoleEnum.USER) {
          routes.push({
            path: '',
            loadChildren: () =>
              import('./modules/user/user.module').then((m) => m.UserModule),
          });
        }

        const newSecureRoutes = Array.from(secureRoutes);
        newSecureRoutes[0].children?.push(...routes);
        return newSecureRoutes;
      },
      deps: [GlobalService],
      multi: true,
    },
  ],
})
export class SecureModule {}
