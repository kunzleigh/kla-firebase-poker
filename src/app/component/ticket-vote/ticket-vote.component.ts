import {Component} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";

@Component({
  selector: 'app-ticket-vote',
  templateUrl: './ticket-vote.component.html',
  styleUrls: ['./ticket-vote.component.css']
})
export class TicketVoteComponent {

  constructor(public ticketService: TicketService, public navService: NavService) {

  }

}
