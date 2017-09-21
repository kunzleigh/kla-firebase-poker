import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AuthGuardService} from './service/auth-guard.service';
import {LoginComponent} from './component/login/login.component';
import {TicketListComponent} from "./component/ticket-list/ticket-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'tickets', component: TicketListComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }
