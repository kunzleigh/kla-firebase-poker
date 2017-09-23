import { Component } from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent {

  constructor(public ticketService: TicketService, public navService: NavService) {

  }

}
