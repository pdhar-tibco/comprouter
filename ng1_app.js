'use strict';
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
exports.Ng1AppModule = angular.module('app', ['ngComponentRouter', 'heroes', 'crisis-center'])
    .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
})
    .value('$routerRootComponent', 'app')
    .component('app', new AppComponent());
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=ng1_app.js.map