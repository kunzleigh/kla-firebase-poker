import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {NavService} from "../../service/nav.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public authService: AuthService, public navService: NavService) {

  }

}
