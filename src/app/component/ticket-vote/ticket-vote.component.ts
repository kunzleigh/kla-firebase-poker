import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {NavService} from "../../service/nav.service";
import {FIBONACCI, Fibonacci} from "../../class/fibonacci";
import {Ticket} from "../../class/ticket";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {Vote} from "../../class/vote";
import {VoteService} from "../../service/vote.service";

@Component({
  selector: 'app-ticket-vote',
  templateUrl: './ticket-vote.component.html',
  styleUrls: ['./ticket-vote.component.css']
})
export class TicketVoteComponent implements OnInit {

  readonly FIBONOCCI = FIBONACCI;

  current: Ticket;
  votes: Vote[] = [];

  constructor(public ticketService: TicketService, public navService: NavService, private route: ActivatedRoute, public authService: AuthService, private voteService: VoteService) {

  }

  ngOnInit() {
    this.current = this.route.snapshot.data['ticketVote'];
    if (this.current && this.current.votes) {
      let voteKeys = Object.keys(this.current.votes) || [];
      voteKeys.forEach((it) => {
        this.votes.push(this.current.votes[it]);
      });
    }
  }

  getVotes() {
    return this.votes || [];
  }

  selectVote(fibonocci: Fibonacci, hasVote: boolean) {
    debugger;
    if (hasVote) {
      this.voteService.setVote(fibonocci, this.current.$key);
    } else {
      this.voteService.addVote(fibonocci, this.current.$key)
    }
  }

  saveVote() {

  }

  clearVote() {

  }

  goToTicketList() {
    this.navService.navigate('/tickets');
  }

}
