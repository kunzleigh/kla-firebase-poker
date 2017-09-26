import {Component} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";
import {Ticket} from "../../class/ticket";
import {UserProfileService} from "../../service/user-profile.service";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  constructor(public ticketService: TicketService, public navService: NavService, public userProfileService: UserProfileService) {

  }

  goVote(ticket: Ticket) {
    this.navService.rawNavigate(['/ticket-vote', ticket.$key]);
  }

}
