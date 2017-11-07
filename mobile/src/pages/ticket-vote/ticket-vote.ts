import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {VoteService} from '../../../../web/src/app/service/vote.service';
import {Observable} from 'rxjs/Observable';
import {Vote} from '../../../../web/src/app/class/vote';
import {Ticket} from '../../../../web/src/app/class/ticket';
import {FIBONACCI} from '../../../../web/src/app/class/fibonacci';
import {AuthService} from '../../../../web/src/app/service/auth.service';
import {TicketService} from '../../../../web/src/app/service/ticket.service';

/**
 * Generated class for the TicketVotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-vote',
  templateUrl: 'ticket-vote.html',
})
export class TicketVotePage {
  currentTicket: Observable<Ticket>;
  currentVote: Observable<Vote>;
  readonly FIBONOCCI = FIBONACCI;

  constructor(private navCtrl: NavController,
              public ticketService: TicketService,
              public authService: AuthService,
              public voteService: VoteService) {
  }

  ionViewDidLoad() {
    // let voteId = this.navParams.get('voteId');
    this.currentTicket = this.ticketService.currentTicket$.valueChanges();
    this.currentVote = this.voteService.currentVote$.valueChanges();
  }

  /**
   * Travels to ticket list page
   */
  goToTicketList() {
    this.navCtrl.pop();
  }
}
