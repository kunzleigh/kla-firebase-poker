import { Injectable } from '@angular/core';

@Injectable()
export class TicketService {
  //TODO add "Ticket" type as interface
  private _ticketList: Array<{}> = [];

  constructor() {
    //TODO cast all to "Ticket" type
    this._ticketList.push(
      {
        id: 1, title: 'Ticket 1', description: 'Just a plain old description',
        votes: [{$uid: '1', rank: '1'}, {$uid: '2', rank: '5'}, {$uid: '3', rank: '2'}]
      },
      {
        id: 2, title: 'Ticket 2', description: 'Just a plane old description',
        votes: []
      },
      {
        id: 3, title: 'Ticket 3', description: 'Just a plain ol\' description',
        votes: [{$uid: '3', rank: '3'}]
      }
    );
  }

  getTicketList(): Array<{}> {
    return this._ticketList;
  }

}
