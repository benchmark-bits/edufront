import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Page } from '../models/page.model';


@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  url: string;

  constructor(private http: HttpClient) { }

  // validation terms of service
  getServiceTerms(): Observable<Page> {
    const url = environment.serviceUrl + 'staticContent?key=terms-of-service';
    return this.http.get<Page>(url);
  }

  // validation terms of service
  getPrivacyPolicy(): Observable<Page> {
    const url = environment.serviceUrl + 'staticContent?key=privacy-policy';
    return this.http.get<Page>(url);
  }

  // account created message
  getAccountCreationMessage(): Observable<Page> {
    const url = environment.serviceUrl + 'staticContent?key=account-created';
    return this.http.get<Page>(url);
  }

}
