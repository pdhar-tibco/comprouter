/**
 * This file defines the root module of the Angular 2 of the application.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import angular2
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var static_1 = require("@angular/upgrade/static");
var ng1_app_1 = require("./ng1_app");
var index_1 = require("./hello/index");
// import app modules
// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
var Ng1Ng2UrlHandlingStrategy = (function () {
    function Ng1Ng2UrlHandlingStrategy() {
    }
    Ng1Ng2UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) {
        var result = url.toString().startsWith("/helloworld");
        console.log("[strategy.shouldProcessUrl] " + url.toString() + " " + result);
        return result;
    };
    Ng1Ng2UrlHandlingStrategy.prototype.extract = function (url) {
        console.log("[strategy.extract] " + url.toString());
        return url;
    };
    Ng1Ng2UrlHandlingStrategy.prototype.merge = function (url, whole) {
        console.log("[strategy.merge] " + url.toString() + " whole:" + whole.toString());
        return url;
    };
    return Ng1Ng2UrlHandlingStrategy;
}());
exports.Ng1Ng2UrlHandlingStrategy = Ng1Ng2UrlHandlingStrategy;
var RootCmp = (function () {
    function RootCmp() {
    }
    return RootCmp;
}());
RootCmp = __decorate([
    core_1.Component({
        selector: 'root-cmp',
        template: "\n    Loading....\n  ",
    }),
    __metadata("design:paramtypes", [])
], RootCmp);
exports.RootCmp = RootCmp;
var Ng2AppModule = (function () {
    function Ng2AppModule(upgrade) {
        this.upgrade = upgrade;
    }
    Ng2AppModule.prototype.ngDoBootstrap = function () {
        console.log("ngDoBootstrap");
    };
    return Ng2AppModule;
}());
Ng2AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            static_1.UpgradeModule,
            // import all modules
            ng1_app_1.Ng1AppModule,
            index_1.HelloWorldNgModule,
            // We don't need to provide any routes.
            // The router will collect all routes from all the registerd modules.
            router_1.RouterModule.forRoot([], {
                useHash: false,
                enableTracing: true,
                initialNavigation: false // we went to trigger navigation outselves after ng1 is done bootstrapping
            }),
        ],
        providers: [
            { provide: router_1.UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
        ],
        bootstrap: [],
        declarations: [RootCmp]
    }),
    __metadata("design:paramtypes", [static_1.UpgradeModule])
], Ng2AppModule);
exports.Ng2AppModule = Ng2AppModule;
//# sourceMappingURL=ng2_app.js.map