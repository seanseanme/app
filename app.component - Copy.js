System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Im so stinky ~ Quinn ";
                    this.user = {
                        name: 'Sean',
                        delay: 5,
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<h1> my first angular2 app</h1>\n\n<h1>{{title}}</h1>\n{{user.name}}\n<input type=\"number\" [(ngModel)]=\"user.delay\" (keyup)=isontime(user.delay)>\n{{user.delay}}\n\n<div class=\"bb\" [ngClass]=\"{isgreen: onTime, isyellow: delayed, isred: superdelayed}\"> Sean is {{bulletin}}</div>\n\n",
                        styles: ["\n \n   .isgreen {\n \n     background-color: lightgreen;\n\n   }\n   \n   .isyellow {\n\n     background-color: yellow;\n   \n   }\n\n   .isred {\n\n     background-color: pink;\n   \n   }\n\n"],
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            ;
            bulletin = '';
            isontime(delay);
            {
                if (delay < 6) {
                    this.onTime = true;
                    this.superdelayed = false;
                    this.delayed = false;
                    this.bulletin = "on Time!";
                }
                ;
                if (delay > 5 && delay < 15) {
                    this.delayed = true;
                    this.onTime = false;
                    this.superdelayed = false;
                    this.bulletin = delay + " minutes behind! ack!";
                }
                ;
                if (delay > 15) {
                    this.superdelayed = true;
                    this.onTime = false;
                    this.delayed = false;
                    this.bulletin = delay + " minutes behind! sorry!";
                }
                ;
            }
            ;
            ;
        }
    }
});
//# sourceMappingURL=app.component - Copy.js.map