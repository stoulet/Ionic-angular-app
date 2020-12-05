import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactInterface, ContactListService } from 'src/app/services/contact-list.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {

  public contact: ContactInterface = {
    name: '',
    number: '',
    id: null
  };


  constructor(private contactService: ContactListService, private router: Router) { }

  ngOnInit() {
  }

  validate() {
    // Sauvegarde de la note
    this.contactService.save(this.contact);
    // Retour à la liste des notes
    this.router.navigateByUrl('contact-list');
  }
}
