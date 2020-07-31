import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ValidationMessage } from '../models/validation-message.model';





@Injectable({
  providedIn: 'root'
})
export class ValidationMessageService {

  constructor(private http: HttpClient) { }

  // validation messages for create user
  signupValidationMessage(): Observable<ValidationMessage> {
   const url = environment.serviceUrl + 'validationMessage?key=create-account';
   return this.http.get<ValidationMessage>(url);
  }

  loginValidationMessage(): Observable<ValidationMessage> {
   const url = environment.serviceUrl + 'validationMessage?key=login';
   return this.http.get<ValidationMessage>(url);
  }

}
