import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketVotePage } from './ticket-vote';

@NgModule({
  declarations: [
    TicketVotePage,
  ],
  imports: [
    IonicPageModule.forChild(TicketVotePage),
  ],
})
export class TicketVotePageModule {}
