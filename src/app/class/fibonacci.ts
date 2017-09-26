export class Fibonacci {
  key: string;
  value: number;
  description: string;

  constructor(key: string, value: number, description: string) {
    this.key = key;
    this.value = value;
    this.description = description;
  }
}

export const FIBONACCI: Fibonacci[] = [
  new Fibonacci('0', 0, 'No Action'),
  new Fibonacci('1', 1, 'Minimal Effort Required'),
  new Fibonacci('2', 2, 'Some Effort Required'),
  new Fibonacci('3', 3, 'A Slightly Lighter Ticket'),
  new Fibonacci('4', 5, 'A Well Balanced Ticket'),
  new Fibonacci('5', 8, 'A slightly Heavier Ticket'),
  new Fibonacci('6', 13, 'Significant Effort Required'),
  new Fibonacci('7', 21, 'Incredibly Involved, Many Moving/Complex Pieces'),
  new Fibonacci('8', 34, 'Too Involved, Try Splitting')
];
