import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { AdminComponent } from './admin.component';
import { adminRoutes } from './admin.routes';
import { AdminComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(adminRoutes),
    AdminComponentsModule,
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
