import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TicketService} from '../../../../web/src/app/service/ticket.service';
import {Ticket} from '../../../../web/src/app/class/ticket';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  tickets: Observable<Ticket[]>;

  constructor(public ticketService: TicketService) {
    this.tickets = ticketService.ticketList$.valueChanges();
  }

}
