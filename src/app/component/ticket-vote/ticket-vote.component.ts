import {Component} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";
import {FIBONACCI} from "../../class/fibonacci";
import {AuthService} from "../../service/auth.service";
import {VoteService} from "../../service/vote.service";

@Component({
  selector: 'app-ticket-vote',
  templateUrl: './ticket-vote.component.html',
  styleUrls: ['./ticket-vote.component.css']
})
export class TicketVoteComponent {

  readonly FIBONOCCI = FIBONACCI;

  constructor(public ticketService: TicketService, public navService: NavService, public authService: AuthService, public voteService: VoteService) {

  }

  goToTicketList() {
    this.navService.navigate('/tickets');
  }

}
