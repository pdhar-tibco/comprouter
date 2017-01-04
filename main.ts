import { UpgradeModule } from '@angular/upgrade/static';
// import polyfills
// import 'core-js/es7/reflect'
// import 'zone.js/dist/zone'

// import angular2 dpes
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Router} from '@angular/router';

import {AppModule} from './ng1_app';
import {Ng2AppModule} from './ng2_app';

/**
 * We bootstrap the Angular 2 module first, and then, once it's done,
 * bootstrap the Angular 1 module.
 */
platformBrowserDynamic().bootstrapModule(Ng2AppModule).then(ref => {
  const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
  // bootstrap angular1
  // (<any>ref.instance).
  upgrade.bootstrap(document.body, [AppModule.name], {strictDi: false});

  // setTimeout is necessary because upgrade.bootstrap is async.
  // This should be fixed.
  setTimeout(() => {
    ref.injector.get(Router).initialNavigation();
  }, 0);
});
