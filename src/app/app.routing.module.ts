import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './service/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {AuthService} from './service/auth.service';
import {TicketListComponent} from "./ticket-list/ticket-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canLoad: [AuthGuardService]},
  {path: 'tickets', component: TicketListComponent, canLoad: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class AppRoutingModule { }
