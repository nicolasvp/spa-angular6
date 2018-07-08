import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {
    // Obtiene parametros de la url y consulta por la informacion del heroe a través del service
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    } )
  }
}
