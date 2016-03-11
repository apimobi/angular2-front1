import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent],
})


export class HeroesComponent implements OnInit{
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes = HEROES;

  constructor(
      private _heroService: HeroService,
      private _router: Router ) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  getHeroes() {
    // this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    this._heroService.getUsers().search('test')
                         .then(items => this.heroes = items);

  }

  okResponse(result)
  {
    console.log(result);
  }


  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

var HEROES: Hero[] ;
