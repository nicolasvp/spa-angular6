import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  // Propiedades recibidas desde el padre
  @Input() heroe: any = {};
  @Input() index: number;

  // Propiedades emitidas hacia el padre
  @Output() selectedHeroe: EventEmitter<number>;

  // Inicializa el evento a emitir hacia el padre
  constructor(private _router: Router) {
    this.selectedHeroe = new EventEmitter();
  }

  ngOnInit() {
  }

  // Emite un evento con el index hacia el componente padre (heroes)
  showHeroe() {
    // Con emit se emite el index hacia el padre y así utiliza la funcion showHeroe del padre con el index enviado desde el componente hijo
    //this.selectedHeroe.emit( this.index );
    this._router.navigate( ['/heroe', this.index] );
  }

}
