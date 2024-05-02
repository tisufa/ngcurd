import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { FormGroupModule } from './form-group/form-group.module';
import { FormsModule } from './forms/forms.module';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { LoadingModule } from './loading/loading.module';
@NgModule({
  exports: [
    ButtonModule,
    FormsModule,
    FormGroupModule,
    LoadingModule,
    LazyLoadModule,
    CardModule,
  ],
})
export class BasicComponentsModule {}
