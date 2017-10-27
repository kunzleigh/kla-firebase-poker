import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import 'rxjs/add/observable/of';

@Injectable()
export class TicketService {

  ticketList$: AngularFireList<any[]>;
  currentTicket$: AngularFireObject<any>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.ticketList$ = this.angularFireDatabase.list<any>('/tickets');
  }

  getTicketList(): AngularFireList<any[]> {
    return this.angularFireDatabase.list<any>('/tickets');
  }
}
