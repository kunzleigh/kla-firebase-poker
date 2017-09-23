import { Component } from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";

@Component({
  selector: 'app-ticket-vote',
  templateUrl: './ticket-vote.component.html',
  styleUrls: ['./ticket-vote.component.css']
})
export class TicketVoteComponent {

  title: string;
  description: string;
  more: boolean;

  constructor(public ticketService: TicketService, public navService: NavService) {

  }

  clearForm() {
    this.title = '';
    this.description = '';
    this.more = false;
  }

  goToTicketList() {
    this.navService.navigate('/tickets');
  }

  createTicket() {
    this.ticketService.createTicket(this.title, this.description);
    if (this.more) {
      this.clearForm();
    } else {
      this.goToTicketList();
    }
  }

}
