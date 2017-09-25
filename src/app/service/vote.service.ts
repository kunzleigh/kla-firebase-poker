import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import 'rxjs/add/observable/of';
import {Vote} from "../class/vote";
import {AuthService} from "./auth.service";
import {Fibonacci} from "../class/fibonacci";

@Injectable()
export class VoteService {

  voteList$: FirebaseListObservable<any>;

  constructor(private angularFireDatabase: AngularFireDatabase, private authService: AuthService) {
    this.voteList$ = this.angularFireDatabase.list('users/' + this.authService.getUserId() + '/votes');
  }

  addVote(fib: Fibonacci, ticketId: string) {
    debugger;
    const vote = new Vote();
    vote.value = fib.value;
    vote.ticketId = ticketId;
    this.voteList$.push(vote);
  }

  changeVote(vote: Vote, value: number) {
    vote.value = value;
    this.voteList$.update(vote.$key, vote);
  }

  setVote(fib: Fibonacci, ticketId: string) {
    let uid = this.authService.getUserId();


  }

}
