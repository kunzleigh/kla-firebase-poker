import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {LoaderService} from '../service/loader.service';
import {TicketService} from "../service/ticket.service";
import {Ticket} from "../class/ticket";
import { loadingDelay } from '../../settings/loading';

@Injectable()
export class TicketVoteResolve implements Resolve<Ticket> {

  constructor(private ticketService: TicketService, private loaderService: LoaderService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Ticket> {
    this.loaderService.showLoader();
    const ticketId = route.paramMap.get('$ticketId');
    return this.ticketService.getCurrentTicket(ticketId).then((ticket) => {
      return this.promiseDelay().then(() => {
        this.loaderService.hideLoader();
        if (ticket) {
          return ticket;
        } else {
          this.router.navigate(['/home']);
        }
      });
    });
  }

  private promiseDelay(): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, loadingDelay));
  }

}
