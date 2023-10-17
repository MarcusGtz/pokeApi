import { PokemonsService } from './../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-berries-page-component',
  templateUrl: './berries-page-component.component.html',
  styleUrls: ['./berries-page-component.component.css']
})
export class BerriesPageComponentComponent implements OnInit {

  public berry?:object | any;

  constructor (
    private activateRoute: ActivatedRoute,
    private router: Router,
    private berriesService: PokemonsService,

  ) {}

  ngOnInit(): void { //observable hell
    this.activateRoute.params
    .pipe(
      switchMap( (params) => this.berriesService.searchBerryByIdOrName(params['id']) ),
    )
    .subscribe ( berry => {
debugger
      console.log( {berry} );
      if (!berry) {
        console.log('se va al home, fallo la peticion');
        return this.router.navigateByUrl('');
      } else {
        console.log('hay datos de berries');
        this.berry = berry;
        return;

      }
    })
  }

}
