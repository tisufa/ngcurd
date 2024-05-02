import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/global/global.service';

import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';

export const ensureAuthenticated: CanActivateChildFn = () => {
  const router = inject(Router);
  const { isLoggedIn } = inject(GlobalService).session;
  if (!isLoggedIn) {
    router.navigate(['/auth/sign-in']);
  }
  return isLoggedIn;
};
