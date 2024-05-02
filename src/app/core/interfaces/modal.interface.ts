import { Observable } from 'rxjs';
import { IModalOptions } from './modal-options.interface';

export interface IModal {
  saveConfirmation(options?: IModalOptions): Observable<boolean>;
  updateConfirmation(options?: IModalOptions): Observable<boolean>;
  deleteConfirmation(options?: IModalOptions): Observable<boolean>;
  leaveConfirmation(options?: IModalOptions): Observable<boolean>;
}
