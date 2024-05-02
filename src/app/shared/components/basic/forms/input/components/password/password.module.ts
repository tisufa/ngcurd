import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { InputPasswordComponent } from './password.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [InputPasswordComponent],
  exports: [InputPasswordComponent],
})
export class InputPasswordModule {}
