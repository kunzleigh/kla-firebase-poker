import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TicketService} from '../../../../web/src/app/service/ticket.service';
import {Ticket} from '../../../../web/src/app/class/ticket';
import {NavController} from 'ionic-angular';
import {TicketVotePage} from '../ticket-vote/ticket-vote';
import {VoteService} from '../../../../web/src/app/service/vote.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  tickets: Observable<Ticket[]>;

  constructor(public navCtrl: NavController,
              public ticketService: TicketService,
              public voteService: VoteService) {
    this.tickets = ticketService.ticketList$.snapshotChanges().map(action => {
      return action.map(action => {
        const $key = action.payload.key;
        return {$key, ...action.payload.val()};
      });
    });
  }

  goVote(t: Ticket) {
    // set current ticket and navigate to the vote page
    this.voteService.getCurrentVote(t.$key);
    this.navCtrl.push(TicketVotePage);
  }

}
