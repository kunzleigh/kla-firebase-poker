import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProfileService} from '../../../../web/src/app/service/user-profile.service';
import {User} from '../../../../web/src/app/class/user';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private userProfileService: UserProfileService) {
  }

  ionViewDidLoad() {
    this.user = new User();
    this.userProfileService.getUserProfile().valueChanges().subscribe((user: User) => {
      this.user = user;
    });
  }
}
