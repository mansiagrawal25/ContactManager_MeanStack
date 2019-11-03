import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Services } from '@angular/core/src/view';

import { Observable } from 'rxjs';
import { Contact } from './model/Contact';



@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  URL = "http://localhost:3000/contacts";
  constructor(private http: HttpClient ) {}

  // method for getting the contact from database

  getcontacts(): Observable<Array<Contact>> {
    return this.http.get<Array<Contact>>(this.URL);
  }
  // method for add the contact in databse

  addContact(contact: Contact ): Observable<Contact> {
    
    return this.http.post<Contact>(this.URL, contact)
  }

   
}
