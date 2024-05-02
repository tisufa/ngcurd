import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes';
import { VendorsModule } from './vendors';

@NgModule({
  exports: [VendorsModule, DirectivesModule, PipesModule, ComponentsModule],
})
export class SharedModule {}
