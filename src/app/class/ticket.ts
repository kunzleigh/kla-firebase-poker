import {Auditable} from "./auditable";
import {Vote} from "./vote";

/**
 * Used to track tickets in the master list.
 * Tickets have a child list of Votes.
 */
export class Ticket extends Auditable {
  title?: string;
  description?: string;
  countVote: number;
  minVote: number;
  maxVote: number;
  avgVote: number;
  modeVote: number;
  votes?: Vote[];
}
