import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import { UtilsService } from 'app/core/utils.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private utilities: UtilsService
  ) { }

  /**
   *  Protects the routes to reach with authentication
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Manage login route
    if (route.url[0] && route.url[0].path && route.url[0].path === 'login') {
      if (!this.authService.isAuthenticated) {
        return true;
      }

      this.router.navigate(['/dashboard']);
      return false;
    }

    if (!this.authService.isAuthenticated) {
      // Cannot pass queryParams in the returnUrl as the '?' character will be encoded and therefore will make the router crash
      const formattedUrl = this.utilities.filterQueryParams(state.url);
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: formattedUrl } });
      return false;
    }

    return this.authService.isAuthenticated;
  }
}
