import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-by-berries-page',
  templateUrl: './by-berries-page.component.html',
  styleUrls: ['./by-berries-page.component.css']
})
export class ByBerriesPageComponent {

  // public pokemons: Pokemon[] = [];
  public berry: Array<any> = [];
  // public pokemons: any;

  constructor( private PokemonsService: PokemonsService ) {

  }
  searchByBerry( termino: string):void {
    this.PokemonsService.searchBerry(termino)
      .subscribe( berry => {
        this.berry[0] = berry;
        // this.berry.push(berry);
        console.log('berry', berry);
        console.log('this.berry', this.berry);
      } );
    // console.log({termino});//busqueda

  }
}
