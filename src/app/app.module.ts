import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule, AUTH_PROVIDERS} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomeComponent } from './home/home.component';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {TicketService} from "./service/ticket.service";
import {AuthService} from './service/auth.service';

const firebaseConfig = {
  apiKey: 'AIzaSyDkMxqhRj9-Xr9-vqQiFYxfIAqttbk-B3I',
  authDomain: 'kla-scrum-poker.firebaseapp.com',
  databaseURL: 'https://kla-scrum-poker.firebaseio.com',
  projectId: 'kla-scrum-poker',
  storageBucket: 'kla-scrum-poker.appspot.com',
  messagingSenderId: '735057512980'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomComponent,
    HeaderComponent,
    CreateRoomComponent,
    HomeComponent,
    TicketListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
