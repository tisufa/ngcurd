import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { FormGroupComponent } from './form-group.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [FormGroupComponent],
  exports: [FormGroupComponent],
})
export class FormGroupModule {}
