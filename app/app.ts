import {ionicBootstrap, Platform} from 'ionic-angular';
import {Component} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {EJ_CHECKBOX_COMPONENTS} from 'ej/checkbox.component';
import {EJ_RADIOBUTTON_COMPONENTS} from 'ej/radiobutton.component';
import {EJ_TOGGLEBUTTON_COMPONENTS} from 'ej/togglebutton.component';
import {EJ_BUTTON_COMPONENTS} from 'ej/button.component';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
ionicBootstrap(MyApp, [], {}); // http://ionicframework.com/docs/v2/api/config/Config/