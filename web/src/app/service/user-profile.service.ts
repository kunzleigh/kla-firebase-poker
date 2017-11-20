import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import 'firebase/storage';
import {User} from '../class/user';
import {AuthService} from './auth.service';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class UserProfileService {

  /**
   * Current user observable
   */
  currentUser$: AngularFireObject<User>;

  constructor(private afDatabase: AngularFireDatabase, private authService: AuthService, private angularFireAuth: AngularFireAuth) {
    this.getCurrentUser();

    this.angularFireAuth.authState.subscribe((auth) => {
      if (auth) {
        this.getCurrentUser();
      }
    });
  }

  /**
   * Saves the user profile
   * @param {User} user
   */
  saveUserProfile(user: User) {
    this.afDatabase.object('users/' + this.authService.getUserId()).update(user);
  }

  /**
   * Returns the user profile
   * @returns {FirebaseObjectObservable<User>}
   */
  getUserProfile(): AngularFireObject<User> {
    return this.afDatabase.object('users/' + this.authService.getUserId());
  }

  /**
   * Subscribes to the current user db object
   */
  getCurrentUser() {
    this.currentUser$ = this.afDatabase.object('/users/' + this.authService.getUserId());
  }

}
