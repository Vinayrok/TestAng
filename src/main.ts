import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Environment } from './environments/environments';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  if(Environment.Production)
  {
    enableProdMode();
  }

function enableProdMode() {
  throw new Error('Function not implemented.');
}
