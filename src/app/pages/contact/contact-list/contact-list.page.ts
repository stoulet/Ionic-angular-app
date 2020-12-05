import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})

export class ContactListPage implements OnInit {

  public contactList = [];

  constructor(private contactService: ContactListService) {
    this.contactList = this.contactService.findAll();
   }

  ngOnInit() {
  }

  deleteContact(id) {
   // Appel de la méthode de suppression sur le service
   this.contactService.delete(id);
  }


}
