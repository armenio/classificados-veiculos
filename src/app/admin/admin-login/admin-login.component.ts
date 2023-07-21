import {Component} from '@angular/core';
import {AuthenticationService} from "../../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  year: number = (new Date()).getFullYear();
  message: string = '';

  username: string = 'admin';

  password: string = '123456';

  constructor(public authenticationService: AuthenticationService, public router: Router) {
  }

  onSubmit() {
    this.authenticationService.login(this.username, this.password).subscribe(() => {
      if (this.authenticationService.isLoggedIn) {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.message = 'Usuário ou senha inválidos'
      }
    });
  }
}
