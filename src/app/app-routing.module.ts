import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-pages/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPagesComponent } from './shared/pages/contact-pages/contact-pages.component';
import { PokemonsPageComponent } from './pokemons/pages/pokemons-page/pokemons-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPagesComponent
  },
  {
    path: 'by/:id',
    component: PokemonsPageComponent
  },
  {
    path: 'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module').then(modulo => modulo.PokemonsModule )
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes), // forRoot, forChild
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
