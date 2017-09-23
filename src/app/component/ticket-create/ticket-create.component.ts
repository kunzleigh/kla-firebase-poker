import { Component } from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent {

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
