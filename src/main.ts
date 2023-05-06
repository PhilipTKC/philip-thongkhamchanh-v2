import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';
import * as valueConverters from './value-converters';

Aurelia
  .register(RouterConfiguration
    .customize({
      useUrlFragmentHash: false,
      swapOrder: 'detach-attach-simultaneously',
      title: {
        appTitle: "${componentTitles}${appTitleSeparator}Philip Thongkhamchanh"
      }
    })
  )
  .register(valueConverters)
  .app(MyApp)
  .start();
