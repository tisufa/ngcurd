import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { NotFoundErrorComponent } from './404.component';
import { notFoundErroRoutes } from './404.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(notFoundErroRoutes)],
  declarations: [NotFoundErrorComponent],
})
export class NotFoundErrorModule {}
