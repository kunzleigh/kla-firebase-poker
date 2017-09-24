import {Component, OnDestroy, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";
import {FIBONACCI, Fibonacci} from "../../class/fibonacci";
import {Ticket} from "../../class/ticket";
import {ISubscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-ticket-vote',
  templateUrl: './ticket-vote.component.html',
  styleUrls: ['./ticket-vote.component.css']
})
export class TicketVoteComponent implements OnInit, OnDestroy {

  readonly FIBONOCCI = FIBONACCI;

  current: Ticket;
  selected: Fibonacci;

  private _routeSubscription: ISubscription;

  constructor(public ticketService: TicketService, public navService: NavService, private route: ActivatedRoute, public authService: AuthService) {

  }

  ngOnInit() {
    this._routeSubscription = this.route.params.subscribe(params => {
      const ticketId = params['$ticketId'];
      this.ticketService.ticketList$.subscribe((tickets: Ticket[]) => {
        tickets.forEach((ticket) => {
          if (ticket.$key === ticketId) {
            this.current = ticket;
          }
        });
      });
    });
  }

  ngOnDestroy() {
    this._routeSubscription.unsubscribe();
  }

  selectVote(fibonocci: Fibonacci) {
    this.selected = fibonocci;
  }

  saveVote() {

  }

  clearVote() {
    this.selected = null;
  }

  goToTicketList() {
    this.navService.navigate('/tickets');
  }

}
