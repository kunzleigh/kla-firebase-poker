import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class NavService {

  constructor(private router: Router) {

  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

}
