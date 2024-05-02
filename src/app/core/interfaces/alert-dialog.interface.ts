import { Observable } from 'rxjs';
import { IAlertDialogOptions } from './alert-dialog-options.interface';

export interface IAlertDialog {
  showInfo(options: IAlertDialogOptions): Observable<boolean>;
  showSuccess(options: IAlertDialogOptions): Observable<boolean>;
  showWarning(options: IAlertDialogOptions): Observable<boolean>;
  showError(options: IAlertDialogOptions): Observable<boolean>;
}
