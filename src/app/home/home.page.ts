import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public linkList = [
    { label: 'Contacts', path: '/contact-list' },
    { label: 'Jeu des Animaux', path: '/animals' }
  ];

  constructor(private router: Router) { }
  
  goToPage(link) {
    this.router.navigateByUrl(link.path);
  }

}
