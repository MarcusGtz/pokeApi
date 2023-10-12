import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-by-pokemons-page',
  templateUrl: './by-pokemons-page.component.html',
  styleUrls: ['./by-pokemons-page.component.css']
})
export class ByPokemonsPageComponent {

  // public pokemons: Pokemon[] = [];
  public pokemons: Array<any> = [];
  // public pokemons: any;

  constructor( private pokemonsService: PokemonsService ) {

  }
  searchByPokemon( termino: string):void {
    this.pokemonsService.searchPokemon(termino)
      .subscribe( pokemons => {
        this.pokemons[0] = pokemons;
        // this.pokemons.push(pokemons);
        console.log('pokemons', pokemons);
        console.log('this.pokemons', this.pokemons);
      } );
    // console.log({termino});//busqueda

  }
}
