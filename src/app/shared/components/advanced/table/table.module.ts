import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/shared/pipes';
import { VendorsModule } from 'src/app/shared/vendors';
import { ButtonModule } from '../../basic/button/button.module';
import { TableComponent } from './table.component';
import { TableService } from './table.service';
import { TableUsecase } from './table.usecase';

@NgModule({
  imports: [VendorsModule, PipesModule, ButtonModule],
  declarations: [TableComponent],
  providers: [TableService, TableUsecase],
  exports: [TableComponent],
})
export class TableModule {}
