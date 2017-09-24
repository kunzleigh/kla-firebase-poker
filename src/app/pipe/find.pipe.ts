import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'find'})
export class FindPipe implements PipeTransform {
  transform(value: string, key: string, list: any[]) {
    return list.find(it => {
      return it[key] == value;
    });
  }
}
