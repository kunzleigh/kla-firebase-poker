import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import 'rxjs/add/observable/of';
import {Vote} from "../class/vote";
import {AuthService} from "./auth.service";

@Injectable()
export class VoteService {

  /**
   * Tracks the "current vote" to be the current user's vote on the ticket they are viewing
   */
  currentVote$: AngularFireObject<Vote>;

  constructor(private angularFireDatabase: AngularFireDatabase, private authService: AuthService) {

  }

  /**
   * Retrieves the user's vote for the current ticket.
   * @param {string} ticketId $ticketId of the current ticket
   * @returns {Promise<boolean>} promise indicating complete
   */
  getCurrentVote(ticketId: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (ticketId) {
        this.currentVote$ = this.angularFireDatabase.object('/users/' + this.authService.getUserId() + '/votes/' + ticketId);
      }
      resolve(true);
    });
  }

}
