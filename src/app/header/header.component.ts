import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userAuthenticated = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userAuthenticated = this.authService.isAuthenticated();
    this.authService.getAuthStateObservable().subscribe((auth) => {
      this.userAuthenticated = auth != null;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
