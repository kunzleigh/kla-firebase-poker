import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import 'firebase/storage';
import {User} from '../class/user';
import {AuthService} from './auth.service';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class UserProfileService {

  currentUser$: FirebaseObjectObservable<User>;

  constructor(private afDatabase: AngularFireDatabase, private authService: AuthService, private angularFireAuth: AngularFireAuth) {
    this.getCurrentUser();

    this.angularFireAuth.authState.subscribe((auth) => {
      if (auth) {
        this.getCurrentUser();
      }
    });
  }

  saveUserProfile(user: User) {
    this.afDatabase.object('users/' + this.authService.getUserId()).update(user);
  }

  getUserProfile(): FirebaseObjectObservable<User> {
    return this.afDatabase.object('users/' + this.authService.getUserId());
  }

  getCurrentUser() {
    this.currentUser$ = this.afDatabase.object('/users/' + this.authService.getUserId());
  }

}
