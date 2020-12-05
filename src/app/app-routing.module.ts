import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact-form',
    loadChildren: () => import('./pages/contact/contact-form/contact-form.module').then( m => m.ContactFormPageModule)
  },
  {
    path: 'contact-list',
    loadChildren: () => import('./pages/contact/contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
  {
    path: 'contact-details/:id',
    loadChildren: () => import('./pages/contact/contact-details/contact-details.module').then( m => m.ContactDetailsPageModule)
  },
  {
    path: 'animals',
    loadChildren: () => import('./pages/animals/animals.module').then( m => m.AnimalsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
