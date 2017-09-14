import { Component } from '@angular/core';
import {TicketService} from '../service/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  //TODO temporary until "admin" and "location" functionality is ready in auth
  readonly isScrumMaster: boolean = true;
  readonly isScrumMasterPresent: boolean = true;

  constructor(public ticketService: TicketService) {

  }

}