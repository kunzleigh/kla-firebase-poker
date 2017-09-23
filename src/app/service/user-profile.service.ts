import {Injectable, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {UserProfile} from '../../model/UserProfile';
import {AuthService} from '../auth.service';
import 'firebase/storage';
import {FirebaseApp} from 'angularfire2';

@Injectable()
export class UserProfileService implements OnInit {

  constructor(private afDatabase: AngularFireDatabase,
              private authService: AuthService) {
  }

  ngOnInit() {}

  saveUserProfile(userProfile: UserProfile) {
    this.afDatabase.object('users/' + userProfile.uid).update(userProfile);
  }

  getUserProfile(): FirebaseObjectObservable<UserProfile> {
    return this.afDatabase.object('users/' + this.authService.getUserId());
  }

}
