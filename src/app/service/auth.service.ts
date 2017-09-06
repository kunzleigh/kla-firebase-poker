import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) { }

  signup() {}

  login() {
    this.router.navigate(['/home']);
  }

  isAuthenticated() {
    return true;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
