import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private userAuthenticated = false;
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.user = this.angularFireAuth.authState;
  }

  loginWithGoogle() {
    this.angularFireAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(u => {
        this.router.navigate(['/home']);
      })
      .catch(e => {
        console.log('Ground control to major tom, your circuits dead there is something wrong', e.message);
      });
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/login']);

  }

  isAuthenticated() {
    return this.userAuthenticated;
  }
}
