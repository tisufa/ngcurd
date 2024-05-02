import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { InputDefaultComponent } from './default.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [InputDefaultComponent],
  exports: [InputDefaultComponent],
})
export class InputDefaultModule {}
