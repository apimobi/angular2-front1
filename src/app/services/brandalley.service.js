System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var BrandalleyService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            BrandalleyService = (function () {
                function BrandalleyService(http) {
                    this._http = http;
                    this._baseURL = 'http://api-ratp.pierre-grimaud.fr/v2/';
                    this._headers = new http_1.Headers();
                    // this._headers.append("Content-Type", 'application/json');
                    // this._headers.append("apiKey", 'cf4730594a78b5c5c2ea1444ff98f6f6ba6cae2a');
                }
                /*
                 * Get method for the API
                 */
                BrandalleyService.prototype.getProducts = function (context) {
                    // this._requestOptions = new RequestOptions({ headers: this._headers, method: RequestMethod.Get,  });
                    //
                    // var headers = new Headers();
                    // headers.append('apiKey', 'cf4730594a78b5c5c2ea1444ff98f6f6ba6cae2a');
                    var _this = this;
                    if (context === void 0) { context = 'users'; }
                    return this._http.get(this._baseURL + context)
                        .map(function (responseData) {
                        return _this.responseData(responseData.json());
                    });
                    //  .subscribe(
                    //     responseData => this.responseData(responseData.json()),
                    //     err => this.handleError(err),
                    //     () => console.log('Random Quote Complete')
                    //   );
                };
                BrandalleyService.prototype.responseData = function (data) {
                    console.log('responseData');
                    return data;
                };
                BrandalleyService.prototype.handleError = function (error) {
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
                BrandalleyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BrandalleyService);
                return BrandalleyService;
            }());
            exports_1("BrandalleyService", BrandalleyService);
        }
    }
});
//# sourceMappingURL=brandalley.service.js.map