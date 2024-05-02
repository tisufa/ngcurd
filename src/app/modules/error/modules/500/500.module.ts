import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { InternalServerErrorComponent } from './500.component';
import { internalServerErroRoutes } from './500.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(internalServerErroRoutes)],
  declarations: [InternalServerErrorComponent],
})
export class InternalServerErrorModule {}
