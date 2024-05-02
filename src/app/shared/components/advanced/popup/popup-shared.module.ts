import { NgModule } from '@angular/core';
import { PopupConfirmPasswordModule } from './popup-confirm-password';
import { PopupModule } from './popup.module';

@NgModule({
  exports: [PopupModule, PopupConfirmPasswordModule],
})
export class PopupSharedModule {}
