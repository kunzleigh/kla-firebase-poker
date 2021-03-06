import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import {AppRoutingModule} from './app.routing.module';
import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {TicketListComponent} from './component/ticket-list/ticket-list.component';
import {TicketService} from "./service/ticket.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavService} from "./service/nav.service";
import {AuthService} from "./service/auth.service";
import {MaterialModule} from "./material.module";
import {ProfileComponent} from "./component/profile/profile.component";
import {TicketCreateComponent} from "./component/ticket-create/ticket-create.component";
import {FormsModule} from "@angular/forms";
import {UserProfileService} from './service/user-profile.service';
import {StorageService} from './service/storage.service';
import {TicketVoteComponent} from "./component/ticket-vote/ticket-vote.component";
import {environment} from '../environments/environment';
import {VoteService} from "./service/vote.service";
import {LoaderComponent} from './component/loader/loader.component';
import {LoaderService} from './service/loader.service';
import {ValueToFibonacciPipe} from "./pipe/valueToFibonacci.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    TicketCreateComponent,
    TicketListComponent,
    ProfileComponent,
    TicketVoteComponent,
    LoaderComponent,
    ValueToFibonacciPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    TicketService,
    NavService,
    AuthService,
    UserProfileService,
    StorageService,
    VoteService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
