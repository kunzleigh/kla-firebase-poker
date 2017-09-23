import {Injectable, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import 'firebase/storage';
import {User} from '../class/user';
import {AuthService} from './auth.service';

@Injectable()
export class UserProfileService implements OnInit {

  constructor(private afDatabase: AngularFireDatabase,
              private authService: AuthService) {
  }

  ngOnInit() {}

  saveUserProfile(user: User) {
    this.afDatabase.object('users/' + this.authService.getUserId()).update(user);
  }

  getUserProfile(): FirebaseObjectObservable<User> {
    return this.afDatabase.object('users/' + this.authService.getUserId());
  }

}
