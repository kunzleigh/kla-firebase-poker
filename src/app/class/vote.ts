import {Auditable} from "./auditable";

/**
 * Vote will track user votes on a ticket.
 * Child object inside of Ticket.
 */
export class Vote extends Auditable {
  value: number;
}
