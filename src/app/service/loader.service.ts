import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoaderService {

  loaderState: Subject<boolean>;

  constructor() {
    this.loaderState = new Subject();
  }

  showLoader() {
    this.loaderState.next(true);
  }

  hideLoader() {
    this.loaderState.next(false);
  }

}
