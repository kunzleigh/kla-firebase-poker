import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FirebaseApp } from 'angularfire2';
import {Upload} from '../class/upload';
import * as firebase from 'firebase';
import 'firebase/storage';

@Injectable()
export class StorageService {

  private uploadTask: firebase.storage.UploadTask;
  private storageRef;
  uploadProgress: Subject<number>;
  uploadFinished: Subject<string>;

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    this.storageRef = firebase.storage().ref();
    this.uploadProgress = new Subject();
    this.uploadFinished = new Subject();
  }

  /**
   * Uploads the user image to the storage location
   * @param {Upload} upload
   */
  upload(upload: Upload) {
    this.uploadTask = this.storageRef.child(upload.path + '/' +  upload.name).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) =>  {
        // upload in progress
        this.uploadProgress.next((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload finished successfully
        this.uploadFinished.next(this.uploadTask.snapshot.downloadURL);
      }
    );
  }

}
