import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TicketService} from '../../../../web/src/app/service/ticket.service';

/**
 * Generated class for the TicketCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-create',
  templateUrl: 'ticket-create.html',
})
export class TicketCreatePage {
  title: string;
  description: string;
  more: boolean;

  constructor(public navCtrl: NavController, public ticketService: TicketService) {
  }

  /**
   * Eradicates data from the form
   */
  clearForm() {
    this.title = '';
    this.description = '';
    this.more = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketCreatePage');
  }

  /**
   * Travels to ticket list page
   */
  goToTicketList() {
    this.navCtrl.pop();
  }

  /**
   * Creates the ticket in the DB
   * If create more is checked, clears the form so another can be created
   * Else, go to ticket list
   */
  createTicket() {
    this.ticketService.createTicket(this.title, this.description);
    if (this.more) {
      this.clearForm();
    } else {
      this.goToTicketList();
    }
  }
}
