import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserProfileService} from '../service/user-profile.service';
import {LoaderService} from '../service/loader.service';
import { loadingDelay } from '../../settings/loading';

@Injectable()
export class UserProfileResolve implements Resolve<any> {

  constructor(private userProfileService: UserProfileService, private loaderService: LoaderService) { }

  /**
   * Resolves the user profile
   * @param {ActivatedRouteSnapshot} route
   * @returns {any}
   */
  resolve(route: ActivatedRouteSnapshot) {
    this.loaderService.showLoader();
    return Observable.create(observer => {
      setTimeout(() => {
        const userProfile = this.userProfileService.getUserProfile().valueChanges();

        userProfile.subscribe(() => {
          observer.next(userProfile);
          observer.complete();
          this.loaderService.hideLoader();
        });
      }, loadingDelay);
    });
  }

}
