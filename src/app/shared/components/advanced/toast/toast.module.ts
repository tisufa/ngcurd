import { NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TOAST_CONFIG } from 'src/app/core/token';
import { toastFactory } from './toast.vactory';

@NgModule({
  providers: [
    {
      provide: TOAST_CONFIG,
      useFactory: toastFactory,
      deps: [ToastrService],
    },
  ],
})
export class ToastModule {}
