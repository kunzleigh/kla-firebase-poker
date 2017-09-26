import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import 'rxjs/add/observable/of';
import {Ticket} from "../class/ticket";
import {VoteService} from "./vote.service";
import {Vote} from "../class/vote";
import {AuthService} from "./auth.service";

@Injectable()
export class TicketService {

  ticketList$: FirebaseListObservable<Ticket[]>;
  currentTicket$: FirebaseObjectObservable<Ticket>;

  constructor(private angularFireDatabase: AngularFireDatabase, private voteService: VoteService, private authService: AuthService) {
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
    let subscription = this.currentTicket$.subscribe((it) => {
      const vote = new Vote();
      vote.value = fibValue;
      vote.ticketId = it.$key;
      this.angularFireDatabase.object('/users/' + this.authService.getUserId() + '/votes/' + it.$key).set(vote).then(() => {
        subscription.unsubscribe()
      });
    });
  }

  clearUserTicketVote() {
    let subscription = this.currentTicket$.subscribe((it) => {
      this.angularFireDatabase.list('/users/' + this.authService.getUserId() + '/votes').remove(it.$key).then(() => {
        subscription.unsubscribe();
      });
    });
  }

}
