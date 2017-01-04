// import polyfills
// import 'core-js/es7/reflect'
// import 'zone.js/dist/zone'
"use strict";
// import angular2 dpes
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var router_1 = require("@angular/router");
var ng1_app_1 = require("./ng1_app");
var ng2_app_1 = require("./ng2_app");
/**
 * We bootstrap the Angular 2 module first, and then, once it's done,
 * bootstrap the Angular 1 module.
 */
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(ng2_app_1.Ng2AppModule).then(function (ref) {
    // bootstrap angular1
    ref.instance.upgrade.bootstrap(document.body, [ng1_app_1.Ng1AppModule.name]);
    // setTimeout is necessary because upgrade.bootstrap is async.
    // This should be fixed.
    setTimeout(function () {
        ref.injector.get(router_1.Router).initialNavigation();
    }, 0);
});
//# sourceMappingURL=main.js.map