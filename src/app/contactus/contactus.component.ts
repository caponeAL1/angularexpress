import { Component } from '@angular/core';
import { BackendAccessService } from '../backend-access.service';
 
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  contactsList:any=[];
  data:any;
  getcontactarray:any=[];
  userForm:any;
 
     constructor(private backendaccessService: BackendAccessService) {
       
     }
  getContacts() {
    this.contactsList=this.backendaccessService.getAllContacts();
   console.log(this.contactsList);
  }
  addContact(userForm:any) {
    this.getcontactarray=this.backendaccessService.addContact(userForm);
  }
  updateContact(userForm:any) {
    this.contactsList=this.backendaccessService.updateContact(userForm);
  }
  deleteContact(userForm:any) {
    this.contactsList=this.backendaccessService.deleteContact(userForm);
  }
}