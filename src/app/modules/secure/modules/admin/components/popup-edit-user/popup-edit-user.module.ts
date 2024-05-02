import { NgModule } from '@angular/core';
import { PopupModule } from 'src/app/shared/components/advanced/popup/popup.module';
import { ButtonModule } from 'src/app/shared/components/basic/button/button.module';
import { FormGroupModule } from 'src/app/shared/components/basic/form-group/form-group.module';
import { InputModule } from 'src/app/shared/components/basic/forms/input/input.module';
import { SelectModule } from 'src/app/shared/components/basic/forms/select/select.module';
import { VendorsModule } from 'src/app/shared/vendors';
import { PopupEditUserComponent } from './popup-edit-user.component';
import { PopupEditUserService } from './popup-edit-user.service';

@NgModule({
  imports: [
    VendorsModule,
    PopupModule,
    ButtonModule,
    FormGroupModule,
    SelectModule,
    InputModule,
  ],
  declarations: [PopupEditUserComponent],
  providers: [PopupEditUserService],
})
export class PopupEditUserModule {}
