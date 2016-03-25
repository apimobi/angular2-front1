System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this._http = http;
                    this.baseURL = 'http://jsonplaceholder.typicode.com/';
                }
                // getHeroes() {
                //   return Promise.resolve(HEROES);
                // }
                /*
                 * Get method for the API
                 */
                HeroService.prototype.getUsers = function (url) {
                    var _this = this;
                    if (url === void 0) { url = 'users'; }
                    // if(!localStorage.getItem('data'))
                    // {
                    //   // return this._http
                    //   //            .get(this.baseURL+url)
                    //   //            .toPromise()
                    //   //            .then((response) => this.helloData(response.json()));
                    if (!localStorage.getItem('data')) {
                        return this.getData();
                    }
                    else {
                        return Observable_1.Observable.create(function (observer) {
                            observer.next(_this.getLocalData());
                            observer.complete();
                        });
                    }
                };
                HeroService.prototype.getData = function (id) {
                    var _this = this;
                    if (id === void 0) { id = null; }
                    return this._http.get(this.baseURL + 'users')
                        .map(function (responseData) {
                        if (id)
                            return _this.helloData(responseData.json())[id];
                        else
                            return _this.helloData(responseData.json());
                    });
                };
                HeroService.prototype.saveData = function (data) {
                    // console.log(data);
                    localStorage.setItem('data', JSON.stringify(data));
                };
                HeroService.prototype.getLocalData = function () {
                    return JSON.parse(localStorage.getItem('data'));
                };
                HeroService.prototype.getUsersById = function (url, id) {
                    var _this = this;
                    if (url === void 0) { url = 'users'; }
                    if (id === void 0) { id = 0; }
                    if (!localStorage.getItem('data')) {
                        return this.getData(id);
                    }
                    else {
                        return Observable_1.Observable.create(function (observer) {
                            observer.next(_this.getLocalData()[id]);
                            observer.complete();
                        });
                    }
                };
                HeroService.prototype.helloData = function (data) {
                    console.log('hello');
                    // console.log(data);
                    this.saveData(data);
                    return this.getLocalData();
                };
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
                HeroService.prototype.handleError = function (error) {
                    if (error.json().total == 0) {
                        var responseMessage = 'Unknown server error';
                    }
                    else {
                        var code = error.json().error.code;
                        var serverMessage = error.json().error.message;
                        var exceptionMessage = error.json().error.exception[0].message;
                        var responseMessage = 'Error (' + code + '): ' + serverMessage + ' (' + exceptionMessage + ')';
                    }
                    // return Observable.throw(responseMessage);
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map