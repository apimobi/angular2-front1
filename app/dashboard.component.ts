
import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';



@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private _router: Router,
    private _heroService: HeroService) {
  }
  ngOnInit() {
    this._heroService.getUsers('users')
                         .then(heroes => this.okResponse(heroes));
  }


  okResponse(data)
  {
    var dataOk = JSON.parse(data);

    for (var propName in dataOk) {
          // var hero = new Hero();
          // foo1.name = "John Doe";
          // this.heroes.push( new Hero() );
    }
    // return new Person(data.name, data.age);

    // heroes
    console.log(data);
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
