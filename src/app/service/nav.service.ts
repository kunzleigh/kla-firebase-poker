import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class NavService {

  constructor(private router: Router) {

  }

  /**
   * Nav helper so the dev can input the string to nav to
   * @param {string} path
   */
  navigate(path: string) {
    this.router.navigate([path]);
  }

  /**
   * Nav method to do the same nav as in router
   * @param {string[]} options
   */
  rawNavigate(options: string[]) {
    this.router.navigate(options);
  }

}
