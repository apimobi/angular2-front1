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
  public heroes: Hero[] = [];

  constructor(
      private _heroService: HeroService,
      private _router: Router ) {}

  ngOnInit() {
    this._heroService.getUsers('users')
                         .subscribe(heroes => this.okResponse(heroes));
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  okResponse(data)
  {
    // var data = JSON.parse(dataResult);
    var hero = <Hero>{};
    var i = 0;
    for (var key in data) {
      hero = <Hero>{};
      hero.name = data[key]['username'];
      hero.id = i;
      this.heroes.push(hero);
      i++;
    }
  }


  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

var HEROES: Hero[] ;
