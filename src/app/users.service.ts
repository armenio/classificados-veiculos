import {Injectable} from '@angular/core';
import {User} from "./models/user";

const USERS: User[] = [
  {id: 1, username: 'admin', password: '123456'}
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  getByUsernameAndPassword(username: string, password: string): User | undefined {
    return USERS.find(user => user.username === username && user.password === password);
  }
}
