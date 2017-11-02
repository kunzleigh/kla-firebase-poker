import {Component, OnInit} from '@angular/core';
import {Upload} from '../../class/upload';
import {StorageService} from '../../service/storage.service';
import {UserProfileService} from '../../service/user-profile.service';
import {User} from '../../class/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  upload: Upload;
  progress: number;
  private uploadPath = 'user-profile-images';

  constructor(private userProfileService: UserProfileService,
              private route: ActivatedRoute,
              private storageService: StorageService) {

  }

  ngOnInit() {
    this.initUpload();
    this.user = new User();
    this.route.snapshot.data['userProfile'].valueChanges().subscribe(user => {
        console.log(user);
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
