import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // El constructor se ejecuta mucho antes que del ngOnInit
  constructor(private heroesService: HeroesService,
              private router: Router) { }

   // Se ejecuta cuando la pagina ya está renderizada.
  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    // console.log( this.heroes );
  }

  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx] );
  }

}
