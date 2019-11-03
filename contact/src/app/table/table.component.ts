import { Component, OnInit } from '@angular/core';
import { ContactsService} from './../contacts.service'
import { Contact } from '../model/Contact';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor( private service : ContactsService ) { }

  contactlist: Array<Contact>

  ngOnInit() {
    this.Pullcontacts();
  }
// To pull the contact from the database
  Pullcontacts(){
    let contacts$ = this.service.getcontacts();
    contacts$.subscribe(contacts => this.contactlist = contacts)
  }
}
