System.register(['angular2/core', '../../services/brandalley.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, brandalley_service_1, router_1;
    var LineComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (brandalley_service_1_1) {
                brandalley_service_1 = brandalley_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LineComponent = (function () {
                function LineComponent(_router, _brandalleyService) {
                    this._router = _router;
                    this._brandalleyService = _brandalleyService;
                    this.lines = [];
                }
                LineComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._brandalleyService.getProducts('rers').subscribe(function (heroes) { return _this.okResponse(heroes); });
                    //this._brandalleyService.getProducts('C-1812517-blouses%2c-tuniques/N-12824-univers~femme').subscribe(products => this.okResponse(products));
                };
                LineComponent.prototype.okResponse = function (data) {
                    var response = data.response.rers;
                    var line = {};
                    var i = 0;
                    var dest = {};
                    for (var key in response) {
                        line = {};
                        line.destinations = [];
                        line.name = response[key]['line'];
                        var destinations = response[key]['destinations'];
                        for (var j in destinations) {
                            dest = {};
                            dest.id_destination = destinations[j]['id_destination'];
                            dest.name = destinations[j]['name'];
                            dest.slug = destinations[j]['slug'];
                            line.destinations.push(dest);
                        }
                        line.id = i;
                        this.lines.push(line);
                        i++;
                        console.log(response[key]);
                    }
                };
                LineComponent = __decorate([
                    core_1.Component({
                        selector: 'my-lines',
                        templateUrl: './app/components/line/line.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, brandalley_service_1.BrandalleyService])
                ], LineComponent);
                return LineComponent;
            }());
            exports_1("LineComponent", LineComponent);
        }
    }
});
//# sourceMappingURL=line.component.js.map