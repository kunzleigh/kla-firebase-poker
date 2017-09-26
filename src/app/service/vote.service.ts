import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";
import 'rxjs/add/observable/of';
import {Vote} from "../class/vote";
import {AuthService} from "./auth.service";

@Injectable()
export class VoteService {

  currentVote$: FirebaseObjectObservable<Vote>;

  constructor(private angularFireDatabase: AngularFireDatabase, private authService: AuthService) {

  }

  getCurrentVote(ticketId: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (ticketId) {
        this.currentVote$ = this.angularFireDatabase.object('/users/' + this.authService.getUserId() + '/votes/' + ticketId);
      }
      resolve(true);
    });
  }

}
