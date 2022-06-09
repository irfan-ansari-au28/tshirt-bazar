import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  userList = new BehaviorSubject<User[]>(this.users);

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  setUsersList(users: User[]) {
    this.userList.next(users);
  }
}
