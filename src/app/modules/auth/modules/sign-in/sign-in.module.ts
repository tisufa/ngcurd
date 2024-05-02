import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { SignInComponent } from './sign-in.component';
import { signInRoutes } from './sign-in.routes';
@NgModule({
  imports: [SharedModule, RouterModule.forChild(signInRoutes)],
  declarations: [SignInComponent],
})
export class SignInModule {}
