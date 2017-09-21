import {Component} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {NavService} from "../../service/nav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService: AuthService, public navService: NavService) {

  }

}
