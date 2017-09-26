import {Component} from '@angular/core';
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

  /**
   * Eradicates data from the form
   */
  clearForm() {
    this.title = '';
    this.description = '';
    this.more = false;
  }

  /**
   * Travels to the ticket list page
   */
  goToTicketList() {
    this.navService.navigate('/tickets');
  }

  /**
   * Creates the ticket in the DB
   * If create more is checked, clears the form so another can be created
   * Else, go to ticket list
   */
  createTicket() {
    this.ticketService.createTicket(this.title, this.description);
    if (this.more) {
      this.clearForm();
    } else {
      this.goToTicketList();
    }
  }

}
