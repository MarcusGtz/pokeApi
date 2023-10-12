
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByPokemonsPageComponent } from './pages/by-pokemons-page/by-pokemons-page.component';
import { ByBerriesPageComponent } from './pages/by-berries-page/by-berries-page.component';
import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';

const routes: Routes = [
  {
    path: 'by-pokemon',
    component: ByPokemonsPageComponent
  },
  {
  path: 'by-berries',
  component: ByBerriesPageComponent
  },
  {
    path: 'by/:id',
    component: PokemonsPageComponent
    }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ],
})
export class PokemonsRoutingModule { }
