import {Pipe, PipeTransform} from "@angular/core";
import {AuthService} from "../service/auth.service";

@Pipe({name: 'mine'})
export class MinePipe implements PipeTransform {

  constructor(private authService: AuthService) {

  }

  transform(list: any[]) {
    if (list) {
      let filtered = list.filter((it) => {
        return it.createdBy == this.authService.getUserId();
      });
      return filtered || [];
    }
    return [];
  }
}
