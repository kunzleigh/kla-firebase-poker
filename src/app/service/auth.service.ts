import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) {

  }

  getUserName(): string {
    return this.angularFireAuth.auth.currentUser.displayName;
  }

  loginWithGoogle() {
    const provider = (new auth.GoogleAuthProvider()).setCustomParameters({prompt: 'select_account'});

    this.angularFireAuth
      .auth
      .signInWithPopup(provider)
      .catch(e => {
        console.log('Ground control to major tom, your circuits dead there is something wrong', e.message);
      });
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  isAuthenticated() {
    return this.angularFireAuth.auth.currentUser != null;
  }

}
