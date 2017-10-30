import {Component} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";
import {FIBONACCI} from "../../class/fibonacci";
import {AuthService} from "../../service/auth.service";
import {VoteService} from "../../service/vote.service";
import {Observable} from 'rxjs/Observable';
import {Ticket} from '../../class/ticket';
import {Vote} from '../../class/vote';

@Component({
  selector: 'app-ticket-vote',
  templateUrl: './ticket-vote.component.html',
  styleUrls: ['./ticket-vote.component.css']
})
export class TicketVoteComponent {
  currentTicket: Observable<Ticket>;
  currentVote: Observable<Vote>;

  /**
   * Reference to the Fibonocci constants
   * TODO: Refactor later to database values
   * @type {Fibonacci[]}
   */
  readonly FIBONOCCI = FIBONACCI;

  constructor(public ticketService: TicketService,
              public navService: NavService,
              public authService: AuthService,
              public voteService: VoteService) {
    this.currentTicket = this.ticketService.currentTicket$.valueChanges();
    this.currentVote = this.voteService.currentVote$.valueChanges();
  }

  /**
   * Travels to ticket list page
   */
  goToTicketList() {
    this.navService.navigate('/tickets');
  }

}
