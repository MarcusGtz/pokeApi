import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { map, switchMap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.css']
})
export class PokemonsPageComponent implements OnInit {

  public pokemon?:object | any ;

  constructor (
    private activatedRouter: ActivatedRoute,
    private pokemonsService:PokemonsService,
    private router:Router,
    private http: HttpClient,
     ) { }

  ngOnInit(): void {
    this.activatedRouter.params
    .pipe(
      switchMap( (result) => this.pokemonsService.searhPokemonByIdOrName( result['id'] ) )
    )
    .subscribe( pokemon => {
      console.log('recibi del suscribe switchMap: -->', pokemon);

      if (!pokemon) return this.router.navigateByUrl('about');

      console.log( 'tenemos pokemon!!!' );
      return this.pokemon = pokemon;
    } )
  }


}
