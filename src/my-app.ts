import { IRoute } from '@aurelia/router';

import { AnimationHooks } from './lifecycle-hooks/animation-hooks';

import "./css/theme.css";

import { dom } from './_fortawesome';

export class MyApp {
  static dependencies = [AnimationHooks];
  
    static routes: IRoute[] = [
        {
          path: [''],
          component: () => import('./pages/home'),
        },
        {
            path: ['projects'],
            component: () => import('./pages/projects'),
          }
    ];

    async attached() {
      dom.watch();
    }
}
