System.register(['angular2/core', 'angular2/common', 'angular2/http', './user.service', './user-data', 'a2-in-memory-web-api/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, user_service_1, user_data_1, http_2, core_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_data_1_1) {
                user_data_1 = user_data_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_userservice) {
                    this._userservice = _userservice;
                    this.title = "Im so stinky ~ Quinn ";
                    this.user = {
                        name: 'Sean',
                        delay: 5,
                        status: "nil",
                    };
                    this.bulletin = '';
                }
                AppComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userservice.getUsers()
                        .subscribe(function (users) { return _this.userlist = users; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.addUser = function (name) {
                    var _this = this;
                    if (!name) {
                        return;
                    }
                    this._userservice.addUser(name)
                        .subscribe(function (user) { return _this.userlist.push(user); }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                };
                AppComponent.prototype.isontime = function (delay) {
                    if (delay < 6) {
                        this.onTime = true;
                        this.superdelayed = false;
                        this.delayed = false;
                        this.bulletin = "on Time!";
                    }
                    else if (delay > 5 && delay < 15) {
                        this.delayed = true;
                        this.onTime = false;
                        this.superdelayed = false;
                        this.bulletin = delay + " minutes behind! ack!";
                    }
                    else if (delay > 15) {
                        this.superdelayed = true;
                        this.onTime = false;
                        this.delayed = false;
                        this.bulletin = delay + " minutes behind! sorry!";
                    }
                };
                AppComponent.prototype.personisontime = function (person, delay) {
                    if (delay < 6) {
                        person.onTime = true;
                        person.superdelayed = false;
                        person.delayed = false;
                        person.status = "on Time!";
                    }
                    else if (delay > 5 && delay < 15) {
                        person.delayed = true;
                        person.onTime = false;
                        person.superdelayed = false;
                        person.status = delay + " minutes behind! ack!";
                    }
                    else if (delay > 15) {
                        person.superdelayed = true;
                        person.onTime = false;
                        person.delayed = false;
                        person.status = delay + " minutes behind! sorry!";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        /**    template:`
                        *<h1> my first angular2 app</h1>
                        
                        *<h1>{{title}}</h1>
                        *`,
                        */
                        templateUrl: 'app/displayboard.html',
                        styleUrls: ['app/dashboard.component.css'],
                        directives: [common_1.NgClass],
                        providers: [
                            user_service_1.UserService, http_1.HTTP_PROVIDERS,
                            core_1.provide(http_2.XHRBackend, { useClass: core_2.InMemoryBackendService }),
                            core_1.provide(core_2.SEED_DATA, { useClass: user_data_1.UserData })
                        ]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.pristine.js.map