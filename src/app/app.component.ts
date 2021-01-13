import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Áries',
      url: '/aries',
      icon: 'flame'
    },
    {
      title: 'Touro',
      url: '/touro',
      icon: 'earth'
    },
    {
      title: 'Gêmeos',
      url: '/gemeos',
      icon: 'leaf'
    },
    {
      title: 'Câncer',
      url: '/cancer',
      icon: 'water'
    },
    {
      title: 'Leão',
      url: '/leao',
      icon: 'flame'
    },
    {
      title: 'Virgem',
      url: '/virgem',
      icon: 'earth'
    },
    {
      title: 'Libra',
      url: '/libra',
      icon: 'leaf'
    },
    {
      title: 'Escorpião',
      url: '/escorpiao',
      icon: 'water'
    },
    {
      title: 'Sagitário',
      url: '/sagitario',
      icon: 'flame'
    },
    {
      title: 'Capricórnio',
      url: '/capricornio',
      icon: 'earth'
    },
    {
      title: 'Aquário',
      url: '/aquario',
      icon: 'leaf'
    },
    {
    title: 'Peixes',
      url: '/peixes',
      icon: 'water'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
