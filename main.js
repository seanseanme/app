System.register(['angular2/platform/browser', 'rxjs/Rx', './topelement'], function(exports_1) {
    var browser_1, topelement_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (topelement_1_1) {
                topelement_1 = topelement_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(topelement_1.TopComponent);
        }
    }
});
//# sourceMappingURL=main.js.map