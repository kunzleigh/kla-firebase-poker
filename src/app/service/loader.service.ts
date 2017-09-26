import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoaderService {

  loaderState: Subject<boolean>;

  constructor() {
    this.loaderState = new Subject();
  }

  /**
   * Method shows the global loader
   */
  showLoader() {
    this.loaderState.next(true);
  }

  /**
   * Method hides the global loader
   */
  hideLoader() {
    this.loaderState.next(false);
  }

}
