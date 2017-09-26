import {Component} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {NavService} from "../../service/nav.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService, public navService: NavService) {

  }

}
