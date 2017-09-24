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
    this.voteList$.set('-KukUtru14ndPcQqXlAN', vote);
  }

}
