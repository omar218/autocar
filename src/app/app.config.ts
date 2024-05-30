import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDKR855KOJhxS6ZW2T0fE2GFKcMLY-6Rc8',
  authDomain: 'autocar-4f05d.firebaseapp.com',
  databaseURL: 'https://autocar-4f05d-default-rtdb.firebaseio.com',
  projectId: 'autocar-4f05d',
  storageBucket: 'autocar-4f05d.appspot.com',
  messagingSenderId: '261917176260',
  appId: '1:261917176260:web:2cc4e2cfc457b6fbc1b491',
  measurementId: 'G-NPCNTXH5K2',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
