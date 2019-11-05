import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

heroe: Heroe;

  // Para recoger parametros debemos usar el ActivatedRouter y subcribirnos
  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params.id);
    });

   }

  ngOnInit() {
  }

}
