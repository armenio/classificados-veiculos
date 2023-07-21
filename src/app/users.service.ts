import {Injectable} from '@angular/core';
import {User} from "./models/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const USERS: User[] = [
  {id: 1, username: 'admin', password: '123456'}
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
  }

  getByUsernameAndPassword2(username: string, password: string): User | undefined {
    return USERS.find(user => user.username === username && user.password === password);
  }

  getByUsernameAndPassword(username: string, password: string): Observable<User[] | undefined> {
    return this.http.get<User[]>(`${this.baseURL}?username=${username}&password=${password}`);
  }
}
