import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private _router:Router ) { }

  ngOnInit() {
  }

  searchHeroe( word:string ){
    console.log( word );
    this._router.navigate( ['/search', word] );
  }
}
