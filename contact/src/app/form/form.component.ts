import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import { Contact } from '../model/Contact';
import { ContactsService } from '../contacts.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ContactsService]
})
export class FormComponent implements OnInit {
// Parameteres

  contacts: Array<Contact>;
  contact: Contact;
  firstname:string;
  lastname:string;
  email:string;
  phone:string;
  @ViewChild('fname') fname :ElementRef ;
 @ViewChild('lname')lname :ElementRef ;
 @ViewChild('phonenum') phonenum :ElementRef ;
 @ViewChild('emailId') emailId :ElementRef 
  

// Constructor
  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    
  }
  // getContacts(){
  //   this.contactService.getcontacts()
  //     .subscribe(contacts => this.contacts = contacts);
  // }
  // addContact(){
  //   const newContact = {
  //     firstname: this.firstname,
  //     lastname: this.lastname,
  //     email: this.email,
  //     phone:this.phone

  //   }

  // getfunction
  getFormDetails(): Contact{
    this.firstname = this.fname.nativeElement.value;
    this.lastname = this.lname.nativeElement.value;
    this.phone = this.phonenum.nativeElement.value;
    this.email = this.emailId.nativeElement.value;
   //  validating data before creating a new contact
    // if(this.validatename(this.firstname,this.lastname) && (this.validatenumber(this.phone)) && (this.ValidateEmail(this.email))){
     this.contact = new Contact(this.firstname,this.lastname,this.phone,this.email);
   return this.contact;
   }
 

    // add funtion
    addContact(){


      this.getFormDetails()
    let newContact$ : Observable<Contact> = this.contactService.addContact(this.contact);
    newContact$.subscribe(
      (contact :Contact)  => { console.log("POST Request is successful ", (contact) ); 
    console.log(contact)  
    alert ('contact posted')
   },
      (error)  => { console.log(error)  }
    )};

  }

 
