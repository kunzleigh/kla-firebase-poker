import {Pipe, PipeTransform} from "@angular/core";
import {FIBONACCI} from "../class/fibonacci";

@Pipe({name: 'fibonocci'})
export class ValueToFibonocciPipe implements PipeTransform {
  transform(value: number) {
    let found = FIBONACCI.find((it) => {
      return it.value === value;
    });
    debugger;
    if (found) {
      return found.value + ": " + found.description;
    }
    return null;
  }
}
