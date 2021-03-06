"use strict";
var static_1 = require("@angular/upgrade/static");
// import polyfills
// import 'core-js/es7/reflect'
// import 'zone.js/dist/zone'
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
    var upgrade = ref.injector.get(static_1.UpgradeModule);
    // bootstrap angular1
    // (<any>ref.instance).
    upgrade.bootstrap(document.body, [ng1_app_1.AppModule.name], { strictDi: false });
    // setTimeout is necessary because upgrade.bootstrap is async.
    // This should be fixed.
    setTimeout(function () {
        ref.injector.get(router_1.Router).initialNavigation();
    }, 0);
});
//# sourceMappingURL=main.js.map