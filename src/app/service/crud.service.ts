import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud } from '../interface/crud.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  url = 'https://gorest.co.in/public/v2/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Crud[]> {
    return this.http.get<Crud[]>(this.url);
  }

  postUsers(user: any): Observable<any> {
    return this.http.post<Crud>('http://localhost:3000/users', user);
  }
}
