import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import 'rxjs/add/observable/of';
import {Ticket} from "../class/ticket";

@Injectable()
export class TicketService {

  ticketList$: FirebaseListObservable<any>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.ticketList$ = this.angularFireDatabase.list('/tickets');
  }

  createTicket(title: string, description: string) {
    const ticket = new Ticket();
    ticket.title = title;
    ticket.description = description;
    this.ticketList$.push(ticket);
  }

}
