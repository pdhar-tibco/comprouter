  'use strict';
// import angular1
import * as angular from 'angular';
// declare var angular:any;
// import 'angular1-component-router';
class AppComponent {
    template = 
    `<nav>
       <a ng-link="[\'CrisisCenter\']">Crisis Center</a>
       <a ng-link="[\'Heroes\']">Heroes</a>
       <a href="/helloworld">HelloWorld</a>
    </nav>
    <ng-outlet></ng-outlet>
    <router-outlet></router-outlet>`;
  $routeConfig = [
    {path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
    {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
  ]
}
export const Ng1AppModule = angular.module('app', ['ngComponentRouter', 'heroes', 'crisis-center'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', new AppComponent());

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/