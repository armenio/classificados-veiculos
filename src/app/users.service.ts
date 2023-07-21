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

  getByUsernameAndPassword(username: string, password: string): Observable<User[] | undefined> {
    return this.http.get<User[]>(`${this.baseURL}?username=${username}&password=${password}`);
  }
}
