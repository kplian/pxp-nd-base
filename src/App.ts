import {PxpApp} from '@pxp-nd/core';
import config from './config';
class App extends PxpApp {
  constructor() {
    super(config);
    this.initializeMiddlewares();
  }
}

export default App;
