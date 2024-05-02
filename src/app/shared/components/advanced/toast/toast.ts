import { ToastrService } from 'ngx-toastr';
import { IToast } from 'src/app/core/interfaces';

export class Toast implements IToast {
  constructor(private toastr: ToastrService) {}

  public show(message: string): void {
    this.toastr.show(message);
  }

  showInfo(message: string): void {
    this.toastr.info(message);
  }

  showSuccess(message: string): void {
    this.toastr.success(message);
  }

  showWarning(message: string): void {
    this.toastr.warning(message);
  }

  showError(message: string): void {
    this.toastr.error(message);
  }
}
