import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ValidationEmailModel} from '../models/validation-email.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationEmailService {

  constructor(private http: HttpClient) { }

  getAllEmailIds(): Observable<ValidationEmailModel[]> {
    const url = environment.serviceUrl + 'users';
    return this.http.get<ValidationEmailModel[]>(url);
  }

}
