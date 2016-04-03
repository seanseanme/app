System.register(['angular2/core', 'angular2/common', '../user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, user_service_1;
    var UserInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserInfoComponent = (function () {
                function UserInfoComponent() {
                }
                UserInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'user-info',
                        /**    template:`
                        *<h1> my first angular2 app</h1>
                        
                        *<h1>{{title}}</h1>
                        *`,
                        */
                        templateUrl: 'app/userinfo/user-info.html',
                        styleUrls: [],
                        directives: [common_1.NgClass],
                        providers: [user_service_1.UserService],
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserInfoComponent);
                return UserInfoComponent;
            })();
            exports_1("UserInfoComponent", UserInfoComponent);
        }
    }
});
/**
*
* build form next
*/ 
//# sourceMappingURL=user-info.component.js.map