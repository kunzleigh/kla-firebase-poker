import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import 'rxjs/add/observable/of';
import {Ticket} from "../class/ticket";
import {VoteService} from "./vote.service";
import {Vote} from "../class/vote";
import {AuthService} from "./auth.service";

@Injectable()
export class TicketService {

  ticketList$: AngularFireList<Ticket[]>;
  currentTicket$: AngularFireObject<Ticket>;

  constructor(private angularFireDatabase: AngularFireDatabase,
              private voteService: VoteService,
              private authService: AuthService) {
    this.ticketList$ = this.angularFireDatabase.list('/tickets');
  }

  createTicket(title: string, description: string) {
    const ticket = new Ticket();
    ticket.title = title;
    ticket.description = description;
    this.ticketList$.push(ticket);
  }

  getCurrentTicket(ticketId: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.currentTicket$ = this.angularFireDatabase.object('/tickets/' + ticketId);
      this.voteService.getCurrentVote(ticketId).then(() => {
        resolve(true);
      });
    });
  }

  setUserTicketVote(fibValue: number) {
    let subscription = this.currentTicket$.snapshotChanges().map(action => {
      const $key = action.payload.key;
      return { $key, ...action.payload.val() };
    }).subscribe((it) => {
      const vote = new Vote();
      vote.value = fibValue;
      vote.ticketId = it.$key;
      this.angularFireDatabase.object('/users/' + this.authService.getUserId() + '/votes/' + it.$key).set(vote).then(() => {
        subscription.unsubscribe()
      });
    });
  }

  clearUserTicketVote() {
    let subscription = this.currentTicket$.snapshotChanges().map(action => {
      const $key = action.payload.key;
      return { $key, ...action.payload.val() };
    }).subscribe((it) => {
      this.angularFireDatabase.list('/users/' + this.authService.getUserId() + '/votes').remove(it.$key).then(() => {
        subscription.unsubscribe();
      });
    });
  }

}
