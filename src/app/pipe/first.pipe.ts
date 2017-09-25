import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'first'})
export class FirstPipe implements PipeTransform {
  transform(list: any[]) {
    return list && list.length > 0 ? list[0] : null;
  }
}
