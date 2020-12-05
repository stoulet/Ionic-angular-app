import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactInterface, ContactListService } from 'src/app/services/contact-list.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})

export class ContactDetailsPage implements OnInit {

  public contact: ContactInterface;

  constructor(private route: ActivatedRoute, private contactService: ContactListService) {
   // Récupération de l'identifiant passé en paramètre de la route
   const id = parseInt(route.snapshot.paramMap.get('id'), 10);
   // récupération du contact depuis le service
   this.contact = this.contactService.findOneById(id);
   }

  ngOnInit() {
  }

}
