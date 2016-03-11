import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {Http, Response, Headers, HTTP_PROVIDERS} from 'angular2/http'

@Injectable()
export class HeroService {

  private _http: Http;
  private baseURL: string;

  constructor(http: Http) {
    this._http = http;
    this.baseURL = 'http://jsonplaceholder.typicode.com/';
  }

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  /*
    * Get method for the API
    */
  public getUsers(url: string = 'users'): any {

      // return this._http.get(this.baseURL + url)
      //            .map(res => this.helloData(res));
      //           //  .catch(this.handleError);


      // console.log('>>>'+users);
      //
      // return users;
      return this._http
                .get(this.baseURL+url)
                .toPromise()
                .then((response) => response.json()[1]);
  }


  helloData(data)
  {
    console.log('hello');
    console.log(data.json()[0]);
  }


  getHero(id:number)
  {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 10) // 2 seconds
    );
  }
  /*
  * Error handling for the API
  */
  private handleError(error: Response) {
      if (error.json().total == 0) {
          var responseMessage = 'Unknown server error';
      } else {
          var code = error.json().error.code;
          var serverMessage = error.json().error.message;
          var exceptionMessage = error.json().error.exception[0].message;
          var responseMessage = 'Error ('+code+'): '+serverMessage+' ('+exceptionMessage+')';
      }

      // return Observable.throw(responseMessage);
  }
}
