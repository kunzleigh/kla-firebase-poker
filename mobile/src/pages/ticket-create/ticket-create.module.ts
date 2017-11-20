import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketCreatePage } from './ticket-create';

@NgModule({
  declarations: [
    TicketCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(TicketCreatePage),
  ],
})
export class TicketCreatePageModule {}
