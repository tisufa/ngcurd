import { InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IModal } from '../interfaces/modal.interface';
export const MODAL_CONFIG = new InjectionToken<IModal>('MODAL_CONFIG', {
  providedIn: 'root',
  factory: () => {
    return {
      saveConfirmation(): Observable<boolean> {
        return of(false);
      },
      updateConfirmation(): Observable<boolean> {
        return of(false);
      },
      deleteConfirmation(): Observable<boolean> {
        return of(false);
      },
      leaveConfirmation(): Observable<boolean> {
        return of(false);
      },
    };
  },
});
