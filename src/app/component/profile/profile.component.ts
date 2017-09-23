import {Component, OnInit} from '@angular/core';
import {Upload} from '../../class/upload';
import {StorageService} from '../../service/storage.service';
import {UserProfileService} from '../../service/user-profile.service';
import {User} from '../../class/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  upload: Upload;
  progress;
  private uploadPath = 'user-profile-images';

  constructor(private userProfileService: UserProfileService, private storageService: StorageService) {}

  ngOnInit() {
    this.user = new User();
    this.upload = new Upload();
    this.upload.path = this.uploadPath;
    this.userProfileService.getUserProfile().subscribe(user => this.user = user);
    //todo implement an in progress deal
    this.storageService.uploadProgress.subscribe(progress => this.progress = progress);
    this.storageService.uploadFinished.subscribe((downloadUrl: string) => {
      this.user.imageUrl = downloadUrl;
      this.userProfileService.saveUserProfile(this.user);
    });
  }

  onUploadImage() {
    this.storageService.upload(this.upload);
  }

  onFileSelected(event) {
    const files = event.srcElement.files;
    if (files.length > 0) {
      this.upload.file = files[0];
    }
  }
}
