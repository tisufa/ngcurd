import { InjectionToken } from '@angular/core';
import { IToast } from '../interfaces';
export const TOAST_CONFIG = new InjectionToken<IToast>('TOAST_CONFIG', {
  providedIn: 'root',
  factory: () => {
    return {
      show(): void {},
      showInfo(): void {},
      showSuccess(): void {},
      showWarning(): void {},
      showError(): void {},
      create(): void {},
    };
  },
});
