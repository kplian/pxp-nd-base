import {PxpApp} from '@pxp-nd/core';
import config from './config';

console.log('PXPAPP', PxpApp);

class App extends PxpApp {
  constructor() {
    super(config);
    this.initializeMiddlewares();
  }
}

export default App;
