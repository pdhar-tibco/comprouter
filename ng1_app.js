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
var static_1 = require("@angular/upgrade/static");
var platform_browser_1 = require("@angular/platform-browser");
'use strict';
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
// import angular1
var angular = require("angular");
// declare var angular:any;
// import 'angular1-component-router';
var AppComponent = (function () {
    function AppComponent() {
        this.template = "<nav>\n       <a ng-link=\"['CrisisCenter']\">Crisis Center</a>\n       <a ng-link=\"['Heroes']\">Heroes</a>\n       <a href=\"/helloworld\">HelloWorld</a>\n    </nav>\n    <ng-outlet></ng-outlet>\n    <router-outlet></router-outlet>";
        this.$routeConfig = [
            { path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true },
            { path: '/heroes/...', name: 'Heroes', component: 'heroes' }
        ];
    }
    return AppComponent;
}());
exports.AppModule = angular.module('app', ['ngComponentRouter', 'heroes', 'crisis-center'])
    .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
})
    .value('$routerRootComponent', 'app')
    .component('app', new AppComponent());
var Ng1AppModule = (function () {
    function Ng1AppModule() {
    }
    Ng1AppModule.prototype.ngDoBootstrap = function () {
        console.log('ngDoBootStrap()');
    };
    return Ng1AppModule;
}());
Ng1AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            static_1.UpgradeModule,
            router_1.RouterModule.forChild([])
        ],
        declarations: []
    }),
    __metadata("design:paramtypes", [])
], Ng1AppModule);
exports.Ng1AppModule = Ng1AppModule;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=ng1_app.js.map