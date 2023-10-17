import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrls: [

  ]
})
export class PokemonsTableComponent {

  @Input()
  public pokemones: any;

}
