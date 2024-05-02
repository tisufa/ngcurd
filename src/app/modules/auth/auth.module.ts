import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routes';
import { AuthService } from './auth.service';
import { AuthUsecase } from './auth.usecase';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(authRoutes)],
  declarations: [AuthComponent],
  providers: [AuthService, AuthUsecase],
})
export class AuthModule {}
