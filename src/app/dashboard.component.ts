import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from 'angular2/router';
// import {Http, HTTP_PROVIDERS} from 'angular2/http';



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
    // this._heroService.getUsers('users')
    //                      .then(heroes => this.okResponse(heroes));
    this._heroService.getUsers('users').subscribe(heroes => this.okResponse(heroes));
  }


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

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
