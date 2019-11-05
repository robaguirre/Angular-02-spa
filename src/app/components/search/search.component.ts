import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  texto: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.texto = params.texto;
      this.heroes =  this.heroesService.buscarHeroes(params.texto);
    });
  }

  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx] );
  }

}
