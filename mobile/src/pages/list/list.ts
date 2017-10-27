import { Component } from '@angular/core';
import {TicketService} from '../../app/service/ticket.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  tickets: Observable<any[]>;

  constructor(public ticketService: TicketService) {
    this.tickets = ticketService.ticketList$.valueChanges();
  }

}
