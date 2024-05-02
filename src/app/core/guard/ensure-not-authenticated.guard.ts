import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/global/global.service';

import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';

export const ensureNotAuthenticated: CanActivateChildFn = () => {
  const router = inject(Router);
  const globalService = inject(GlobalService);
  const { isLoggedIn } = globalService.session;

  if (isLoggedIn) {
    router.navigate(['/']);
  }

  return !isLoggedIn;
};
