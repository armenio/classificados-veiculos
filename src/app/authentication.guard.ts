import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from "./authentication.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  if (authenticationService.isLoggedIn) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/admin/login');
};
