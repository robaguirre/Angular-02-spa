import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  // El constructor se ejecuta mucho antes que del ngOnInit
  constructor(private heroesService: HeroesService) {

   }

   // Se ejecuta cuando la pagina ya está renderizada.
  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();

    console.log( this.heroes );
  }

}
