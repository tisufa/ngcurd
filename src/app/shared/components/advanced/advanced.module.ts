import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { PopupSharedModule } from './popup';
import { TableModule } from './table/table.module';
import { ToastModule } from './toast/toast.module';

@NgModule({
  exports: [ToastModule, PopupSharedModule, ModalModule, TableModule],
})
export class AdvancedComponentsModule {}
