import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VoteService} from '../../../../web/src/app/service/vote.service';

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

  constructor(public navCtrl: NavController,
             public voteService: VoteService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketVotePage');
  }

}
