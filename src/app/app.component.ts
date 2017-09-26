import {Component, OnDestroy} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {ISubscription} from "rxjs/Subscription";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  /**
   * Current authentication state subscription
   * Watches when the subscription changes so the proper zone (~~~think scope~~~) is being used to trigger navigation.
   */
  private _authStateSubscription: ISubscription;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this._authStateSubscription = this.angularFireAuth.authState.subscribe((authState) => {
      if (authState && authState.isAnonymous) {
        this.router.navigate(["/login"]);
      } else {
        this.router.navigate(["/home"]);
      }
    });
  }

  /**
   * Unsubscribes from the subscription.
   */
  ngOnDestroy() {
    this._authStateSubscription.unsubscribe();
  }

}
