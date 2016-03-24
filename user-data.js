System.register([], function(exports_1) {
    var UserData;
    return {
        setters:[],
        execute: function() {
            UserData = (function () {
                function UserData() {
                }
                UserData.prototype.createDb = function () {
                    var users = [
                        { "name": "Sean", "delay": 0, "status": 'nil' },
                        { "name": "Chet", "delay": 0, "status": 'nil' },
                    ];
                    return { users: users };
                };
                return UserData;
            })();
            exports_1("UserData", UserData);
        }
    }
});
//# sourceMappingURL=user-data.js.map