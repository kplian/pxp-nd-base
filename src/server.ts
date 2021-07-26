/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Stars server
 *
 * @summary Stars server.
 * @author Jaime Rivera
 *
 * Created at     : 2020-06-13 18:09:48
 * Last modified  : 2020-09-17 18:38:16
 */
import 'dotenv/config';
import App from './App';

const app = new App();
(async function run() {
  try {
    await app.connectToTheDatabase();
    await app.loadControllers()
    app.listen();
  } catch (e) {
    console.log(e);    
  }
}());
