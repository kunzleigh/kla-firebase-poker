import {Pipe, PipeTransform} from "@angular/core";
import {FIBONACCI} from "../class/fibonacci";

@Pipe({name: 'fibonacci'})
export class ValueToFibonacciPipe implements PipeTransform {

  /**
   * Returns the Fibonacci value + description
   * @param {number} value
   * @returns {any}
   */
  transform(value: number) {
    let found = FIBONACCI.find((it) => {
      return it.value === value;
    });
    if (found) {
      return found.value + ": " + found.description;
    }
    return null;
  }
}
