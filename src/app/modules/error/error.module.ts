import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { ErrorComponent } from './error.component';
import { errorRoutes } from './error.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(errorRoutes)],
  declarations: [ErrorComponent],
})
export class ErrorModule {}
