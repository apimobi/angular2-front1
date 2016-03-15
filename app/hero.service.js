System.register(['./mock-heroes', 'angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_heroes_1, core_1, http_1;
    var HeroService;
    return {
        setters:[
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this._http = http;
                    this.baseURL = 'http://jsonplaceholder.typicode.com/';
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_heroes_1.HEROES);
                };
                /*
                  * Get method for the API
                  */
                HeroService.prototype.getUsers = function (url) {
                    // return this._http.get(this.baseURL + url)
                    //            .map(res => this.helloData(res));
                    //           //  .catch(this.handleError);
                    if (url === void 0) { url = 'users'; }
                    // console.log('>>>'+users);
                    //
                    // return users;
                    return this._http
                        .get(this.baseURL + url)
                        .toPromise()
                        .then(function (response) { return response.json(); });
                };
                HeroService.prototype.helloData = function (data) {
                    console.log('hello');
                    console.log(data.json()[0]);
                };
                HeroService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_heroes_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 10);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
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
            })();
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map