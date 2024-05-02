import { InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAlertDialog } from '../interfaces';
export const ALERT_DIALOG_CONFIG = new InjectionToken<IAlertDialog>(
  'ALERT_DIALOG_CONFIG',
  {
    providedIn: 'root',
    factory: () => {
      return {
        showInfo(): Observable<boolean> {
          return of(false);
        },
        showSuccess(): Observable<boolean> {
          return of(false);
        },
        showWarning(): Observable<boolean> {
          return of(false);
        },
        showError(): Observable<boolean> {
          return of(false);
        },
      };
    },
  }
);
