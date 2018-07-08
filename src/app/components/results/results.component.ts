import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  heroes:any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroesService:HeroesService ) {
    // Obtiene parametros de la url y consulta por la informacion del heroe a través del service
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.searchHeroe(params['word']);
    } )
  }

  ngOnInit() {
  }

}
