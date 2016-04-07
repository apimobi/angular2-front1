// import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
// import {Hero} from './hero';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BrandalleyService {

  private _http: Http;
  private _baseURL: string;
  private _headers : Headers;
  private _requestOptions : RequestOptions;

  constructor(http: Http) {
    this._http = http;
    this._baseURL = 'http://api-ratp.pierre-grimaud.fr/v2/';
    this._headers = new Headers();
    // this._headers.append("Content-Type", 'application/json');
    // this._headers.append("apiKey", 'cf4730594a78b5c5c2ea1444ff98f6f6ba6cae2a');
  }

  /*
   * Get method for the API
   */
  public getProducts(context: string = 'users'): any {
    // this._requestOptions = new RequestOptions({ headers: this._headers, method: RequestMethod.Get,  });
    //
    // var headers = new Headers();
    // headers.append('apiKey', 'cf4730594a78b5c5c2ea1444ff98f6f6ba6cae2a');

    
    return this._http.get(this._baseURL+context)
                     .map( (responseData) => {
                                        return this.responseData(responseData.json());
                                      });
                    //  .subscribe(
                    //     responseData => this.responseData(responseData.json()),
                    //     err => this.handleError(err),
                    //     () => console.log('Random Quote Complete')
                    //   );
  }



  private responseData(data)
  {
    console.log('responseData');
    return data;
  }

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
