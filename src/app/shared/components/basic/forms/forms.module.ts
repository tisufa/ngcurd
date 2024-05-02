import { NgModule } from '@angular/core';
import { InputModule } from './input/input.module';
import { SelectModule } from './select/select.module';

@NgModule({
  exports: [InputModule, SelectModule],
})
export class FormsModule {}
