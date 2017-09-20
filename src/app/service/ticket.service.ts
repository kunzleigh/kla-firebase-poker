import { Injectable } from '@angular/core';
import {Ticket} from "../class/ticket";
import {Vote} from "../class/vote";

@Injectable()
export class TicketService {

  private _ticketList: Ticket[] = [];

  constructor() {
    const ticket0 = new Ticket();
    ticket0.$id = '0';
    ticket0.title = 'Ticket 0';
    ticket0.description = 'Just a plain old description';
    ticket0.votes = [new Vote(), new Vote()];
    ticket0.created = "Two days ago";

    const ticket1 = new Ticket();
    ticket1.$id = '1';
    ticket1.title = 'Ticket 1';
    ticket1.description = 'Not much of a better description';
    ticket1.votes = [new Vote(), new Vote()];
    ticket1.created = "One day ago";

    const ticket2 = new Ticket();
    ticket2.$id = '2';
    ticket2.title = 'Ticket 1';
    ticket2.description = 'Still working on the description';
    ticket2.votes = [new Vote(), new Vote()];
    ticket2.created = "A few hours ago";
    this._ticketList.push(ticket0, ticket1, ticket2);
  }

  getTicketList(): Ticket[] {
    return this._ticketList;
  }

}
