import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  heroes:any = {};
  word:string = "";
  @Input() heroe: any = {};
  @Input() index: number;

  constructor( private activatedRoute: ActivatedRoute, private _heroesService:HeroesService, private _router: Router ) {

  }

  ngOnInit() {
    // Obtiene parametros de la url y consulta por la informacion del heroe a través del service
    this.activatedRoute.params.subscribe( params => {
      this.word = params['word'];
      this.heroes = this._heroesService.searchHeroe(params['word']);
    } )
  }

  showHeroe() {
    this._router.navigate( ['/heroe', this.index] );
  }

}
