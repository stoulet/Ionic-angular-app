import { Injectable } from '@angular/core';

export interface ContactInterface {
  name: string;
  number: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContactListService {


// Liste des contacts
  // un tableau ordinal d'objets de type NoteInterface
  public contactList: ContactInterface[] = [
    { name: 'Simon', number: '0695458550', id: 1 },
    { name: 'François', number: '0785459621', id: 2 },
    { name: 'Léo', number: '0685253274', id: 3 }
  ];

  constructor() { }

  /**
   * Retourne la liste de tous les contacts
   */
  findAll(): ContactInterface[] {
    return this.contactList;
  }

  /**
   * Retourne un contact en fonction de son id
   * @param id 
   */
  findOneById(id): ContactInterface {
    // Recherche d'une note dans la liste en fonction de son id
    const contact: ContactInterface = this.contactList.find((item) => item.id == id);
    return contact;
  }

  /**
   * Enregistrement du contact
   * @param contact
   */
  save(contact: ContactInterface) {
    if (contact.id == null) {
      // Affecter un id à la note
      contact.id = new Date().getTime();

      // Ajout du contact au tableau des contacts
      this.contactList.push(contact);
    }
  }

  // Suppression d'un contact
  delete(id) {
    // Récupérer de la position du contact dans le tableau
    const index = this.contactList.findIndex((item) => item.id == id);
    // Suppression du contact dans le tableau
    this.contactList.splice(index, 1);
  }

}
