import {Component} from '@angular/core';
import {AuthenticationService} from "../../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

  constructor(public authService: AuthenticationService, public router: Router) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/admin']);
  }
}
