import { NgModule } from '@angular/core';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { VendorsModule } from 'src/app/shared/vendors';
import { LoadingModule } from '../loading/loading.module';
import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
  imports: [VendorsModule, DirectivesModule, LoadingModule],
  declarations: [LazyLoadComponent],
  exports: [LazyLoadComponent],
})
export class LazyLoadModule {}
