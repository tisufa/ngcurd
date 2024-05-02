import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { UserComponent } from './user.component';
import { userRoutes } from './user.routes';
import { UserService } from './user.service';
import { UserUsecase } from './user.usecase';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(userRoutes)],
  declarations: [UserComponent],
  providers: [UserService, UserUsecase],
})
export class UserModule {}
