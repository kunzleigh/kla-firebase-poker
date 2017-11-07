import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AuthService} from '../../../web/src/app/service/auth.service';
import {TicketService} from '../../../web/src/app/service/ticket.service';
import {VoteService} from '../../../web/src/app/service/vote.service';
import {firebase} from '../../../shared/configs/firebase';
import {ProfilePage} from '../pages/profile/profile';
import {UserProfileService} from '../../../web/src/app/service/user-profile.service';
import {StorageService} from '../../../web/src/app/service/storage.service';
import {TicketVotePage} from '../pages/ticket-vote/ticket-vote';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    ProfilePage,
    TicketVotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    ProfilePage,
    TicketVotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    TicketService,
    VoteService,
    UserProfileService,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
