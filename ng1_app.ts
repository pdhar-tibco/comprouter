import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
'use strict';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
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
export const AppModule = angular.module('app', ['ngComponentRouter', 'heroes', 'crisis-center'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', new AppComponent());

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    UpgradeModule,
    RouterModule.forChild([
      
    ])
  ],
  declarations: []
})
export class Ng1AppModule {
    ngDoBootstrap() {
      console.log('ngDoBootStrap()')
    }
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/