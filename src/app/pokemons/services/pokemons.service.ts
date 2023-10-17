import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({providedIn: 'root'})
export class PokemonsService {

  public result: any;
  public pokemonsList: Array<any> = [];
  public berriesList: Array<any> = [];
  private apiUrl: string = 'https://pokeapi.co/api/v2';


  constructor( private http: HttpClient ) { }


  searchPokemon ( term:string ) {
  // searchPokemon ( term:string ): any {
    if (term === '') {
      // opcion 1
    // return fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
    // .then( resp => resp.json() )
    // .then (data => {
    //   console.log('10 pokemones:', data.results)
    //   for (let index = 0; index < data.results.length; index++) {
    //     fetch(data.results[index].url)
    //     .then( resp2 => resp2.json() )
    //     .then(data2 => {
    //       this.pokemonsList.push(data2); //todavia no
    //       console.log('pokemonsList:', this.pokemonsList);
    //       fetch(data2.abilities[0].ability.url)
    //       .then(habilities => habilities.json())
    //       .then(data3 => {
    //         this.pokemonsList[index].abilities[0].ability.new = (data3);
    //       })
    //     })
    //   }
    // });
      // opcion 2
    //   return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0") // 10 pokemons
    //   .pipe(switchMap((response: any) =>{
    //     const all_pokemons = response;
    //     // for (let index = 0; index < all_pokemons.results.length; index++) {

    //     const URL2 = all_pokemons.results[7].url;
    //     return this.http
    //     .get(URL2)
    //     .pipe(map((response: any) =>
    //       // console.log('response', response);
    //       response))
    //   }
    // // }
    //    ))

      //  opcion 3 estable - muestra todos los pokemon
      return this.http.get(`${this.apiUrl}/pokemon/${ term }`) // Por pokemon

    } else {
      return this.http.get(`${this.apiUrl}/pokemon/${ term }`) // Por pokemon
        .pipe(
          catchError( error => {
            console.log(error);

            return of([]);
          })
        );
    }
  }



// fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
//     .then( resp => resp.json() )
//     .then (data => {
//       console.log('10 pokemones:', data.results)
//       for (let index = 0; index < data.results.length; index++) {
//         fetch(data.results[index].url)
//         .then( resp2 => resp2.json() )
//         .then(data2 => {
//           this.pokemonsList.push(data2); //todavia no
//           console.log('pokemonsList:', this.pokemonsList);
//           fetch(data2.abilities[0].ability.url)
//           .then(habilities => habilities.json())
//           .then(data3 => {
//             this.pokemonsList[index].abilities[0].ability.new = (data3);
//           })
//         })
//       }
//     }

searhPokemonByIdOrName (code: string): Observable<any[] | null | object> {
  const url = (`${this.apiUrl}/pokemon/${ code }`) // Por pokemon
  return this.http.get<any>( url) // Por pokemon
    .pipe(
      map( pokemon =>
        Object.keys(pokemon).length > 0 ? pokemon : 'valiooo'
        // this.result = pokemon
       ),
      // map( pokemones => this.http.get(pokemones.abilities[0].url)
      //   .subscribe( pokemones => {
      //     pokemones
      //     console.log(pokemones);

      //   }
      //     ) ),
      catchError ( () => of([]) )
    );
  }

  newPetition( code: string) {
    this.searhPokemonByIdOrName(code).subscribe( result => {
      console.log('RESULT', result);
      this.result = result;
      result
    }
      )
    // return this.http.get<any>( "https://pokeapi.co/api/v2/ability/2", ) // Por pokemon
    return this.http.get<any>( `${ this.result.abilities[0].ability.url}` )
    .pipe(
      map( result => {
        this.result.new = result;
       return result = this.result;
        // Object.keys(pokemones).length > 0 ? pokemones : null
      } ),
      catchError ( () => of([this.result]) )
    );
  }


//  ------------------------- Bayas -------------------------------
  searchBerry(termino: string): Observable<any[] | null | object> {
    const url = `https://pokeapi.co/api/v2/berry/${ termino}`;
    return this.http.get<any>( url) // Por pokemon
      .pipe(
        map( berry =>  Object.keys(berry).length > 0 ? berry : null),
        catchError ( () => of(null) )
      )
  }

  searchBerryByIdOrName(termino: string): Observable<any[] | null | object> {
    const url = `https://pokeapi.co/api/v2/berry/${ termino}`;
    return this.http.get<any>( url) // Por pokemon
      .pipe(
        map( berry =>  Object.keys(berry).length > 0 ? berry : null),
        catchError ( () => of(null) )
      )
  }

}
