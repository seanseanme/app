System.register(['angular2/core', './user.service', './dummy.component', './dashboard.component', './userinfo/user-info.component', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1, dummy_component_1, dashboard_component_1, user_info_component_1, router_1;
    var TopComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (dummy_component_1_1) {
                dummy_component_1 = dummy_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (user_info_component_1_1) {
                user_info_component_1 = user_info_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TopComponent = (function () {
                function TopComponent() {
                    this.title = 'Tour of Heroes';
                }
                TopComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{title}}</h1>\n        <h2>routing here!</h2>\n\t<a [routerLink]=\"['Dashboard']\">Dashboardlink </a>\n\t<a [routerLink]=\"['UserInfo']\">UserInfo</a>\n\t<router-outlet></router-outlet>\n      ",
                        directives: [dummy_component_1.DummyComponent, dashboard_component_1.DashboardComponent, user_info_component_1.UserInfoComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            user_service_1.UserService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dash',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent
                        },
                        {
                            path: '/user',
                            name: 'UserInfo',
                            component: user_info_component_1.UserInfoComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], TopComponent);
                return TopComponent;
            })();
            exports_1("TopComponent", TopComponent);
        }
    }
});
/**works with dummy component**/ 
//# sourceMappingURL=topelement.js.map