import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProfileService} from '../../../../web/src/app/service/user-profile.service';
import {StorageService} from '../../../../web/src/app/service/storage.service';
import {User} from '../../../../web/src/app/class/user';
import {Upload} from '../../../../web/src/app/class/upload';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user = new User();
  upload = new Upload();
  progress: number;
  private uploadPath = 'user-profile-images';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private userProfileService: UserProfileService,
              private storageService: StorageService) {
  }

  ionViewDidLoad() {
    this.initUpload();
    this.user = new User();
    this.userProfileService.getUserProfile().valueChanges().subscribe((user: User) => {
      this.user = user;
    });
    this.storageService.uploadProgress.subscribe(progress => this.progress = progress);
    this.storageService.uploadFinished.subscribe((downloadUrl: string) => {
      this.user.imageUrl = downloadUrl;
      this.userProfileService.saveUserProfile(this.user);
      this.initUpload();
    });
  }

  /**
   * Method triggers when the image upload completes
   */
  onUploadImage() {
    this.storageService.upload(this.upload);
  }

  /**
   * Method triggers when an upload file is selected
   * @param event
   */
  onFileSelected(event) {
    const files = event.srcElement.files;
    if (files.length > 0) {
      this.upload.file = files[0];
      this.upload.name = this.upload.file.name.split('.')[0];
    }
  }

  /**
   * Starts the image upload
   */
  initUpload() {
    this.upload = new Upload();
    this.upload.path = this.uploadPath;
    this.progress = 0;
  }

}
