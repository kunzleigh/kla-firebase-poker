import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private authService: AuthService) { }

  /**
   * Indicates if the route is allowed to activate
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {boolean}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }

  /**
   * Indicates if the route is allowed to load
   * @param {Route} route
   * @returns {boolean}
   */
  canLoad(route: Route) {
    return this.authService.isAuthenticated();
  }

}
