import {Auditable} from "./auditable";
import {Vote} from "./vote";
import {Stats} from "./stats";

/**
 * Used to track tickets in the master list.
 * Tickets have a child list of Votes.
 */
export class Ticket extends Auditable {
  title?: string;
  description?: string;
  stats: Stats;
  votes?: Vote[];
}
