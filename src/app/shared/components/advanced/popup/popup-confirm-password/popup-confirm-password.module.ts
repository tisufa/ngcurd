import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors';
import { ButtonModule } from '../../../basic/button/button.module';
import { FormGroupModule } from '../../../basic/form-group/form-group.module';
import { InputPasswordModule } from '../../../basic/forms/input/components/password/password.module';
import { PopupModule } from '../popup.module';
import { PopupConfirmPasswordComponent } from './popup-confirm-password.component';
import { PopupConfirmPasswordService } from './popup-confirm-password.service';

@NgModule({
  imports: [
    VendorsModule,
    PopupModule,
    FormGroupModule,
    InputPasswordModule,
    ButtonModule,
  ],
  declarations: [PopupConfirmPasswordComponent],
  providers: [PopupConfirmPasswordService],
  exports: [PopupConfirmPasswordComponent],
})
export class PopupConfirmPasswordModule {}
