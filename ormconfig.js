const { createConnections } = require('@pxp-nd/core');

/** You can use these parameters
 * synchronize: boolean, - Indicates if database schema should be auto created on every application launch. 
 *                         Be careful with this option and don't use this in production -
 *                         otherwise you can lose production data. 
 * logging: boolean,     - If set to true then query and error logging will be enabled.
**/
const connection = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'dbpostgres',
};

module.exports = createConnections(connection);
