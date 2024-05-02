import { NgModule } from '@angular/core';
import { AdvancedComponentsModule } from './advanced/advanced.module';
import { BasicComponentsModule } from './basic/basic.module';

@NgModule({
  exports: [AdvancedComponentsModule, BasicComponentsModule],
})
export class ComponentsModule {}
