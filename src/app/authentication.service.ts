import {Injectable} from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {UsersService} from "./users.service";
import {User} from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private observable = new Subject<boolean>();


  constructor(private userService: UsersService) {
  }

  isLoggedIn = false;

  login(username: string, password: string): Observable<void> {
    return new Observable<void>(observer => {
      this.userService.getByUsernameAndPassword(username, password).subscribe((users: User[] | undefined) => {
        this.isLoggedIn = users !== undefined && users.length === 1;
        observer.next();
      });
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
