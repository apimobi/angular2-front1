import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {Http, Response, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroService {

  private _http: Http;
  private baseURL: string;

  constructor(http: Http) {
    this._http = http;
    this.baseURL = 'http://jsonplaceholder.typicode.com/';
  }

  // getHeroes() {
  //   return Promise.resolve(HEROES);
  // }

  /*
   * Get method for the API
   */
  public getUsers(url: string = 'users'): any {

      // if(!localStorage.getItem('data'))
      // {
      //   // return this._http
      //   //            .get(this.baseURL+url)
      //   //            .toPromise()
      //   //            .then((response) => this.helloData(response.json()));
      if(!localStorage.getItem('data'))
      {
        return this.getData();
      }else{
        return Observable.create(observer => {
            observer.next(this.getLocalData());
            observer.complete();
        });
      }

  }

  getData(id=null):any{
    return this._http.get(this.baseURL+'users')
                     .map( (responseData) => {
                                        if(id)return this.helloData(responseData.json())[id];
                                        else  return this.helloData(responseData.json());
                                      });
  }

  saveData(data)
  {
    // console.log(data);
    localStorage.setItem('data', JSON.stringify(data));
  }

  getLocalData()
  {
    return JSON.parse(localStorage.getItem('data'));
  }


  public getUsersById(url: string = 'users', id: number = 0): any {
    if(!localStorage.getItem('data'))
    {
      return this.getData(id);
    }else{
      return Observable.create(observer => {
          observer.next(this.getLocalData()[id]);
          observer.complete();
      });
    }

  }


  helloData(data)
  {
    console.log('hello');
    // console.log(data);
    this.saveData(data);
    return this.getLocalData();
  }


  // getHero(id:number)
  // {
  //   return Promise.resolve(HEROES).then(
  //     heroes => heroes.filter(hero => hero.id === id)[0]
  //   );
  // }
  //
  // getHeroesSlowly() {
  //   return new Promise<Hero[]>(resolve =>
  //     setTimeout(()=>resolve(HEROES), 10) // 2 seconds
  //   );
  // }
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
