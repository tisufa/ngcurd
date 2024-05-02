import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

@NgModule({
  imports: [VendorsModule],
  declarations: [PopupComponent],
  providers: [PopupService],
  exports: [PopupComponent],
})
export class PopupModule {}
