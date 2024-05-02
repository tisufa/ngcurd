import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { InputEmailComponent } from './email.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [InputEmailComponent],
  exports: [InputEmailComponent],
})
export class InputEmailModule {}
