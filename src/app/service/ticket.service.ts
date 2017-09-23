import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class TicketService {

  ticketList$: FirebaseListObservable<any>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.ticketList$ = this.angularFireDatabase.list('/tickets');
  }

}
