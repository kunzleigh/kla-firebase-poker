import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {LoaderService} from '../service/loader.service';
import {TicketService} from "../service/ticket.service";
import {loadingDelay} from '../../settings/loading';

@Injectable()
export class TicketVoteResolve implements Resolve<boolean> {

  constructor(private ticketService: TicketService, private loaderService: LoaderService) {

  }

  /**
   * Retrieves the data the "page" component needs to work.
   * @param {ActivatedRouteSnapshot} route
   * @returns {Promise<boolean>} promise indicating the route should resolve
   */
  resolve(route: ActivatedRouteSnapshot): Promise<boolean> {
    this.loaderService.showLoader();
    const ticketId = route.paramMap.get('$ticketId');
    return this.ticketService.getCurrentTicket(ticketId).then(() => {
      return this.promiseDelay().then(() => {
        this.loaderService.hideLoader();
        return true;
      });
    });
  }

  /**
   * Delay existing to exaggerate the loader.
   * @returns {Promise<any>}
   */
  private promiseDelay(): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, loadingDelay));
  }

}
