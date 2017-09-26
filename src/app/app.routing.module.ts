import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AuthGuardService} from './service/auth-guard.service';
import {LoginComponent} from './component/login/login.component';
import {TicketListComponent} from "./component/ticket-list/ticket-list.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {TicketCreateComponent} from "./component/ticket-create/ticket-create.component";
import {TicketVoteComponent} from "./component/ticket-vote/ticket-vote.component";
import {UserProfileResolve} from './resolve/user-profile.resolve';
import {TicketVoteResolve} from "./resolve/ticket-vote.resolve";

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'tickets', component: TicketListComponent, canActivate: [AuthGuardService]},
  {path: 'create-ticket', component: TicketCreateComponent, canActivate: [AuthGuardService]},
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    resolve: {userProfile: UserProfileResolve}
  },
  {
    path: 'ticket-vote/:$ticketId',
    component: TicketVoteComponent,
    canActivate: [AuthGuardService],
    resolve: {ticketVote: TicketVoteResolve}
  },
  {path: '**', component: HomeComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService,
    UserProfileResolve,
    TicketVoteResolve
  ]
})
export class AppRoutingModule {
}
