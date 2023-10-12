import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/Rx';
import { map } from "rxjs/operators";
import { Pokemon } from '../interfaces/pokemon';

@Injectable({providedIn: 'root'})
export class PokemonsService {

  private apiUrl: string = 'https://pokeapi.co/api/v2';


  constructor( private http: HttpClient ) { }


  searchPokemon ( term:string ) {
  // searchPokemon ( term:string ): any {
    if (term === '') {
      return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0") // 10 pokemons
    } else {
      return this.http.get(`${this.apiUrl}/pokemon/${ term }`) // Por pokemon
    }
  }

}
