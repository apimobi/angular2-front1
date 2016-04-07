import { Component }       from 'angular2/core';
import { HeroService }     from './hero.service';
import { BrandalleyService } from './services/brandalley.service';
import { HeroesComponent } from './heroes.component';
import { TopNavBarComponent } from './components/navbar/navbar.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { LineComponent } from './components/line/line.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'
import {URLSearchParams, Jsonp} from 'angular2/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <top-nav-bar></top-nav-bar>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, TopNavBarComponent],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    BrandalleyService,
    HTTP_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/lines',
    name: 'Lines',
    component: LineComponent
  }
])

export class AppComponent {
  title = 'Brand-Front1';
}
