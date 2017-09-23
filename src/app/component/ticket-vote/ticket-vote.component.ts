import {Component} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";
import {Vote} from "../../class/vote";

@Component({
  selector: 'app-ticket-vote',
  templateUrl: './ticket-vote.component.html',
  styleUrls: ['./ticket-vote.component.css']
})
export class TicketVoteComponent {

  ticketId: string;
  vote: Vote;

  constructor(public ticketService: TicketService, public navService: NavService) {

  }

}
