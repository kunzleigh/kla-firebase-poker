import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import 'rxjs/add/observable/of';
import {Vote} from "../class/vote";
import {AuthService} from "./auth.service";

@Injectable()
export class VoteService {

  voteList$: FirebaseListObservable<any>;

  constructor(private angularFireDatabase: AngularFireDatabase, private authService: AuthService) {
    this.voteList$ = this.angularFireDatabase.list('users/' + this.authService.getUserId() + '/votes');
  }

  addVote() {
    const vote = new Vote();
    vote.value = 3;
    vote.ticketId = '-KukUtru14ndPcQqXlAN';
    this.voteList$.push(vote);
  }

  changeVote(vote: Vote, value: number) {
    vote.value = value;
    this.voteList$.update(vote.$key, vote);
  }

}
