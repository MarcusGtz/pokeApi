import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByPokemonsPageComponent } from './pages/by-pokemons-page/by-pokemons-page.component';
import { ByBerriesPageComponent } from './pages/by-berries-page/by-berries-page.component';
import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ByPokemonsPageComponent,
    ByBerriesPageComponent,
    PokemonsPageComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule,
  ]
})
export class PokemonsModule { }
