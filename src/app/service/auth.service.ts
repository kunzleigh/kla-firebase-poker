import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) {

  }

  /**
   * Retrieves the logged in user's display name
   * @returns {string}
   */
  getUserName(): string {
    return this.angularFireAuth.auth.currentUser.displayName;
  }

  /**
   * Retrieves the logged in user's id (uid, $uid)
   * @returns {string}
   */
  getUserId(): string {
    return this.angularFireAuth.auth.currentUser.uid;
  }

  /**
   * Method for specifically logging in with Google
   */
  loginWithGoogle() {
    const provider = (new auth.GoogleAuthProvider()).setCustomParameters({prompt: 'select_account'});

    this.angularFireAuth
      .auth
      .signInWithPopup(provider)
      .catch(e => {
        console.log('Ground control to major tom, your circuits dead there is something wrong', e.message);
      });
  }

  /**
   * Complete logout method
   */
  logout() {
    this.angularFireAuth.auth.signOut();
  }

  /**
   * Flag method indicating the user is logged in or not
   * @returns {boolean}
   */
  isAuthenticated() {
    return this.angularFireAuth.auth.currentUser != null;
  }

}
