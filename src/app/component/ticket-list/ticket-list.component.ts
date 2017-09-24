import { Component } from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";
import {Ticket} from "../../class/ticket";
import {VoteService} from "../../service/vote.service";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  //TODO temporary until "admin" and "location" functionality is ready in auth
  readonly isScrumMaster: boolean = true;
  readonly isScrumMasterPresent: boolean = true;

  constructor(public ticketService: TicketService, public navService: NavService, private voteService: VoteService) {

  }

  goVote(ticket: Ticket) {
    this.navService.rawNavigate(['/ticket-vote', ticket.$key]);
  }

  addVote() {
    this.voteService.addVote();
  }

}
