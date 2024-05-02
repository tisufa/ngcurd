import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { SignUpComponent } from './sign-up.component';
import { signUpRoutes } from './sign-up.routes';
@NgModule({
  imports: [SharedModule, RouterModule.forChild(signUpRoutes)],
  declarations: [SignUpComponent],
})
export class SignUpModule {}
