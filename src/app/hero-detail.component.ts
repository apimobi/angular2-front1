import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  inputs: ['hero'],
})
export class HeroDetailComponent implements OnInit{
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getUsersById('users',  id)
                     .subscribe(hero => this.okResponse(hero));
  }

  okResponse(data)
  {
    // var dataOk = JSON.parse(data);
    console.log(data);
    this.hero = <Hero>{};
    this.hero.name = data['username'];
    this.hero.id = +this._routeParams.get('id');
  }

  goBack() {
    window.history.back();
  }
}
