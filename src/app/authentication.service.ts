import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {tap, delay} from 'rxjs/operators';
import {UsersService} from "./users.service";
import {User} from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private userService: UsersService) {
  }

  isLoggedIn = false;

  login(username: string, password: string): void {
    let user = this.userService.getByUsernameAndPassword(username, password);

    this.isLoggedIn = user !== undefined;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
