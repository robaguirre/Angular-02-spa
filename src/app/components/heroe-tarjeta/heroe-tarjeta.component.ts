// Con Output suele ir siempre EventEmitter
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  // Si se quiere recibir un datos dede fuera hay que usar input
  @Input() heroe: Heroe;
  @Input() index: number;

  // Es el evento que se quiere el padre esté escuchando
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }


  verHeroe() {
    this.router.navigate( ['/heroe', this.index] );
    // Esta funcion emite un evento para el padre (el indice del heroe seleccionado)
    // this.heroeSeleccionado.emit( this.index );
  }

}
