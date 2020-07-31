import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('accessToken');
  }

  logIn(email: string, password: string): Observable<User> {
    const url = environment.serviceUrl + 'login';
    return this.http.post<User>(url, {email, password});
  }

  signUp(email: string, password: string): Observable<User> {
    const url = environment.serviceUrl + 'register';
    return this.http.post<User>(url, {email, password});
  }
}
