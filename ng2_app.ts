/**
 * This file defines the root module of the Angular 2 of the application.
 */

// import angular2
import {NgModule, Component} from '@angular/core';
import {Router, RouterModule, UrlHandlingStrategy} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule,UpgradeComponent} from '@angular/upgrade/static';
import { Ng1AppModule } from './ng1_app';
import { HelloWorldNgModule } from './hello/index';

// import app modules


// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { 
    let result = url.toString().startsWith("/helloworld");
      console.log("[strategy.shouldProcessUrl] " + url.toString() + " " + result);
      return result;
  }
  extract(url) { 
    console.log("[strategy.extract] " + url.toString());
    return url; 
  }
  merge(url, whole) { 
    console.log("[strategy.merge] " + url.toString() + " whole:" + whole.toString());
    return url; 
  }
}

@Component({
  selector: 'root-cmp',
  template: `
    Loading....
  `,
})
export class RootCmp {}


@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,

    // import all modules
    Ng1AppModule,
    HelloWorldNgModule,

    // We don't need to provide any routes.
    // The router will collect all routes from all the registerd modules.
    RouterModule.forRoot([
      // {  path: "helloworld", loadChildren : "./hello/index#HelloWorldNgModule" }
    ], {
      useHash: false,
      enableTracing: true,
      initialNavigation: false // we went to trigger navigation outselves after ng1 is done bootstrapping
    }),
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],

  bootstrap: [],
  declarations: [RootCmp]
})
export class Ng2AppModule {
  constructor(public upgrade: UpgradeModule){}
  ngDoBootstrap() {
     console.log("ngDoBootstrap")
  }
}